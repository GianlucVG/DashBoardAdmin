import Breadcrumb from '../components/atoms/Breadcrumbs/Breadcrumb';

const customStyle = {
  width: '100%',
  height: '300px',
};
const customStyleTable = {
  width: '-webkit-fill-available',
};

const Profile = () => {
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Mi tienda" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Información de la tienda
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Numero de ruc
                    </label>
                    <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Nombre de la tienda
                    </label>
                    <div className="relative">
                      <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Ubicacion
                    </label>
                    <input className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_88_10224">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6563.218973904677!2d-77.06272313350281!3d-12.008138366516862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentros%20comerciales!5e0!3m2!1ses-419!2spe!4v1728922453064!5m2!1ses-419!2spe"
                        width="600"
                        height="218"
                        loading="lazy"
                        style={customStyle}
                      ></iframe>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Actualizar foto de Perfil
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Actualizar foto de Portada
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Configración de horarios
                </h3>
              </div>
              <div className="bg-white rounded-lg overflow-hidden">
                <table
                  className="m-8  divide-y divide-gray-200"
                  style={customStyleTable}
                >
                  <thead className="">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Día
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Periodo(s)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Lunes</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="08:30"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="14:00"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-red-500 text-white rounded px-2 py-1">
                          X
                        </button>
                        <input
                          type="text"
                          value="15:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="17:30h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-blue-500 text-white rounded px-2 py-1">
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Martes</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="08:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="14:00"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-red-500 text-white rounded px-2 py-1">
                          X
                        </button>
                        <input
                          type="text"
                          value="15:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="17:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-blue-500 text-white rounded px-2 py-1">
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Miércoles</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="08:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="14:00"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-red-500 text-white rounded px-2 py-1">
                          X
                        </button>
                        <input
                          type="text"
                          value="15:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="17:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-blue-500 text-white rounded px-2 py-1">
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Jueves</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="08:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="14:00"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-blue-500 text-white rounded px-2 py-1">
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Viernes</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="08:00h"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="14:00"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <button className="bg-blue-500 text-white rounded px-2 py-1">
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Sábado</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="--"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="--"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Domingo</td>
                      <td className="flex gap-4 px-4 py-2">
                        <input
                          type="text"
                          value="--"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                        <input
                          type="text"
                          value="--"
                          className="border border-gray-300 rounded px-2 py-1 w-24"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end gap-4.5 mt-3">
              <button
                className="text-[#3c50e0] border-[#3c50e0] flex justify-center rounded border  py-2 px-6 font-medium  hover:shadow-1 dark:border-strokedark dark:text-white"
                type="submit"
              >
                Cancelar
              </button>
              <button
                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                type="button"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
