import { useState, useEffect } from 'react';

function OurValues() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://gdgoc-ugm-api.vercel.app/api/values')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data values');
        }

        return response.json();
      })
      .then((result) => {
        console.log(result);
        setValues(result.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 text-xs font-semibold mb-5">
          WHAT WE BELIEVE IN
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Our Values
        </h2>

        {loading && <p>Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && values.length === 0 && (
          <p>Belum ada data values.</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <div
                className="text-3xl mb-5"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurValues;