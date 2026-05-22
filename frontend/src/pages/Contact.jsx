import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-emerald-50 py-16 sm:py-24">
          <div className="container-premium grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="badge bg-emerald-50 text-emerald-700">Contact us</span>
              <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">Partner, report, or request support.</h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                For inquiries, partnerships, or press, email support@876alert.example or call 1-876-000-0000.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:119" className="rounded-3xl bg-emerald-700 p-6 text-white shadow-lg">
                  <span className="block text-4xl font-black">119</span>
                  <span className="font-bold">Police emergency</span>
                </a>
                <a href="tel:110" className="rounded-3xl bg-yellow-300 p-6 text-gray-950 shadow-lg">
                  <span className="block text-4xl font-black">110</span>
                  <span className="font-bold">Fire / ambulance</span>
                </a>
              </div>
            </div>

            <form className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black">Name</label>
                  <input className="input-premium" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-black">Email</label>
                  <input className="input-premium" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-black">Subject</label>
                <input className="input-premium" placeholder="How can we help?" />
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-black">Message</label>
                <textarea className="input-premium min-h-36 resize-y" placeholder="Share details..." />
              </div>
              <button className="btn btn-primary mt-5 w-full">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}