import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlanCard from '../components/PlanCard';
import PaymentPlaceholder from '../components/PaymentPlaceholder';
import { pricingPlans } from '../lib/planData';

export default function Plans() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_58%,#fff8d7_100%)] py-16 sm:py-24">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl text-center">
              <span className="badge bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-100">876Alert Plans</span>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 sm:text-6xl">
                Pricing for families, businesses, and public safety teams.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Choose the right plan for missing-person alerts, sponsored community visibility, or official agency operations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pricingPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl">
              <PaymentPlaceholder plan={pricingPlans.find((plan) => plan.id === 'business_pro')} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}