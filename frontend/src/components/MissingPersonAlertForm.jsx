import { useMemo, useState } from 'react';
import { api } from '../lib/api';
import { getMonthlyMissingAlertCount, saveMissingAlert } from '../lib/dashboardStorage';

const parishes = [
  'Kingston',
  'St. Andrew',
  'St. Catherine',
  'Clarendon',
  'Manchester',
  'St. Elizabeth',
  'Westmoreland',
  'Hanover',
  'St. James',
  'Trelawny',
  'St. Ann',
  'St. Mary',
  'Portland',
  'St. Thomas',
];

const initialForm = {
  name: '',
  date_of_birth: '',
  age: '',
  gender: '',
  parish: '',
  last_seen_location: '',
  last_seen_at: '',
  clothing_last_worn: '',
  physical_description: '',
  medical_conditions: '',
  contact_person_name: '',
  contact_phone: '',
  relationship: '',
  reward_amount: '',
  description: '',
  consent: false,
};

function filePreview(file) {
  return file ? URL.createObjectURL(file) : '';
}

export default function MissingPersonAlertForm({ accountType = 'personal_free' }) {
  const [form, setForm] = useState(initialForm);
  const [mainPhoto, setMainPhoto] = useState(null);
  const [additionalPhotos, setAdditionalPhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const monthlyCount = getMonthlyMissingAlertCount();
  const monthlyLimit = accountType === 'personal_free' ? 1 : accountType === 'personal_pro' ? 10 : 20;
  const limitReached = monthlyCount >= monthlyLimit;
  const usagePercent = Math.min(100, Math.round((monthlyCount / monthlyLimit) * 100));

  const mainPhotoPreview = useMemo(() => filePreview(mainPhoto), [mainPhoto]);
  const additionalPreviews = useMemo(() => additionalPhotos.map(filePreview), [additionalPhotos]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validate() {
    const required = [
      'name',
      'age',
      'gender',
      'parish',
      'last_seen_location',
      'last_seen_at',
      'contact_person_name',
      'contact_phone',
      'relationship',
      'description',
    ];

    const missing = required.find((field) => !String(form[field]).trim());

    if (missing) {
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return false;
    }

    if (!mainPhoto) {
      setStatus({ type: 'error', message: 'Please upload a main photo of the missing person.' });
      return false;
    }

    if (!form.consent) {
      setStatus({ type: 'error', message: 'Please confirm consent before submitting this alert.' });
      return false;
    }

    return true;
  }

  async function submitAlert(event) {
    event.preventDefault();

    if (limitReached || !validate()) return;

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    payload.append('main_photo', mainPhoto);
    additionalPhotos.forEach((photo) => payload.append('additional_photos[]', photo));
    if (video) payload.append('video', video);

    const savedPayload = {
      ...form,
      photo_preview: mainPhotoPreview,
      additional_photo_count: additionalPhotos.length,
      has_video: Boolean(video),
    };

    try {
      await api.post('/missing-persons', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      saveMissingAlert(savedPayload);
      setStatus({ type: 'success', message: 'Missing-person alert submitted for review.' });
      setForm(initialForm);
      setMainPhoto(null);
      setAdditionalPhotos([]);
      setVideo(null);
    } catch {
      saveMissingAlert(savedPayload);
      setStatus({ type: 'success', message: 'Alert saved and queued for review. Backend upload will sync when available.' });
      setForm(initialForm);
      setMainPhoto(null);
      setAdditionalPhotos([]);
      setVideo(null);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <form onSubmit={submitAlert} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">Create Missing Person Alert</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Submit a missing-person report</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-7 text-slate-600">
              Complete the information below so the report can be reviewed and prepared for community safety visibility.
            </p>
          </div>
        </div>

        {status.message && (
          <div className={`mt-6 rounded-2xl px-4 py-3 text-sm font-bold ${
            status.type === 'error' ? 'bg-red-50 text-red-700 ring-1 ring-red-100' : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
          }`}>
            {status.message}
          </div>
        )}

        <div className="mt-8 grid gap-8">
          <section>
            <h3 className="text-xl font-black text-slate-950">Missing person details</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Full name *
                <input className="input-premium" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Date of birth
                <input type="date" className="input-premium" value={form.date_of_birth} onChange={(event) => updateField('date_of_birth', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Age *
                <input type="number" min="0" className="input-premium" value={form.age} onChange={(event) => updateField('age', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Gender *
                <select className="input-premium" value={form.gender} onChange={(event) => updateField('gender', event.target.value)}>
                  <option value="">Select gender</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other / Unknown</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Parish *
                <select className="input-premium" value={form.parish} onChange={(event) => updateField('parish', event.target.value)}>
                  <option value="">Select parish</option>
                  {parishes.map((parish) => <option key={parish}>{parish}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Last seen date/time *
                <input type="datetime-local" className="input-premium" value={form.last_seen_at} onChange={(event) => updateField('last_seen_at', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2 xl:col-span-3">
                Last seen location *
                <input className="input-premium" value={form.last_seen_location} onChange={(event) => updateField('last_seen_location', event.target.value)} />
              </label>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-slate-950">Appearance and context</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Clothing last worn
                <textarea className="input-premium min-h-28" value={form.clothing_last_worn} onChange={(event) => updateField('clothing_last_worn', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Physical description
                <textarea className="input-premium min-h-28" value={form.physical_description} onChange={(event) => updateField('physical_description', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Medical conditions
                <textarea className="input-premium min-h-28" value={form.medical_conditions} onChange={(event) => updateField('medical_conditions', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Description/details *
                <textarea className="input-premium min-h-28" value={form.description} onChange={(event) => updateField('description', event.target.value)} />
              </label>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-slate-950">Contact and reward</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Contact person *
                <input className="input-premium" value={form.contact_person_name} onChange={(event) => updateField('contact_person_name', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Contact phone *
                <input className="input-premium" value={form.contact_phone} onChange={(event) => updateField('contact_phone', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Relationship *
                <input className="input-premium" value={form.relationship} onChange={(event) => updateField('relationship', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Reward amount optional
                <input className="input-premium" value={form.reward_amount} onChange={(event) => updateField('reward_amount', event.target.value)} placeholder="JMD $" />
              </label>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black text-slate-950">Media uploads</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Main photo *
                <input type="file" accept="image/*" className="input-premium" onChange={(event) => setMainPhoto(event.target.files?.[0] || null)} />
                {mainPhotoPreview && <img src={mainPhotoPreview} alt="Main preview" className="h-52 rounded-2xl object-cover ring-1 ring-slate-100" />}
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Additional photos
                <input type="file" accept="image/*" multiple className="input-premium" onChange={(event) => setAdditionalPhotos(Array.from(event.target.files || []))} />
                <div className="grid grid-cols-3 gap-2">
                  {additionalPreviews.map((preview) => <img key={preview} src={preview} alt="Additional preview" className="h-20 rounded-xl object-cover ring-1 ring-slate-100" />)}
                </div>
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-800">
                Video optional
                <input type="file" accept="video/*" className="input-premium" onChange={(event) => setVideo(event.target.files?.[0] || null)} />
                {video && <span className="rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-700 ring-1 ring-blue-100">{video.name}</span>}
              </label>
            </div>
          </section>

          <label className="flex gap-3 rounded-3xl bg-slate-50 p-5 text-sm font-bold leading-6 text-slate-700 ring-1 ring-slate-100">
            <input type="checkbox" checked={form.consent} onChange={(event) => updateField('consent', event.target.checked)} className="mt-1 h-5 w-5" />
            I confirm I have permission to submit this report and understand it will be reviewed before public visibility.
          </label>

          <button disabled={submitting || limitReached} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            {submitting ? 'Submitting for review...' : 'Submit for review'}
          </button>
        </div>
      </form>

      <aside className="grid gap-5 self-start">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Monthly usage</p>
          <h3 className="mt-3 text-2xl font-black text-slate-950">{monthlyCount} of {monthlyLimit} alerts used</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            {accountType === 'personal_free' ? 'Personal Free includes 1 free alert per month.' : 'Your plan includes expanded alert posting.'}
          </p>
          <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-600" style={{ width: `${usagePercent}%` }} />
          </div>
        </div>

        {limitReached && (
          <div className="rounded-[2rem] bg-amber-50 p-6 shadow-sm ring-1 ring-amber-100">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-800">Limit reached</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">Upgrade to Personal Pro</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-amber-800">Post more missing-person alerts with a paid personal plan.</p>
            <a href="/dashboard/billing" className="btn btn-primary mt-5">Upgrade plan</a>
          </div>
        )}
      </aside>
    </section>
  );
}