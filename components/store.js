import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import SlideDrawer from './slideDrawer';

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
      <div className="cartsy-product-search-results grid-cols-xxl-5 grid-cols-lg-4 grid-cols-md-3 grid-cols-xs-2 gap-30">
        {products.map((product) => (
          <div className="relative bg-white rounded-r overflow-hidden flex flex-col transition ease-in-out duration-75">
            <div
              className="h-400px sm:h-320px md:h-340px lg:h-380px xl:h-400px 2xl:h-440px
                        flex justify-center items-center relative"
            >
              <div>
                {/* badge 
                <span className="absolute top-15px right-15px py-5px px-10px leading-none text-white text-sm"></span> 
                */}
                <LazyLoad>
                  <img
                    src={product.fotos[0].formats.small.url}
                    className="w-full h-full object-cover rounded-none mb-0"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>
          // <div key={product.id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" onClick={() =>openCart(product)}>
          //   <div>
          //     <img className="hover:grow hover:shadow-lg cursor-pointer" src={product.fotos[0].formats.small.url} />
          //     <div className="pt-3 flex items-center justify-between">
          //       <p className="">{product.nombre}</p>
          //       <svg
          //         className="h-6 w-6 fill-current text-gray-500 hover:text-black"
          //         xmlns="http://www.w3.org/2000/svg"
          //         viewBox="0 0 24 24"
          //       >
          //         <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          //       </svg>
          //     </div>
          //     <p className="pt-1 text-gray-900">${product.precio}</p>
          //   </div>
          // </div>
        ))}
        <SlideDrawer show={openDrawer} onClose={closeDrawer} item={productSelected} />
      </div>
    </section>
  );
}
