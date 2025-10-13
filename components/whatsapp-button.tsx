"use client"

import Image from "next/image"

export function WhatsAppButton() {
  const handleClick = () => {
    // Substitua pelo número de WhatsApp da sua empresa (formato: 5511987654321)
    const phoneNumber = "5567992059340"
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre CNH e Cursos.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
        <Image src="/WhatsApp.svg" alt="WhatsApp" fill className="object-contain" />
      </div>
      <span className="absolute -top-2 -right-2 flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500"></span>
      </span>
    </button>
  )
}
