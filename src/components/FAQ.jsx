import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Cuáles son las zonas que cubre EbemaClick?',
      answer: 'EbemaClick ofrece cobertura nacional en todo Chile. Realizamos entregas desde Arica a Punta Arenas, con tiempos de entrega que varían según la región. Para zonas específicas, nuestro equipo coordinará contigo la logística más eficiente.'
    },
    {
      question: '¿Cuánto demoran las entregas?',
      answer: 'Los tiempos de entrega varían según la región y el tipo de material. En la Región Metropolitana, las entregas se realizan típicamente entre 2-5 días hábiles. Para regiones, el plazo puede extenderse entre 5-10 días hábiles. Te confirmaremos el plazo exacto al momento de la cotización.'
    },
    {
      question: '¿Puedo pedir materiales fuera de catálogo?',
      answer: 'Sí, absolutamente. Si necesitas materiales específicos que no aparecen en nuestro catálogo, puedes describirlos en el formulario de cotización o adjuntar planos y especificaciones técnicas. Nuestro equipo evaluará tu requerimiento y te enviará una propuesta personalizada.'
    },
    {
      question: '¿Cómo se certifica la calidad de los materiales?',
      answer: 'Todos nuestros materiales cuentan con certificaciones de calidad vigentes. Puedes acceder a los certificados digitales en certificados.ebema.cl. Nuestros productos cumplen con normas chilenas (NCh) e internacionales, y contamos con certificación LEED para acero reciclado.'
    },
    {
      question: '¿Cuál es el método de pago?',
      answer: 'Aceptamos múltiples métodos de pago: transferencia bancaria, cheques, tarjetas de crédito y débito. Para clientes corporativos, ofrecemos facilidades de pago y crédito directo según evaluación. Coordinaremos contigo la mejor opción al momento de confirmar tu pedido.'
    },
    {
      question: '¿Hay retiro en sucursal?',
      answer: 'Sí, puedes retirar tus materiales directamente en nuestra sucursal ubicada en Galvarino 8501, Santiago. Te notificaremos cuando tu pedido esté listo para retiro. Esta opción te permite ahorrar en costos de envío.'
    },
    {
      question: '¿Puedo devolver productos o pedir reemplazo?',
      answer: 'Sí, contamos con política de devoluciones y reemplazos. Si recibes materiales con defectos de fabricación o daños en el transporte, contáctanos dentro de las 48 horas siguientes a la recepción. Evaluaremos el caso y procederemos con el reemplazo o devolución según corresponda.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Preguntas frecuentes</h2>
        
        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ed1c24] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#f5f5f5] transition-colors text-left"
              >
                <span className="font-semibold text-[#6d6e71] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#ed1c24] transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#f5f5f5] border-t border-gray-200">
                  <p className="text-[#6d6e71]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
