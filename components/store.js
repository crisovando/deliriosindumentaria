import { getProductsByCategory } from '@/lib/api';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Spinner from './spinner';
import { getUrl } from '../utils/cloudinary'


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
              <LazyLoad placeholder={<Spinner />} debounce={false}>
                <Image
                  src={getUrl(product.fotos[0].formats.small.url)}
                  alt={product.descripcion}
                  layout="fill"
                  className="thumb"
                  loading="eager"
                />
                {product.fotos.length > 1 && (
                  <Image
                    src={getUrl(product.fotos[1].formats.small.url)}
                    alt={product.descripcion}
                    layout="fill"
                    objectFit="contain"
                    className="thumb-2"
                    loading="eager"
                  />
                )}
              </LazyLoad>
            </div>
            <div className="product-description">
              <div className="text-base font-semibold my-0.5 text-black">{product.nombre}</div>
              <div className="text-sm h-5 overflow-hidden whitespace-nowrap" style={{ textOverflow: 'ellipsis' }}>{product.descripcion}</div>
              <div className="flex align-middle font-semibold text-lg mt-3 text-black">${product.precio}</div>
            </div>
          </div>
        ))}
        {openDrawer && <DynamicDrawer show={openDrawer} onClose={closeDrawer} item={productSelected} />}
      </div>
    </section>
  );
}
