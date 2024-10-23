import { useState } from 'react';
import Breadcrumb from "../../components/atoms/Breadcrumbs/Breadcrumb";
import TablaItem, {
  Column,
  RowData,
} from '../../components/molecules/TablaItem/TablaItem'
import Alert from '../UiElements/Alerts';
import RadioInputComponent from '../../components/atoms/RadioInputComponent';

const customStyle = {
  width: '100%',
  height: '15rem',
};

const Mysurveys = () => {
  // Estado para controlar la visibilidad del formulario y la tabla
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Controlar visibilidad de la alerta
  const [fadeOut, setFadeOut] = useState(false); // Controlar el efecto de desvanecimiento

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
    { Header: 'Encuesta', accessor: 'item' as keyof RowData },
    { Header: 'Fecha Publicación', accessor: 'price' as keyof RowData },
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

  const handleButtonClick = () => {
    setShowForm(true); // Mostrar el formulario y ocultar la tabla
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  return (
    <>
      <Breadcrumb pageName="Encuestas" />
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

      {/* Renderizar la tabla solo si showForm es false */}
      {!showForm && (
        <div className="container mx-auto my-8">
          <TablaItem
            data={data}
            columns={columns}
            title="Mis Encuestas"
            buttonLabel="Agregar Encuestas"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}

      {/* Renderizar el formulario solo si showForm es true */}
      {showForm && (
        <div className="formulario">
          <div className="flex flex-col gap-4 shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
            <div className="w-full flex justify-between items-center">
              <label className="text-title-md2 font-semibold text-black dark:text-white mb-8">
                Información de la encuesta
              </label>
              <button className="bg-primary text-white px-4 py-2 rounded">
                Cambiate a Premium
              </button>
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Titulo del Cupón *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
            <div className="w-full flex gap-4">
              <div className="w-[70%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Seleccionar categoria *
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <div className="w-[30%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Estado *
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-[30%] flex flex-col gap-4">
                <div className="w-full">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Rango de Edades
                  </label>
                  <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                </div>
                <div className="w-full">
                  <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Seleccione género
                  </label>

                  <div className="flex flex-col space-y-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="genero"
                        value="yes"
                        className="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      />
                      <span className="ml-2 text-gray-800">Yes</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="genero"
                        value="no"
                        className="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      />
                      <span className="ml-2 text-gray-800">No</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="genero"
                        value="maybe"
                        className="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      />
                      <span className="ml-2 text-gray-800">Maybe</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-[70%] flex flex-col gap-3">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Rango de Edades
                </label>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6563.218973904677!2d-77.06272313350281!3d-12.008138366516862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentros%20comerciales!5e0!3m2!1ses-419!2spe!4v1728922453064!5m2!1ses-419!2spe"
                  width="600"
                  height="218"
                  loading="lazy"
                  style={customStyle}
                ></iframe>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
            <div className="w-full flex gap-4">
              <div className="w-[70%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Pregunta 1 *
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <div className="w-[30%] flex flex-col items-end justify-end gap-[0.5rem]">
                <div className="flex items-center justify-between w-[70%]">
                  <label className="text-sm font-medium text-black dark:text-white">
                    Respuesta obligatoria
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 dark:bg-gray-700"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-5 rounded-full transition-transform peer-checked:translate-x-full"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between w-[70%]">
                  <label className="text-sm font-medium text-black dark:text-white">
                    Multiple Respuestas
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 dark:bg-gray-700"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-5 rounded-full transition-transform peer-checked:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <RadioInputComponent />
            </div>
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
            <button className="w-full bg-primary text-white px-4 py-2 rounded">
              Agregar Pregunta
            </button>
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
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Mysurveys;
