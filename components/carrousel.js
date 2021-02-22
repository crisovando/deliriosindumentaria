import React from 'react';
import PropTypes from 'prop-types';

const Carrousel = ({ data }) => (
  <div className="carousel relative container mx-auto" style={{ maxWidth: '1600px' }}>
    <div className="carousel-inner relative overflow-hidden w-full">
      {data.map(({ name, foto }, index, arr) => (
        <React.Fragment key={foto.id}>
          <input
            className="carousel-open"
            type="radio"
            id={`carousel-${index + 1}`}
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked={index === 0 ? 'checked' : ''}
            role="slider"
          />
          <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
            <div
              className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            >
              <img 
                alt={foto.name}
                className="object-cover w-full"
                src={foto.url}
                srcSet={`
                  ${foto.formats.small.url} 320w,
                  ${foto.formats.medium.url} 480w,
                  ${foto.formats.large.url} 800w,
                  ${foto.url} 1080w,
                `}
              />
              <div className="container mx-auto absolute">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">{name}</p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor={`carousel-${index === 0 ? arr.length : index}`}
            className={`prev control-${
              index + 1
            } w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
          >
            ‹
          </label>
          <label
            htmlFor={`carousel-${index === arr.length - 1 ? 1 : index + 2}`}
            className={`next control-${
              index + 1
            } w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
          >
            ›
          </label>
        </React.Fragment>
      ))}

      {/* Add additional indicators for each slide */}
      <ol className="carousel-indicators">
        {data.map((el, i) => (
          <li key={i} className="inline-block mr-3">
            <label
              htmlFor={`carousel-${i + 1}`}
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Carrousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      source: PropTypes.string,
    }).isRequired
  ),
};

export default Carrousel;
