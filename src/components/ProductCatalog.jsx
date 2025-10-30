import { Home, Layers, TreePine, Building2, Wrench, Hammer } from 'lucide-react'

export default function ProductCatalog() {
  const categories = [
    {
      icon: Home,
      title: 'Cubiertas metálicas',
      description: 'Soluciones duraderas para techos con garantía de calidad',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      icon: Layers,
      title: 'Tabiquería',
      description: 'Planchas de yeso, perfiles metálicos y accesorios',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      icon: TreePine,
      title: 'Maderas',
      description: 'Madera de calidad para estructura y terminaciones',
      color: 'bg-amber-50 hover:bg-amber-100'
    },
    {
      icon: Building2,
      title: 'Estructural',
      description: 'Fierros, perfiles de acero y elementos estructurales',
      color: 'bg-gray-50 hover:bg-gray-100'
    },
    {
      icon: Wrench,
      title: 'Accesorios',
      description: 'Canaletas, bajadas y accesorios de fijación',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      icon: Hammer,
      title: 'Quincallería',
      description: 'Tornillos, sujeciones y elementos de montaje',
      color: 'bg-red-50 hover:bg-red-100'
    }
  ]

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Nuestros productos</h2>
        <p className="text-center text-[#6d6e71] text-lg mb-12 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de materiales de construcción certificados para todo tipo de proyectos
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`${category.color} p-6 rounded-lg card-hover cursor-pointer border-2 border-transparent hover:border-[#ed1c24] transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon size={24} className="text-[#ed1c24]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#6d6e71] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#6d6e71] mb-4">
                      {category.description}
                    </p>
                    <button className="text-[#ed1c24] font-semibold hover:underline flex items-center gap-1">
                      Ver productos
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
