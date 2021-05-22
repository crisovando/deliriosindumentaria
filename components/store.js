import { getProductsByCategory } from '@/lib/api';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import dynamic from 'next/dynamic'

const DynamicDrawer = dynamic(() => import('./slideDrawer'))

export default function Store({ products }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [productSelected, setProductSelected] = useState(null);

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const openCart = (product) => {
    setProductSelected(product);
    setOpenDrawer(true);
  };

  return (
    <section className="bg-white py-8">
      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-r overflow-hidden flex flex-col transition ease-in-out duration-75
              hover:shadow-lg transform hover:-translate-y-2" onClick={() =>openCart(product)}>
            <div className="product-thumb">
              <LazyLoad>
                <img
                  src={product.fotos[0].formats.small.url}
                  alt={product.descripcion}
                />
              </LazyLoad>
            </div>
            <div className="product-description">
              <div className="text-base font-semibold my-0.5 text-black">{product.nombre}</div>
              <div className="text-sm h-5 overflow-hidden whitespace-no-wrap" style={{ textOverflow: 'ellipsis' }}>{product.descripcion}</div>
              <div className="flex align-middle font-semibold text-lg mt-3 text-black">${product.precio}</div>
            </div>
          </div>
        ))}
        {openDrawer && <DynamicDrawer show={openDrawer} onClose={closeDrawer} item={productSelected} />}
      </div>
    </section>
  );
}
