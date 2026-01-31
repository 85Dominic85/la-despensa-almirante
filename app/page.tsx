'use client';

import { useState } from 'react';
import { Anchor, Ship, Award, Mail, Phone, MapPin, ChevronRight, Waves, Sun, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Formulario enviado. En producción, aquí se enviaría el email.');
  };

  return (
    <main className="min-h-screen bg-white text-[#2A343E]">
      {/* Navigation con LOGO */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* LOGO DE LA EMPRESA */}
            <img 
              src="/logo.png" 
              alt="La Despensa del Almirante" 
              className="h-14 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const text = document.createElement('span');
                  text.className = 'font-playfair text-xl font-bold text-[#2A343E]';
                  text.textContent = 'La Despensa del Almirante';
                  parent.appendChild(text);
                }
              }}
            />
          </div>
          <div className="hidden md:flex space-x-8 font-inter text-sm">
            <a href="#productos" className="hover:text-[#96724D] transition-colors">
              Productos
            </a>
            <a href="#equipo" className="hover:text-[#96724D] transition-colors">
              Nuestro Equipo
            </a>
            <a href="#origen" className="hover:text-[#96724D] transition-colors">
              Nuestro Origen
            </a>
            <a href="#contacto" className="hover:text-[#96724D] transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - BANNER VERTICAL */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-20 right-10 opacity-5">
          <Waves size={200} strokeWidth={0.5} className="text-[#2A343E]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#96724D]/10 px-4 py-2 rounded-full mb-6">
              <Anchor size={18} className="text-[#96724D]" />
              <span className="text-sm font-inter text-[#96724D]">Desde la Bahía de Cádiz</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl leading-tight mb-6 text-[#2A343E]">
              Donde la Tradición y la Calidad
              <span className="block text-[#96724D] mt-2">Navegan Juntas</span>
            </h1>
            
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Productos gourmet artesanales de Cádiz, seleccionados para tiendas que valoran 
              la excelencia y la autenticidad mediterránea.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center bg-[#2A343E] text-white px-8 py-4 rounded-full font-inter hover:bg-[#96724D] transition-all shadow-lg"
              >
                Solicitar Catálogo
                <ChevronRight size={20} className="ml-2" />
              </a>
              
              <a
                href="#productos"
                className="inline-flex items-center border-2 border-[#2A343E] text-[#2A343E] px-8 py-4 rounded-full font-inter hover:bg-[#2A343E] hover:text-white transition-all"
              >
                Ver Productos
              </a>
            </div>
          </div>

          {/* BANNER VERTICAL - Imagen Hero - PNG */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[3/4]">
              <img 
                src="/aceite.png" 
                alt="Aceite de Oliva Premium La Despensa del Almirante"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#96724D]/20 to-[#2A343E]/20 flex items-center justify-center"><p class="text-gray-400 text-center px-8">Aceite de Oliva Premium<br/><span class="text-sm">(Coloca aceite.png en /public/)</span></p></div>';
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <Award className="text-[#96724D]" size={28} />
                <div>
                  <p className="font-playfair text-sm text-[#2A343E]">Premiado en</p>
                  <p className="font-inter font-bold text-[#96724D]">Córdoba 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#96724D]/10 px-4 py-2 rounded-full mb-4">
              <Ship size={18} className="text-[#96724D]" />
              <span className="text-sm font-inter text-[#96724D]">Selección Premium</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2A343E] mb-4">
              Nuestros Productos Estrella
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Cada producto cuenta la historia de Cádiz, desde nuestras salinas hasta nuestros olivares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Producto 1: Aceite - BANNER VERTICAL - PNG */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                <img 
                  src="/aceite.png" 
                  alt="Aceite de Oliva Virgen Extra Picual"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#96724D]/20 to-[#2A343E]/10 flex items-center justify-center"><p class="text-gray-400 text-center px-4 text-sm">Aceite de Oliva<br/>Virgen Extra<br/><span class="text-xs">(aceite.png)</span></p></div>';
                    }
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#96724D] text-white px-3 py-1 rounded-full text-xs font-inter font-bold">
                  PREMIADO
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-2xl text-[#2A343E] mb-3">
                  Aceite de Oliva Virgen Extra Picual
                </h3>
                <p className="font-inter text-gray-600 mb-4 text-sm leading-relaxed">
                  Producción ecológica de variedad Picual. Premiado en el 3er Concurso Ibérico de Córdoba. 
                  Notas frutadas con un toque amargo equilibrado.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Sun size={16} className="text-[#96724D]" />
                    <span className="text-xs font-inter text-gray-500">Ecológico</span>
                  </div>
                  <button className="text-[#96724D] font-inter text-sm font-semibold flex items-center hover:underline">
                    Más info
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 2: Caballas - BANNER VERTICAL - PNG */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                <img 
                  src="/caballas.png" 
                  alt="Caballas al Pedro Ximénez"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-100 to-[#2A343E]/10 flex items-center justify-center"><p class="text-gray-400 text-center px-4 text-sm">Caballas al<br/>Pedro Ximénez<br/><span class="text-xs">(caballas.png)</span></p></div>';
                    }
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#2A343E] text-white px-3 py-1 rounded-full text-xs font-inter font-bold">
                  EXCLUSIVO
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-2xl text-[#2A343E] mb-3">
                  Caballas al Pedro Ximénez
                </h3>
                <p className="font-inter text-gray-600 mb-4 text-sm leading-relaxed">
                  Fusión única entre el mar gaditano y el vino dulce de Jerez. 
                  Tradición artesanal andaluza en cada bocado.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Waves size={16} className="text-[#96724D]" />
                    <span className="text-xs font-inter text-gray-500">Artesanal</span>
                  </div>
                  <button className="text-[#96724D] font-inter text-sm font-semibold flex items-center hover:underline">
                    Más info
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 3: Sal - BANNER VERTICAL - PNG */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                <img 
                  src="/sal.png" 
                  alt="Escamas de Sal Marina de la Bahía de Cádiz"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-50 to-[#96724D]/10 flex items-center justify-center"><p class="text-gray-400 text-center px-4 text-sm">Escamas de<br/>Sal Marina<br/><span class="text-xs">(sal.png)</span></p></div>';
                    }
                  }}
                />
                <div className="absolute top-4 right-4 bg-white text-[#2A343E] border border-gray-200 px-3 py-1 rounded-full text-xs font-inter font-bold">
                  EDICIÓN ESPECIAL
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-2xl text-[#2A343E] mb-3">
                  Escamas de Sal Marina
                </h3>
                <p className="font-inter text-gray-600 mb-4 text-sm leading-relaxed">
                  De las salinas de la Bahía de Cádiz. Recolección manual y secado natural al sol. 
                  El toque final perfecto para cualquier plato gourmet.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Sun size={16} className="text-[#96724D]" />
                    <span className="text-xs font-inter text-gray-500">100% Natural</span>
                  </div>
                  <button className="text-[#96724D] font-inter text-sm font-semibold flex items-center hover:underline">
                    Más info
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - BANNERS VERTICALES - JPEG */}
      <section id="equipo" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#96724D]/10 px-4 py-2 rounded-full mb-4">
              <Users size={18} className="text-[#96724D]" />
              <span className="text-sm font-inter text-[#96724D]">Equipo Fundador</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2A343E] mb-4">
              La Pasión Detrás de Cada Producto
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo combina tradición familiar, experiencia internacional y un profundo amor por la gastronomía andaluza
            </p>
          </div>

          {/* BANNERS VERTICALES para fotos del equipo - JPEG */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Imagen 1 - VERTICAL - JPEG */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[3/4]">
                <img 
                  src="/equipo-presentacion.jpeg" 
                  alt="Equipo La Despensa del Almirante - Presentación Oficial"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2A343E]/10 to-[#96724D]/5"><p class="text-gray-400 text-center px-4">Foto Presentación Oficial<br/><span class="text-sm">(equipo-presentacion.jpeg)</span></p></div>';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A343E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Imagen 2 - VERTICAL - JPEG */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[3/4]">
                <img 
                  src="/equipo-cata.jpeg" 
                  alt="Equipo La Despensa del Almirante - Cata de Productos"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#96724D]/10 to-[#2A343E]/5"><p class="text-gray-400 text-center px-4">Foto Cata Gourmet<br/><span class="text-sm">(equipo-cata.jpeg)</span></p></div>';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A343E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Texto descriptivo del equipo */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <p className="font-inter text-lg text-gray-700 leading-relaxed text-center mb-6">
                <span className="font-playfair text-2xl text-[#96724D] block mb-4">
                  "Nuestra misión es llevar la esencia de Cádiz al mundo"
                </span>
                Somos un equipo de apasionados por la gastronomía andaluza, comprometidos con la excelencia 
                y la preservación de las tradiciones culinarias de nuestra tierra. Cada producto que seleccionamos 
                refleja nuestro respeto por los métodos artesanales y nuestro compromiso con la calidad superior.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="font-playfair text-3xl text-[#96724D] mb-2">15+</div>
                  <p className="font-inter text-sm text-gray-600">Años de Experiencia</p>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl text-[#96724D] mb-2">100%</div>
                  <p className="font-inter text-sm text-gray-600">Productos Artesanales</p>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl text-[#96724D] mb-2">12</div>
                  <p className="font-inter text-sm text-gray-600">Países Distribuidores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origen" className="py-24 px-6 bg-[#2A343E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Anchor size={600} className="absolute -bottom-40 -right-40 text-[#96724D]" strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#96724D]/20 px-4 py-2 rounded-full mb-6">
              <MapPin size={18} className="text-[#96724D]" />
              <span className="text-sm font-inter text-[#96724D]">Cádiz, España</span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl mb-6">
              Del Corazón de Andalucía
              <span className="block text-[#96724D] mt-2">Al Mundo</span>
            </h2>
            
            <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
              La Despensa del Almirante nace del profundo respeto por la tierra y el mar gaditanos. 
              Cada producto es una carta de amor a nuestra tierra, seleccionado meticulosamente 
              para llevar la esencia de Cádiz a tiendas gourmet de todo el mundo.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#96724D]/20 p-3 rounded-full flex-shrink-0">
                  <Ship size={24} className="text-[#96724D]" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1">Tradición Marinera</h4>
                  <p className="font-inter text-sm text-gray-400">
                    Más de 3000 años de historia pesquera en nuestras costas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#96724D]/20 p-3 rounded-full flex-shrink-0">
                  <Award size={24} className="text-[#96724D]" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1">Calidad Certificada</h4>
                  <p className="font-inter text-sm text-gray-400">
                    Productos premiados y reconocidos internacionalmente
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#96724D]/20 p-3 rounded-full flex-shrink-0">
                  <Sun size={24} className="text-[#96724D]" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1">Sostenibilidad</h4>
                  <p className="font-inter text-sm text-gray-400">
                    Compromiso con producción ecológica y métodos tradicionales
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BANNER VERTICAL para imagen de Cádiz */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-700 aspect-[3/4]">
              <img 
                src="/cadiz.jpg" 
                alt="Bahía de Cádiz - Origen de nuestros productos"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><p class="text-gray-500 text-center px-4">Imagen Bahía de Cádiz<br/><span class="text-sm">(cadiz.jpg o cadiz.png)</span></p></div>';
                  }
                }}
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-[#96724D] p-8 rounded-2xl shadow-2xl max-w-xs">
              <p className="font-playfair text-3xl text-white mb-2">3000+</p>
              <p className="font-inter text-sm text-white/90">
                Años de tradición mediterránea en cada producto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2A343E] mb-4">
              Llevemos Cádiz a Tu Tienda
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Contáctanos para recibir nuestro catálogo completo y condiciones para distribuidores
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-inter text-sm font-semibold text-[#2A343E] mb-2">
                  Nombre y Apellidos *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#96724D] focus:ring-2 focus:ring-[#96724D]/20 transition-all outline-none"
                  placeholder="Juan García"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-semibold text-[#2A343E] mb-2">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#96724D] focus:ring-2 focus:ring-[#96724D]/20 transition-all outline-none"
                  placeholder="juan@mitienda.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-inter text-sm font-semibold text-[#2A343E] mb-2">
                Nombre de la Tienda / Empresa *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#96724D] focus:ring-2 focus:ring-[#96724D]/20 transition-all outline-none"
                placeholder="Delicatessen Gourmet SL"
              />
            </div>

            <div className="mb-6">
              <label className="block font-inter text-sm font-semibold text-[#2A343E] mb-2">
                Mensaje
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#96724D] focus:ring-2 focus:ring-[#96724D]/20 transition-all outline-none resize-none"
                placeholder="Cuéntanos sobre tu tienda y qué productos te interesan..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2A343E] text-white py-4 rounded-full font-inter font-semibold hover:bg-[#96724D] transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Solicitar Información</span>
            </button>

            <p className="text-center font-inter text-xs text-gray-500 mt-6">
              * Campos obligatorios. Respondemos en menos de 24 horas.
            </p>
          </form>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-[#96724D]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#96724D]" size={24} />
              </div>
              <h4 className="font-playfair text-lg text-[#2A343E] mb-2">Teléfono</h4>
              <a href="tel:+34665029116" className="font-inter text-sm text-gray-600 hover:text-[#96724D] transition-colors">
                +34 665 029 116
              </a>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-[#96724D]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#96724D]" size={24} />
              </div>
              <h4 className="font-playfair text-lg text-[#2A343E] mb-2">Email</h4>
              <a href="mailto:info@ladespensadelmirante.com" className="font-inter text-sm text-gray-600 hover:text-[#96724D] transition-colors">
                info@despensadelmirante.com
              </a>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-[#96724D]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#96724D]" size={24} />
              </div>
              <h4 className="font-playfair text-lg text-[#2A343E] mb-2">Ubicación</h4>
              <p className="font-inter text-sm text-gray-600">
                Bahía de Cádiz, España
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A343E] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo en el footer también */}
          <img 
            src="/logo.png" 
            alt="La Despensa del Almirante" 
            className="h-16 mx-auto mb-6"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const text = document.createElement('p');
                text.className = 'font-playfair text-xl font-bold mb-4';
                text.textContent = 'La Despensa del Almirante';
                parent.appendChild(text);
              }
            }}
          />
          
          <p className="font-inter text-sm text-gray-400 mb-6">
            Productos gourmet artesanales de Cádiz para tiendas especializadas
          </p>

          <div className="border-t border-gray-700 pt-6">
            <p className="font-inter text-xs text-gray-500">
              © {new Date().getFullYear()} La Despensa del Almirante. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
