import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo-gdgoc.svg';

function Navbar() {
  const [navigation, setNavigation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetch('https://gdgoc-ugm-api.vercel.app/api/navigation')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data navigasi');
        }
        return response.json();
      })
      .then((result) => {
        setNavigation(result.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="GDGoC Logo"
    className="w-12 h-12 object-contain"
  />

  <div>
    <h1 className="text-lg font-bold text-gray-900">
      Google Developer Groups
    </h1>

    <p className="text-xs text-gray-500">
      On Campus • Universitas Gadjah Mada
    </p>
  </div>
</div>

        {/* NAVIGATION */}
        <div className="flex items-center gap-2">
          {loading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : (
            navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  location.pathname === item.href
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))
          )}
        </div>

        {/* BUTTON */}
        <a
          href="#tracks"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-lg transition"
        >
          Find your track →
        </a>

      </div>
    </nav>
  );
}

export default Navbar;