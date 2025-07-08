import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t px-4 md:px-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-500">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo à esquerda */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo Bento+20"
            className="h-12 w-auto"
          />
        </a>

        {/* Contatos */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white text-sm">
          {/* Redes Sociais */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bentomais20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white/80 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/bentomais20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white/80 transition"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5554991862375"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white/80 transition"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/bento-20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white/80 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Email */}
          <a href="mailto:bentomaisvinte@gmail.com">
            <span className="text-white/90 ">bentomaisvinte@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
