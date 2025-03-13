export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center mr-12">
            <div className="w-8 h-8 mr-2">
              <svg viewBox="0 0 100 100" className="fill-white">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-xl font-medium">Linear</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Sign up
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Linear is a purpose-built tool for planning and building products
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl">
            Meet the system for modern software development. Streamline issues,
            projects, and product roadmaps.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Start building
            </a>

            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white group transition-colors"
            >
              <span className="mr-2">Introducing Sub-teams</span>
              {/* <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /> */}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
