function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 gap-12 items-center">

        {/* Bagian teks */}
        <div>
          <p className="text-xs text-blue-600 mb-5">
            ● ABOUT GDGoC UGM
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Built by students.
            <br />
            <span className="text-blue-600">
              For what's next.
            </span>
          </h1>

          <p className="text-gray-500 mt-5 leading-relaxed">
            We're a community of learners and makers at
            Universitas Gadjah Mada, connected by curiosity
            and the belief that technology can do good.
          </p>

          <p className="text-xs text-gray-400 mt-5">
            UNIVERSITAS GADJAH MADA • 2026/2027
          </p>
        </div>

        {/* Bagian ilustrasi */}
        <div className="bg-blue-100 rounded-3xl h-64 flex items-center justify-center">
          <img
            src="/src/assets/logo-gdgoc.svg"
            alt="GDGoC Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;