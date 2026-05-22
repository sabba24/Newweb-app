import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-gray-700">For inquiries, partnerships, or press, please complete the form below. In an emergency dial 119 immediately.</p>
            <form className="mt-8 grid gap-4 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full name</label>
                  <input type="text" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows="5" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Write your message"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
            <div className="mt-6 text-sm text-gray-600">
              <div><span className="font-medium text-gray-900">Email:</span> support@876alert.example</div>
              <div><span className="font-medium text-gray-900">Phone:</span> +1 (876) 000-0000</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
