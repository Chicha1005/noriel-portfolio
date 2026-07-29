export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="
          w-full
          max-w-6xl
          rounded-2xl
          border border-white/10
          bg-slate-900/70
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="flex items-center justify-between px-8 py-4">
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-sky-400 transition hover:text-sky-300"
          >
            Noriel
          </a>

          <nav>
            <ul className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      relative
                      text-sm
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:text-sky-400
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-[2px]
                      after:w-0
                      after:bg-sky-400
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}