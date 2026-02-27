'use client'

export function WhatsappButton() {
  const phoneNumber = '201234567890'
  const message = 'مرحباً، أرغب في الاستفسار عن خدماتكم لحفل زفافي'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="تواصل معنا عبر واتس آب"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16c0 2.863.631 5.583 1.758 8.029L.316 31.684l8.029-2.442C10.417 31.369 13.137 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.45 23.492c-.378 1.084-1.568 1.894-2.756 2.037-1.031.118-2.376.211-5.859-1.27-4.356-1.945-7.164-6.119-7.383-6.405-.211-.286-1.756-2.336-1.756-4.454 0-2.098 1.107-3.129 1.5-3.548.393-.419.854-.524 1.138-.524.284 0 .568.003.815.017.262.016.616-.099.965.737.374.897 1.272 3.102 1.382 3.326.11.224.183.484.037.776-.148.292-.222.474-.443.73-.221.256-.466.569-.665.768-.197.198-.402.411-.173.804.229.394 1.022 1.685 2.191 2.73 1.506 1.344 2.781 1.761 3.175 1.96.394.198.622.166.848-.102.227-.268 1.02-1.189 1.291-1.597.271-.408.54-.34.905-.204.366.137 2.323 1.093 2.717 1.29.394.198.656.296.748.459.093.166.093.962-.285 2.047z"
        />
      </svg>
    </a>
  )
}
