import { useState } from 'react'
import { Send, CheckCircle, Upload } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    region: '',
    comuna: '',
    email: '',
    telefono: '',
    detalle: '',
    terminos: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const regiones = [
    'Región de Arica y Parinacota',
    'Región de Tarapacá',
    'Región de Antofagasta',
    'Región de Atacama',
    'Región de Coquimbo',
    'Región de Valparaíso',
    'Región Metropolitana',
    'Región del Libertador General Bernardo O\'Higgins',
    'Región del Maule',
    'Región de Ñuble',
    'Región del Biobío',
    'Región de La Araucanía',
    'Región de Los Ríos',
    'Región de Los Lagos',
    'Región de Aysén',
    'Región de Magallanes'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
    if (!formData.empresa.trim()) newErrors.empresa = 'La empresa/obra es requerida'
    if (!formData.region) newErrors.region = 'La región es requerida'
    if (!formData.comuna.trim()) newErrors.comuna = 'La comuna es requerida'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    const phoneRegex = /^[+]?[0-9]{8,15}$/
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Teléfono inválido'
    }
    
    if (!formData.detalle.trim()) newErrors.detalle = 'El detalle del requerimiento es requerido'
    if (!formData.terminos) newErrors.terminos = 'Debes aceptar los términos y condiciones'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nombre: '',
        empresa: '',
        region: '',
        comuna: '',
        email: '',
        telefono: '',
        detalle: '',
        terminos: false
      })
      setFileName('')
    }, 5000)
  }

  if (submitted) {
    return (
      <section id="formulario" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={48} className="text-green-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#6d6e71] mb-4">
              ¡Cotización enviada con éxito!
            </h3>
            <p className="text-lg text-[#6d6e71] mb-2">
              Gracias por tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
            <p className="text-[#6d6e71]">
              Recibirás un email de confirmación con los detalles de tu solicitud.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Solicita tu cotización</h2>
        <p className="text-center text-[#6d6e71] text-lg mb-12">
          Completa el formulario y nuestro equipo te contactará en menos de 24 horas
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.nombre ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Juan Pérez"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Empresa / Obra *
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.empresa ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Constructora ABC"
              />
              {errors.empresa && (
                <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>
              )}
            </div>

            {/* Región */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Región *
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.region ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecciona una región</option>
                {regiones.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </select>
              {errors.region && (
                <p className="text-red-500 text-sm mt-1">{errors.region}</p>
              )}
            </div>

            {/* Comuna */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Comuna *
              </label>
              <input
                type="text"
                name="comuna"
                value={formData.comuna}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.comuna ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Santiago"
              />
              {errors.comuna && (
                <p className="text-red-500 text-sm mt-1">{errors.comuna}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="juan@empresa.cl"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-[#6d6e71] font-semibold mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                  errors.telefono ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+56912345678"
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>
          </div>

          {/* Detalle */}
          <div className="mt-6">
            <label className="block text-[#6d6e71] font-semibold mb-2">
              Detalle del requerimiento *
            </label>
            <textarea
              name="detalle"
              value={formData.detalle}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed1c24] ${
                errors.detalle ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe los materiales que necesitas, cantidades aproximadas y cualquier especificación técnica relevante..."
            />
            {errors.detalle && (
              <p className="text-red-500 text-sm mt-1">{errors.detalle}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="mt-6">
            <label className="block text-[#6d6e71] font-semibold mb-2">
              Adjuntar archivo / plano (opcional)
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#ed1c24] cursor-pointer transition-colors">
                <Upload size={20} className="text-[#6d6e71]" />
                <span className="text-[#6d6e71]">Seleccionar archivo</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                />
              </label>
              {fileName && (
                <span className="text-sm text-[#6d6e71]">{fileName}</span>
              )}
            </div>
          </div>

          {/* Términos */}
          <div className="mt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-[#ed1c24] border-gray-300 rounded focus:ring-[#ed1c24]"
              />
              <span className="text-sm text-[#6d6e71]">
                Acepto los términos y condiciones y la política de privacidad de Ebema *
              </span>
            </label>
            {errors.terminos && (
              <p className="text-red-500 text-sm mt-1">{errors.terminos}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar cotización
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
