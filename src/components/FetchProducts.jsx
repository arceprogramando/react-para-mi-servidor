import { useEffect, useState } from 'react';

const FetchProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://arquitectura-del-servidor-production.up.railway.app/api/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="flex ">
      {error && <p>Ocurrió un error: {error.message}</p>}
      {data &&
        data.map((product) => {
          return (
            <div key={product.id} className="w-full text-center">
              <h3>{product.title ? product.title : 'El producto no existe'}</h3>
              <div className="w-auto flex justify-center">
                <img src={product.thumbnail} alt={product.title} className="h-40 object-contain" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FetchProducts;
