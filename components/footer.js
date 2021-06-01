import Container from './container';
import { EXAMPLE_PATH } from '@/lib/constants';

export default function Footer({ contactData }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2" id="contact">
      <Container>
        <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:pt-0">
          <div className="w-full xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Encontranos!
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Mandanos tu consulta por whatsapp o algunas de las redes sociales
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div id="1">
                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        {`${contactData.Calle} ${contactData.Localidad}, ${contactData.Partido}`}
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        {`(+54) ${contactData.Telefono}`}
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        {contactData.Email}
                      </div>
                    </div>
                  </div>
                  <div id="2">
                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400"></div>

                    <div className="flex flex-row space-x-4">
                      <a target="_blank" href="https://wa.me/541130089134">
                        <svg
                          viewBox="0 0 32 32"
                          fill="white"
                          className="w-12 p-1 bg-green-500 rounded-full shadow-icon hover:shadow-iconHover whatsapp-color"
                        >
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <a target="_blank" href="https://www.instagram.com/deliriosindumentaria_/">
                        <svg width="50" height="50" viewBox="0 0 200 200" className="rounded-full shadow-icon hover:shadow-iconHover">
                          <defs>
                            <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
                              <stop offset="0" stopColor="#c92bb7" />
                              <stop offset="1" stopColor="#3051f1" />
                            </linearGradient>
                            <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
                              <stop offset="0" stopColor="#fcdf8f" />
                              <stop offset=".1" stopColor="#fbd377" />
                              <stop offset=".25" stopColor="#fa8e37" />
                              <stop offset=".35" stopColor="#f73344" />
                              <stop offset=".65" stopColor="#f73344" stopOpacity="0" />
                            </radialGradient>
                            <rect
                              id="logoContainer"
                              x="0"
                              y="0"
                              width="200"
                              height="200"
                              rx="50"
                              ry="50"
                            />
                          </defs>

                          <use xlinkHref="#logoContainer" fill="url(#gradient1)" />
                          <use xlinkHref="#logoContainer" fill="url(#gradient2)" />

                          <rect
                            x="35"
                            y="35"
                            width="130"
                            height="130"
                            rx="30"
                            ry="30"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="13"
                          />

                          <circle
                            cx="100"
                            cy="100"
                            r="32"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="13"
                          />

                          <circle cx="140" cy="62" r="9" fill="#fff" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
