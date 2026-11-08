function WhySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 text-xs font-semibold mb-5">
          WHY WE COME TOGETHER
        </p>

        <div className="grid grid-cols-2 gap-16">

          {/* Kolom kiri */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              A bridge from
              <br />
              <span className="text-blue-600">
                "I wonder"
              </span>
              <br />
              to "I made this."
            </h2>
          </div>

          {/* Kolom kanan */}
          <div className="text-gray-600 leading-relaxed">
            <p>
              Technology moves fast. The best way to keep up
              isn't to watch from the sidelines, but to build
              alongside people who are just as curious as you.
            </p>

            <p className="mt-5">
              GDGoC UGM brings students together to learn,
              experiment, collaborate, and create meaningful
              solutions through technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhySection;