import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Ebema" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('catalogo')}
              className="text-[#6d6e71] hover:text-[#ed1c24] font-medium transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-[#6d6e71] hover:text-[#ed1c24] font-medium transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('certificados')}
              className="text-[#6d6e71] hover:text-[#ed1c24] font-medium transition-colors"
            >
              Certificados
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-[#6d6e71] hover:text-[#ed1c24] font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#6d6e71] hover:text-[#ed1c24] font-medium transition-colors">
              Iniciar sesión
            </button>
            <button
              onClick={() => scrollToSection('formulario')}
              className="btn-primary"
            >
              Cotiza ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#6d6e71] hover:text-[#ed1c24] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('catalogo')}
              className="block w-full text-left px-4 py-3 text-[#6d6e71] hover:bg-[#f5f5f5] hover:text-[#ed1c24] rounded-lg transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left px-4 py-3 text-[#6d6e71] hover:bg-[#f5f5f5] hover:text-[#ed1c24] rounded-lg transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('certificados')}
              className="block w-full text-left px-4 py-3 text-[#6d6e71] hover:bg-[#f5f5f5] hover:text-[#ed1c24] rounded-lg transition-colors"
            >
              Certificados
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-3 text-[#6d6e71] hover:bg-[#f5f5f5] hover:text-[#ed1c24] rounded-lg transition-colors"
            >
              Contacto
            </button>
            <div className="pt-2 border-t border-gray-200">
              <button className="block w-full text-left px-4 py-3 text-[#6d6e71] hover:bg-[#f5f5f5] rounded-lg transition-colors">
                Iniciar sesión
              </button>
              <button
                onClick={() => scrollToSection('formulario')}
                className="btn-primary w-full mt-2"
              >
                Cotiza ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
