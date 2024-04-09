import FetchProducts from './FetchProducts';
import FrontPage from './FrontPage';

const Main = () => {
  const frontpage1 = { thumbnail: 'Portada1.webp', title: 'Portada Vinos' };
  const frontpage2 = { thumbnail: 'Portada2.webp', title: 'Portada Vinos' };

  return (
    <>
      <FrontPage front={frontpage1} />
      <main className="max-w-2xl mx-auto">
        <h2 className="text-orange-400 text-2xl p-4 uppercase ">Vinos</h2>
        <FetchProducts />
      </main>
      <FrontPage front={frontpage2} />
    </>
  );
};

export default Main;
