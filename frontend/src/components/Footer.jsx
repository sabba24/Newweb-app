export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} 876Alert. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-[color:var(--jamaica-green)]">About</a>
          <a href="#contact" className="hover:text-[color:var(--jamaica-green)]">Contact</a>
          <a href="#privacy" className="hover:text-[color:var(--jamaica-green)]">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
