import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Award, CheckCircle, Leaf } from 'lucide-react'

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: 'Trabajar con EbemaClick nos permitió reducir plazos de compra y garantizar materiales confiables en obra. El soporte técnico es excepcional.',
      author: 'Constructora Horizonte',
      role: 'Jefe de Adquisiciones',
      project: 'Proyecto Residencial Los Álamos'
    },
    {
      text: 'La calidad de los materiales y la puntualidad en las entregas han sido fundamentales para cumplir nuestros plazos. Recomendamos 100% EbemaClick.',
      author: 'Ingeniería y Construcción Sur',
      role: 'Gerente de Proyectos',
      project: 'Centro Comercial Plaza Norte'
    },
    {
      text: 'Los certificados de calidad y el respaldo técnico de Ebema nos dan la tranquilidad que necesitamos para proyectos de gran envergadura.',
      author: 'Constructora Andina',
      role: 'Director de Operaciones',
      project: 'Edificio Corporativo Santiago Centro'
    }
  ]

  const certifications = [
    {
      icon: Award,
      title: 'Certificados de calidad del acero',
      description: 'Acceso digital a certificados en certificados.ebema.cl'
    },
    {
      icon: CheckCircle,
      title: 'Norma NCh204',
      description: 'Barras laminadas en caliente para hormigón armado'
    },
    {
      icon: Leaf,
      title: 'Certificación LEED',
      description: 'Acero reciclado - Planta de corte y doblado'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="certificados" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Confían en nosotros</h2>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
            <Quote size={48} className="text-[#ed1c24] opacity-20 absolute top-4 left-4" />
            
            <div className="relative z-10">
              <p className="text-xl text-[#6d6e71] mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#6d6e71]">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-[#6d6e71]">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-sm text-[#ed1c24] mt-1">
                  {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#ed1c24] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[#ed1c24] w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#ed1c24] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-[#6d6e71] text-center mb-8">
            Certificaciones destacadas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#ed1c24] bg-opacity-10 rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-[#ed1c24]" />
                    </div>
                  </div>
                  <h4 className="font-bold text-[#6d6e71] mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[#6d6e71]">
                    {cert.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
