function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-blue-100 text-xs font-semibold mb-5">
          READY TO START?
        </p>

        <h2 className="text-4xl font-bold text-white mb-6">
          Your next chapter starts here.
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join a community of curious minds, creative builders,
          and people who believe technology can make a difference.
        </p>

        <a
          href="#"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Join Our Community →
        </a>

      </div>
    </section>
  );
}

export default CTASection;