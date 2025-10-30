import { MapPin, Phone, Mail, Facebook, Instagram, ExternalLink } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contacto" className="bg-[#6d6e71] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Productos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Cubiertas metálicas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Tabiquería
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Maderas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Estructural
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Accesorios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Quincallería
                </button>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ebema.cl" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c24] transition-colors flex items-center gap-1">
                  Acerca de Ebema
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certificados')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Nuestros clientes
                </button>
              </li>
              <li>
                <a href="https://www.ebema.cl" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c24] transition-colors flex items-center gap-1">
                  Blog
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://certificados.ebema.cl" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c24] transition-colors flex items-center gap-1">
                  Certificados
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-lg font-bold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Preguntas frecuentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('formulario')}
                  className="hover:text-[#ed1c24] transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#ed1c24] transition-colors">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ed1c24] transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Galvarino 8501, Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+56223456789" className="hover:text-[#ed1c24] transition-colors">
                  +56 2 2345 6789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:contacto@ebema.cl" className="hover:text-[#ed1c24] transition-colors">
                  contacto@ebema.cl
                </a>
              </li>
            </ul>
            
            {/* Redes Sociales */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/ebemachile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#ed1c24] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/ebemachile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#ed1c24] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Ebema" className="h-10 w-auto" />
            <p className="text-sm">© 2025 Ebema S.A. Todos los derechos reservados</p>
          </div>
          
          <a
            href="https://certificados.ebema.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#ed1c24] transition-colors flex items-center gap-1"
          >
            Portal de certificados
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
