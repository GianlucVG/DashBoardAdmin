import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TablaItem, {
  Column,
  RowData,
} from '../../components/TablaItem/TablaItem';
import Alert from '../UiElements/Alerts'; // Importa el componente Alert

const Coupons = () => {
  // Estado para controlar la visibilidad de la tabla y el formulario
  const [showForm, setShowForm] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); 
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    // Mostrar la alerta
    setShowAlert(true);

    setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    setTimeout(() => {
      setShowAlert(false); // Ocultar la alerta
      setFadeOut(false); // Restablecer el estado de desvanecimiento
      setShowForm(false); // Mostrar la tabla y ocultar el formulario
    }, 2000);
  };

  const data: RowData[] = [
    { item: 'Free package', price: '$0', date: 'Jan 13, 2023', status: 'Paid' },
    {
      item: 'Standard Package',
      price: '$59',
      date: 'Jan 13, 2023',
      status: 'Paid',
    },
    {
      item: 'Business Package',
      price: '$99',
      date: 'Jan 13, 2023',
      status: 'Unpaid',
    },
    {
      item: 'Standard Package',
      price: '$59',
      date: 'Jan 13, 2023',
      status: 'Pending',
    },
  ];

  const columns: Column[] = [
    { Header: 'Cupon', accessor: 'item' as keyof RowData },
    { Header: 'Valor', accessor: 'price' as keyof RowData },
    { Header: 'Fecha Inicio', accessor: 'date' as keyof RowData },
    { Header: 'Fecha Fin', accessor: 'date' as keyof RowData },
    {
      Header: 'Estado',
      accessor: 'status' as keyof RowData,
      Cell: (row: RowData) => (
        <span
          className={
            row.status === 'Paid'
              ? 'text-green-500'
              : row.status === 'Unpaid'
              ? 'text-red-500'
              : 'text-yellow-500'
          }
        >
          {row.status}
        </span>
      ),
    },
    {
      Header: 'Acciones',
      Cell: (row: RowData) => (
        <div className="ml-4 flex space-x-2">
          <button className="text-blue-500" onClick={() => onEdit(row)}>
            <i className="far fa-edit"></i>
          </button>
          <button className="text-red-500" onClick={() => onDelete(row)}>
            <i className="far fa-trash-alt"></i>{' '}
          </button>
        </div>
      ),
    },
  ];

  const onEdit = (row: RowData) => {
    console.log('Editar', row);
    // Lógica para editar
  };

  const onDelete = (row: RowData) => {
    console.log('Borrar', row);
    // Lógica para borrar
  };

  // Cambiar el estado para ocultar la tabla y mostrar el formulario
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  return (
    <>
      <Breadcrumb pageName="Cupon" />

      {/* Mostrar el Alert */}
      {showAlert && (
        <Alert
          type="success" // Tipo de alerta: success, error o warning
          title="Guardado exitosamente"
          message="La categoría ha sido guardada correctamente."
          className={`${
            fadeOut
              ? 'opacity-0 transition-opacity duration-500'
              : 'opacity-100'
          }`}
        />
      )}

      {/* Ocultar la tabla si showForm es true */}
      {!showForm && (
        <div className="container mx-auto my-8">
          <TablaItem
            data={data}
            columns={columns}
            title="Mis Cupones"
            buttonLabel="Agregar  Cupon"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}

      {/* Mostrar el formulario si showForm es true */}
      {showForm && (
        <div className="grid grid-cols-5 gap-8 mt-4">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Información del cupón
                </h3>
              </div>
              <div className="p-7 pb-10">
                <form action="#">
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Titulo del Cupón *
                    </label>
                    <div className="relative">
                      <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Descripción del cupón *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Default textarea"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Terminos y Condiciones *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Default textarea"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Precio en Puntos Smart *
                    </label>
                    <div className="relative">
                      <input className="w-1/2 rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="mb-5.5 w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="emailAddress"
                      >
                        Hora Inicio
                      </label>
                      <div className="relative">
                        <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                      </div>
                    </div>
                    <div className="mb-5.5 w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="emailAddress"
                      >
                        Hora Fin
                      </label>
                      <div className="relative">
                        <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-5 xl:col-span-2 justify-between">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Subir una imagen
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div
                    id="FileUpload"
                    className="h-64 flex items-center justify-center relative mb-5.5 w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
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
            <div className="p-6 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <h2 className="text-lg font-semibold mb-4">
                Productos relacionados
              </h2>

              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.41-1.41l4.83 4.83a1 1 0 01-1.42 1.42l-4.83-4.83zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 checked:bg-[#3c50e0e6]"
                  />

                  <span className="text-gray-700">Musharof Chowdhury</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 checked:bg-[#3c50e0e6]"
                  />

                  <span className="text-gray-700">Naimur Rahman</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 checked:bg-[#3c50e0e6]"
                  />

                  <span className="text-gray-700">Juhan Ahamed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 checked:bg-[#3c50e0e6]"
                  />

                  <span className="text-gray-700">Mahbub Hasan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 checked:bg-[#3c50e0e6]"
                  />
                  <span className="text-gray-700">Shafiq Hammad</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-end gap-4.5">
              <button
                className="text-[#3c50e0] border-[#3c50e0] flex justify-center rounded border  py-2 px-6 font-medium  hover:shadow-1 dark:border-strokedark dark:text-white"
                type="submit"
              >
                Cancelar
              </button>
              <button
                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                type="button"
                onClick={handleSave} // Llamar a handleSave aquí también
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coupons;
