export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* Logo */}
        <div className="text-xl font-bold text-foreground">B20</div>

        {/* Links */}
        <nav className="flex gap-4 text-muted-foreground text-sm">
          <a href="#sobre" className="hover:text-foreground transition">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-foreground transition">
            Serviços
          </a>
          <a href="#contato" className="hover:text-foreground transition">
            Contato
          </a>
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-3 text-muted-foreground">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-foreground transition"
          >
            {/* Ícone lucide-react, por ex.: */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-6 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-foreground transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 1a11 11 0 00-3.47 21.44c.5.09.68-.22.68-.49v-1.72c-2.73.57-3.3-1.32-3.3-1.32a2.6 2.6 0 00-1.1-1.43c-.9-.62.07-.6.07-.6a2.07 2.07 0 011.52 1c.89 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.63-1.34-2.2-.26-4.51-1.1-4.51-4.91a3.84 3.84 0 011-2.67 3.57 3.57 0 01.1-2.63s.84-.27 2.76 1.02a9.45 9.45 0 015 0c1.92-1.29 2.76-1.02 2.76-1.02a3.57 3.57 0 01.1 2.63 3.84 3.84 0 011 2.67c0 3.82-2.31 4.65-4.51 4.91.36.31.68.93.68 1.87v2.77c0 .27.18.58.68.48A11 11 0 0012 1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
