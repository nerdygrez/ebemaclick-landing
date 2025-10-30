import { ArrowRight, Award, MapPin, Clock } from 'lucide-react'
import heroImage from '../assets/hero_construction_materials.jpg'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Materiales de construcción a un solo clic<br />
          <span className="text-[#ed1c24]">con respaldo Ebema</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Cotiza y adquiere productos certificados con entrega nacional y soporte técnico
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('formulario')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Cotiza ahora
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('catalogo')}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Ver catálogo
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Clock size={20} />
            <span className="text-sm md:text-base font-medium">+40 años de experiencia</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Award size={20} />
            <span className="text-sm md:text-base font-medium">Materiales certificados</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <MapPin size={20} />
            <span className="text-sm md:text-base font-medium">Entregas a todo Chile</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
