import { useEffect, useState } from 'react';
import Swiper from 'swiper';

function liteCarousel({ categories }) {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    setSwiper(
      new Swiper('.swiper-categories', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
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
          1400: {
            slidesPerView: 8,
          },
          1900: {
            slidesPerView: 10,
          },
        },
      })
    );
  }, []);

  const prev = () => {
    swiper.slidePrev();
  };

  const next = () => {
    swiper.slideNext();
  };

  return (
    <div className="category pt-8 container mx-auto pb-12">
      <div className="swiper-categories swiper-container swiper-container-initialized swiper-container-horizontal">
        <div
          className="swiper-wrapper"
        >

          <div
            className="swiper-slide swiper-slide-active"
          >
            <div
              className="p-4 flex flex-col border rounded-md text-center  border-gray-300"
              role="button"
            >
              <div
                style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  boxSizing: 'border-box',
                  margin: 0,
                }}
              >
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img
                    style={{ maxWidth: '100%', display: 'block' }}
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src='data:image/svg+xml;charset=utf-8,<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                  />
                </div>
                <img
                  alt="Household"
                  data-src="https://s3.amazonaws.com/redqteam.com/medsy/category/house-hold%20%281%29.png"
                  decoding="async"
                  className=""
                  style={{
                    visibility: 'visible',
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  src="https://s3.amazonaws.com/redqteam.com/medsy/category/house-hold%20%281%29.png"
                />
              </div>
              <p className="font-semibold text-gray-900 truncate">Household</p>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-active"
          >
            <div
              className="p-4 flex flex-col border rounded-md text-center  border-gray-300"
              role="button"
            >
              <div
                style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  boxSizing: 'border-box',
                  margin: 0,
                }}
              >
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img
                    style={{ maxWidth: '100%', display: 'block' }}
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src='data:image/svg+xml;charset=utf-8,<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                  />
                </div>
                <img
                  alt="Household"
                  data-src="https://s3.amazonaws.com/redqteam.com/medsy/category/house-hold%20%281%29.png"
                  decoding="async"
                  className=""
                  style={{
                    visibility: 'visible',
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  src="https://s3.amazonaws.com/redqteam.com/medsy/category/house-hold%20%281%29.png"
                />
              </div>
              <p className="font-semibold text-gray-900 truncate">Household</p>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute top-half w-full z-10">
          <button
            onClick={prev}
            aria-label="prev-button"
            className="w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none left-0 ml-35px swiper-previous-button swiper-button-disabled"
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
            className="w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none right-0 mr-35px swiper-next-button"
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
      </div>
    </div>
  );
}

export default liteCarousel;
