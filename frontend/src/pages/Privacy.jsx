import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-gray-700">We respect your privacy. 876Alert collects only the information necessary to operate the platform and improve public safety. We do not sell your personal data.</p>
            <div className="mt-8 space-y-6 text-gray-700">
              <section>
                <h2 className="text-lg font-semibold text-gray-900">Information we collect</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                  <li>Account details (name, email) for authentication</li>
                  <li>Report details (when you submit alerts or missing persons)</li>
                  <li>Technical logs for security and reliability</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-gray-900">How we use information</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                  <li>Provide and secure platform features</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-gray-900">Your rights</h2>
                <p className="mt-2 text-sm">You can request access, correction, or deletion of your data. Contact support@876alert.example.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
