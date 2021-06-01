import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import Image from 'next/image';
import Tag from '@/components/tag';
import { getUrl } from '../utils/cloudinary'

// install Swiper modules
SwiperCore.use([Navigation]);

let modalContainer;

export default function SlideDrawer({ show, onClose, item }) {
  if (typeof window !== 'undefined') {
    modalContainer = document.querySelector('#modalContainer');
  }

  const sendWhatsapp = (nombre) => {
    const baseUrl = 'https://wa.me/541130089134/';
    const url = `${baseUrl}?text=${encodeURI(`Me interesa ${nombre}. Esta disponible?`)}`;
    window.open(url, '_blank');
  };

  return modalContainer
    ? ReactDOM.createPortal(
        <>
          {show && (
            <div
              onClick={onClose}
              className="fixed w-full h-full bg-black bg-opacity-50 z-100 top-0 right-0"
            />
          )}
          <div
            className={`transform h-full bg-white fixed top-0 right-0 w-full max-w-md z-200 shadow ease-in-out transition-all duration-300 ${
              show ? 'translate-x-0' : 'translate-x-full'
            } flex flex-col `}
          >
            <div className="flex flex-col w-full h-full">
              <div className="w-full flex justify-center relative px-30px py-20px">
                <button
                  className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900 inset-1/2"
                  aria-label="close"
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19px"
                    height="12px"
                    viewBox="0 0 18.738 12"
                  >
                    <path
                      data-name="Path 17147"
                      d="M1252.468,501.849l5.7-5.922,1.5,1.567-3.395,3.143.091.214h14.849v2.108H1256.2l3.654,3.43-1.558,1.538Z"
                      transform="translate(-1252.468 -495.927)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <h2 className="font-bold text-24px m-0">Detalle</h2>
              </div>
              <div className="os-host os-host-foreign details-scrollbar flex-grow os-theme-thin os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                <div className="os-resize-observer-host observed">
                  <div className="os-resize-observer left-0 right-auto"></div>
                </div>
                <div
                  className="os-size-auto-observer observed"
                  style={{ height: 'calc(100% + 1px)', float: 'left' }}
                >
                  <div className="os-resize-observer"></div>
                </div>
                <div className="os-content-glue m-0"></div>
                <div className="os-padding">
                  <div className="os-viewport" style={{ overflowY: 'scroll' }}>
                    <div className="os-content p-0 h-full w-full">
                      <div className="flex flex-col p-30px pt-0">
                        <div className="flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px">
                          <Swiper navigation={item?.fotos.length > 1} className="h-full w-full" cssMode>
                            {item?.fotos.map(foto => (
                              <SwiperSlide key={foto.formats.small.url}>
                                <Image
                                  src={getUrl(foto.formats.small.url)}
                                  alt={item.descripcion}
                                  layout="fill"
                                  objectFit="contain"
                                  className="thumb"
                                  loading="eager"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                        <div className="flex flex-col items-start mb-4">
                          <span className="text-gray-900 font-semibold mb-2">${item?.precio}</span>
                          <span className="mb-3">{item?.nombre}</span>
                          <p className="flex items-center">
                            <Tag text={item?.categoria.nombre} />
                            <span className="flex bg-gray-500 w-3px h-3px rounded mx-3"></span>
                            <Tag text={item?.genero} />
                          </p>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-start full pr-30px even:pr-0">
                            <span className="text-gray-500 text-11px mb-2">Descripcion</span>
                            <span className="font-normal text-13px text-gray-900 capitalize">
                              {item?.descripcion}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-30px">
                <button
                  id="submit"
                  className="bg-green-500 whatsapp-color hover:bg-green-700 transition duration-250 ease-in-out text-white py-2 px-4 rounded font-bold uppercase focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={() => sendWhatsapp(item?.nombre)}
                >
                  <i className="fab fa-whatsapp"></i> Enviar WhatsApp
                </button>
              </div>
            </div>
          </div>
        </>,
        modalContainer
      )
    : null;
}
