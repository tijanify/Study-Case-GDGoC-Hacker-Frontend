import { useState, useEffect } from 'react';

function WaysToContribute() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://gdgoc-ugm-api.vercel.app/api/roles')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data roles');
        }

        return response.json();
      })
      .then((result) => {
        console.log('Roles:', result);
        setRoles(result.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 text-xs font-semibold mb-5">
          FIND YOUR PLACE
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-5">
          Ways to Contribute
        </h2>

        <p className="text-gray-500 mb-12 max-w-2xl">
          Everyone has something valuable to contribute.
          Find your role and start building with us.
        </p>

        {loading && <p>Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && roles.length === 0 && (
          <p>Belum ada data roles.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title || item.name || item.role}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WaysToContribute;