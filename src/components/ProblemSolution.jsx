import { X, Check, Clock, Shield, Truck, DollarSign } from 'lucide-react'

export default function ProblemSolution() {
  const problems = [
    {
      icon: Clock,
      text: 'Demoras en obtener cotizaciones'
    },
    {
      icon: Shield,
      text: 'Materiales sin respaldo técnico ni certificación'
    },
    {
      icon: Truck,
      text: 'Entregas inconsistentes o impredecibles'
    },
    {
      icon: DollarSign,
      text: 'Falta de transparencia en precios'
    }
  ]

  const solutions = [
    {
      icon: Clock,
      text: 'Respuesta rápida y clara en menos de 24h'
    },
    {
      icon: Shield,
      text: 'Productos certificados, calidad garantizada'
    },
    {
      icon: Truck,
      text: 'Entregas programadas y cobertura nacional'
    },
    {
      icon: DollarSign,
      text: 'Precios claros y sin sorpresas'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">¿Por qué usar EbemaClick?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#6d6e71] mb-6">Problemas comunes</h3>
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <X size={20} className="text-[#ed1c24]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#6d6e71] font-medium">{problem.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#6d6e71] mb-6">Nuestra promesa</h3>
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#6d6e71] font-medium">{solution.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
