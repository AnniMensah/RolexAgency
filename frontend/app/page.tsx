'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-500 flex flex-col items-center justify-center p-8 text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
          Rollex Multimedia Agency
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          The Fashion Gateway. Digitize your talent onboarding - register, submit portfolio, track status. Professional platform for aspiring models.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/register"
            className="bg-white text-primary-900 px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Register as Talent
          </a>
          <a
            href="/login"
            className="border-2 border-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Admin Login
          </a>
        </div>
        <p className="mt-12 text-lg opacity-75">
          Secure • Responsive • Modern
        </p>
      </div>
    </main>
  )
}

