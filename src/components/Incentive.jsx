import { Gift, ArrowRight } from 'lucide-react'

export default function Incentive() {
  const scrollToForm = () => {
    const element = document.getElementById('formulario')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-[#ed1c24] to-[#c41820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-white">
            <div className="flex-shrink-0 w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Gift size={40} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Oferta especial para nuevos clientes
              </h3>
              <p className="text-lg opacity-90">
                Cotiza hoy y accede a un 5% de descuento en tu primer pedido
              </p>
            </div>
          </div>
          
          <button
            onClick={scrollToForm}
            className="flex-shrink-0 bg-white text-[#ed1c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Solicita tu descuento
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
