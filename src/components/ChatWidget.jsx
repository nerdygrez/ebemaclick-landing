import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleWhatsApp = () => {
    window.open('https://wa.me/56912345678?text=Hola,%20necesito%20información%20sobre%20materiales%20de%20construcción', '_blank')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Simulate sending message
      console.log('Message sent:', message)
      setMessage('')
      // In production, this would send to chat API
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#ed1c24] text-white rounded-full shadow-lg hover:bg-[#d11920] transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#ed1c24] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold">EbemaClick</h4>
                <p className="text-xs opacity-90">¿En qué podemos ayudarte?</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 bg-[#f5f5f5] max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ed1c24] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  E
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm text-[#6d6e71]">
                    ¡Hola! Bienvenido a EbemaClick. ¿Cómo podemos ayudarte con tus materiales de construcción?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-xs text-[#6d6e71] font-semibold">Opciones rápidas:</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] text-white p-3 rounded-lg hover:bg-[#20BA5A] transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  Chatear por WhatsApp
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    const element = document.getElementById('formulario')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full bg-white text-[#6d6e71] border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Solicitar cotización
                </button>
              </div>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] text-sm"
              />
              <button
                type="submit"
                className="bg-[#ed1c24] text-white p-2 rounded-lg hover:bg-[#d11920] transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-[#6d6e71] mt-2">
              Horario de atención: Lunes a Viernes 9:00 - 18:00
            </p>
          </form>
        </div>
      )}
    </>
  )
}
