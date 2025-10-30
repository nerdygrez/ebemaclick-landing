import { UserPlus, ShoppingCart, FileText, Truck, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Regístrate / Inicia sesión',
      description: 'Crea tu cuenta en EbemaClick en minutos con tus datos de obra'
    },
    {
      number: 2,
      icon: ShoppingCart,
      title: 'Selecciona materiales',
      description: 'Elige desde nuestro catálogo o describe lo que necesitas con fotos/planos'
    },
    {
      number: 3,
      icon: FileText,
      title: 'Recibe tu cotización',
      description: 'Nuestro equipo técnico la revisa y te envía propuesta clara y competitiva'
    },
    {
      number: 4,
      icon: Truck,
      title: 'Coordina entrega / pago',
      description: 'Escoge tu forma de pago y nosotros coordinamos la logística a tu obra'
    }
  ]

  const scrollToForm = () => {
    const element = document.getElementById('formulario')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="como-funciona" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Cómo funciona EbemaClick</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ed1c24] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-[#ed1c24]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#6d6e71] mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#6d6e71] text-center">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-[#ed1c24]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="btn-primary"
          >
            Solicita tu cotización ahora
          </button>
        </div>
      </div>
    </section>
  )
}
