function Footer() {
  return (
    <footer className="bg-gray-300 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-start">

          <div className="flex items-center gap-3">
  <img
    src="/src/assets/logo-gdgoc.svg"
    alt="GDGoC Logo"
    className="w-16 h-16 object-contain"
  />

  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Google Developer Groups
    </h2>

    <span className="text-sm text-blue-500">
      On Campus 
    </span>
    <span className="text-sm text-gray-900">
       {' '} • Universitas Gadjah Mada
    </span>
  </div>
</div>


          <div className="flex gap-6 text-sm text-gray-900">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>

        <div className="mt-5">
    <p className="text-large text-sm text-gray-900">
        A student community for curious minds, shared learning, and technology with purpose.
    </p>
</div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-gray-500 text-xs">
            © 2026 Google Developer Groups On Campus UGM.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;