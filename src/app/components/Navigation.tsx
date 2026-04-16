export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/88 backdrop-blur-2xl border-b border-[var(--border)] flex items-center justify-between px-[5vw] h-16">
      <div className="flex items-center gap-2 font-extrabold text-xl text-[var(--accent)] tracking-tight">
        <div className="w-2 h-2 rounded-full bg-[var(--teal)]"></div>
        Dangol CRM
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#features" className="no-underline text-[var(--ink-soft)] text-sm font-medium hover:text-[var(--accent)] transition-colors">기능</a></li>
        <li><a href="#industries" className="no-underline text-[var(--ink-soft)] text-sm font-medium hover:text-[var(--accent)] transition-colors">산업별</a></li>
        <li><a href="#demo" className="no-underline text-[var(--ink-soft)] text-sm font-medium hover:text-[var(--accent)] transition-colors">데모</a></li>
        <li><a href="#pricing" className="no-underline text-[var(--ink-soft)] text-sm font-medium hover:text-[var(--accent)] transition-colors">요금제</a></li>
        <li><a href="#cases" className="no-underline text-[var(--ink-soft)] text-sm font-medium hover:text-[var(--accent)] transition-colors">고객 사례</a></li>
      </ul>
      <a 
        href="#pricing" 
        className="bg-[var(--accent)] text-white px-5 py-2 rounded-lg text-sm font-semibold no-underline transition-all hover:bg-[#0f3820] hover:-translate-y-0.5"
      >
        무료로 시작하기
      </a>
      <div className="md:hidden cursor-pointer text-xl">☰</div>
    </nav>
  );
}