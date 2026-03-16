export default function WhatsAppButton() {
  // WhatsApp number in international format: +54 11 1564293448
  const phone = "541156429344"
  const message = encodeURIComponent(
    "Hola Germann, quería consultar sobre el servicio de lubricentro."
  )
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.49.648 4.83 1.778 6.864L2 30l7.338-1.742A13.94 13.94 0 0016.002 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.002 2zm0 25.44a11.41 11.41 0 01-5.822-1.594l-.418-.25-4.346 1.032 1.056-4.228-.274-.435a11.38 11.38 0 01-1.756-6.164C4.442 9.69 9.69 4.44 16.002 4.44c3.066 0 5.948 1.194 8.116 3.364a11.416 11.416 0 013.358 8.198c-.002 6.314-5.248 11.438-11.474 11.438zm6.288-8.57c-.344-.172-2.038-1.006-2.352-1.12-.316-.116-.546-.172-.774.172-.228.344-.884 1.12-1.086 1.35-.2.228-.4.258-.744.086-.344-.172-1.452-.536-2.766-1.708-1.022-.914-1.712-2.04-1.912-2.384-.2-.344-.022-.53.15-.702.154-.154.344-.4.516-.6.172-.2.228-.344.344-.572.114-.228.058-.43-.028-.602-.086-.172-.774-1.866-1.06-2.556-.278-.67-.56-.58-.774-.59l-.658-.01a1.26 1.26 0 00-.914.43c-.314.344-1.2 1.174-1.2 2.862s1.228 3.318 1.4 3.546c.172.228 2.416 3.686 5.854 5.17.818.354 1.456.566 1.954.724.82.26 1.568.224 2.158.136.658-.1 2.038-.832 2.326-1.636.286-.804.286-1.492.2-1.636-.086-.144-.314-.228-.658-.4z" />
      </svg>
    </a>
  )
}
