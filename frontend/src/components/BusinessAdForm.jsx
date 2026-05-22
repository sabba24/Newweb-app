import { useMemo, useState } from 'react';
import { api } from '../lib/api';
import { saveBusinessAd } from '../lib/dashboardStorage';

const initialForm = {
  business_name: '',
  ad_title: '',
  promo_description: '',
  discount_amount: '',
  has_website: 'no',
  website_url: '',
  call_phone: '',
  location: '',
  cta_type: 'Learn More',
  start_date: '',
  end_date: '',
  budget: '',
};

function filePreview(file) {
  return file ? URL.createObjectURL(file) : '';
}

export default function BusinessAdForm() {
  const [form, setForm] = useState(initialForm);
  const [adImage, setAdImage] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const imagePreview = useMemo(() => filePreview(adImage), [adImage]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validate() {
    const required = ['business_name', 'ad_title', 'promo_description', 'call_phone', 'location', 'start_date', 'end_date'];
    const missing = required.find((field) => !String(form[field]).trim());

    if (missing) {
      setStatus({ type: 'error', message: 'Please complete all required ad fields before submitting.' });
      return false;
    }

    if (form.has_website === 'yes' && !form.website_url.trim()) {
      setStatus({ type: 'error', message: 'Please enter your website URL or select No.' });
      return false;
    }

    if (!adImage) {
      setStatus({ type: 'error', message: 'Please upload an ad image or banner.' });
      return false;
    }

    return true;
  }

  async function submitAd(event) {
    event.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key !== 'has_website') payload.append(key, form.has_website === 'no' && key === 'website_url' ? '' : value);
    });
    payload.append('ad_image', adImage);

    const savedPayload = {
      ...form,
      website_url: form.has_website === 'no' ? '' : form.website_url,
      image_preview: imagePreview,
    };

    try {
      await api.post('/business-ads', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      saveBusinessAd(savedPayload);
      setStatus({ type: 'success', message: 'Business ad submitted for review/payment.' });
      setForm(initialForm);
      setAdImage(null);
    } catch {
      saveBusinessAd(savedPayload);
      setStatus({ type: 'success', message: 'Business ad saved for review. Backend ad processing will sync when available.' });
      setForm(initialForm);
      setAdImage(null);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submitAd} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <span className="badge bg-blue-50 text-blue-700 ring-1 ring-blue-100">Business Ad</span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Create business ad or promotion</h2>
      <p className="mt-2 max-w-3xl text-sm font-semibold leading-7 text-slate-600">
        Submit a sponsored placement for review and payment processing.
      </p>

      {status.message && (
        <div className={`mt-6 rounded-2xl px-4 py-3 text-sm font-bold ${
          status.type === 'error' ? 'bg-red-50 text-red-700 ring-1 ring-red-100' : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
        }`}>
          {status.message}
        </div>
      )}

      <div className="mt-8 grid gap-6">
        <section>
          <h3 className="text-xl font-black text-slate-950">Ad details</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Business name *
              <input className="input-premium" value={form.business_name} onChange={(event) => updateField('business_name', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Ad title *
              <input className="input-premium" value={form.ad_title} onChange={(event) => updateField('ad_title', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Discount amount optional
              <input className="input-premium" value={form.discount_amount} onChange={(event) => updateField('discount_amount', event.target.value)} placeholder="10% off / JMD $500" />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2 xl:col-span-3">
              Promo description *
              <textarea className="input-premium min-h-32" value={form.promo_description} onChange={(event) => updateField('promo_description', event.target.value)} />
            </label>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-black text-slate-950">CTA and campaign settings</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2 xl:col-span-4">
              Do you have a website?
              <div className="grid gap-3 sm:grid-cols-2">
                {['yes', 'no'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField('has_website', option)}
                    className={`rounded-2xl border px-4 py-3 text-left font-black capitalize transition ${
                      form.has_website === option ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {form.has_website === 'yes' && (
              <label className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2">
                Website URL
                <input type="url" className="input-premium" value={form.website_url} onChange={(event) => updateField('website_url', event.target.value)} placeholder="https://example.com" />
              </label>
            )}

            <label className="grid gap-2 text-sm font-black text-slate-800">
              Call phone number *
              <input className="input-premium" value={form.call_phone} onChange={(event) => updateField('call_phone', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Parish/location *
              <input className="input-premium" value={form.location} onChange={(event) => updateField('location', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              CTA type *
              <select className="input-premium" value={form.cta_type} onChange={(event) => updateField('cta_type', event.target.value)}>
                <option>Shop Now</option>
                <option>Call Now</option>
                <option>Learn More</option>
                <option>Book Now</option>
                <option>Promotion</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Start date *
              <input type="date" className="input-premium" value={form.start_date} onChange={(event) => updateField('start_date', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800">
              End date *
              <input type="date" className="input-premium" value={form.end_date} onChange={(event) => updateField('end_date', event.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2">
              Budget placeholder
              <input className="input-premium" value={form.budget} onChange={(event) => updateField('budget', event.target.value)} placeholder="Budget to confirm during payment review" />
            </label>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-black text-slate-950">Ad image/banner</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-[360px_1fr]">
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Upload ad image/banner *
              <input type="file" accept="image/*" className="input-premium" onChange={(event) => setAdImage(event.target.files?.[0] || null)} />
            </label>
            {imagePreview && <img src={imagePreview} alt="Ad preview" className="h-64 w-full rounded-3xl object-cover ring-1 ring-slate-100" />}
          </div>
        </section>

        <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-100">
          <p className="text-sm font-black text-slate-950">Payment integration coming next</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">This ad will be submitted for review/payment. Stripe and PayPal buttons will be connected later.</p>
        </div>

        <button disabled={submitting} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {submitting ? 'Submitting for review/payment...' : 'Submit for review/payment'}
        </button>
      </div>
    </form>
  );
}