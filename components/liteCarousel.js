import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { getProductsByCategory } from '@/lib/api';

SwiperCore.use([Navigation]);

function liteCarousel({ categories, children }) {
  const [swiper, setSwiper] = useState(null);
  const [categoryActive, setCategoryActive] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (categoryActive !== '') {
      getProductsByCategory(categoryActive)
        .then((data) => {
          setFilteredProducts(data.productos)
        }) 
    }
  }, [categoryActive])

  const prev = () => {
    swiper.slidePrev();
  };

  const next = () => {
    swiper.slideNext();
  };

  const changeCategory = e => {
    setCategoryActive(e.currentTarget.value)
    setIsFiltered(true);
  };

  return (
    <div className="category pt-8 container mx-auto pb-12">
      <Swiper
        onInit={(swipered) => setSwiper(swipered)}
        spaceBetween={10}
        breakpoints={{
          240: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
          1900: {
            slidesPerView: 10,
          },
        }}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        cssMode
      >
        {categories &&
          categories.map((el) => (
            <SwiperSlide key={el.id} className="h-full flex">
              <label
                className="w-full flex flex-col rounded-lg bg-white relative mt-1px
                           overflow-hidden cursor-pointer border-solid border border-gray-300"
              >
                <input
                  type="radio"
                  value={el.nombre}
                  name="product-category"
                  previousvalue="false"
                  className="absolute opacity-0 top-0 left-0 cursor-pointer h-full w-full"
                  onChange={changeCategory}
                />
                <span className="flex items-center justify-center w-full overflow-hidden h-40">
                  <img
                    alt={el.nombre}
                    className="max-w-full block w-full h-full object-cover"
                    src={el.thumb?.formats.small.url}
                  />
                </span>
                <span className="flex flex-col items-center justify-center text-center p-3 flex-grow">
                  <span className="block font-semibold mb-1.5 text-black">{el.nombre}</span>
                </span>
              </label>
            </SwiperSlide>
          ))}
        <div slot="container-end" className="flex items-center absolute top-half w-full z-10">
          <button
            onClick={prev}
            aria-label="prev-button"
            className="prev-slider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.5px"
              height="12px"
              viewBox="0 0 8.4 14"
            >
              <path
                id="chevron-left"
                d="M16.157,6.329l-1.4-1.4-7,7,7,7,1.4-1.4-5.6-5.6Z"
                transform="translate(-7.757 -4.93)"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="next-button"
            className="next-slider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.5px"
              height="12px"
              viewBox="0 0 8.4 14"
            >
              <path
                d="M7.757,6.329l1.4-1.4,7,7-7,7-1.4-1.4,5.6-5.6Z"
                transform="translate(-7.757 -4.929)"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
      {children({ filteredProducts, isFiltered })}
    </div>
  );
}

export default liteCarousel;
