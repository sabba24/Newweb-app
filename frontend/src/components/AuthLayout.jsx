import logo from '../assets/logo.svg';

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex flex-1 items-center bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_60%,#fff7cc_100%)] py-12">
      <div className="container-premium">
        <section className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.14)] sm:p-8">
          <div className="mb-7 text-center">
            <img src={logo} alt="876Alert" className="mx-auto h-[44px] w-[184px] object-contain" />
            <h1 className="mt-7 text-3xl font-black tracking-tight text-slate-950">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
          </div>
          {children}
        </section>
      </div>
    </main>
  );
}