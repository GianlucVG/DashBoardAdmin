import { useState } from 'react';
import Breadcrumb from "../../components/atoms/Breadcrumbs/Breadcrumb";
import TablaItem, {
  Column,
  RowData,
} from '../../components/molecules/TablaItem/TablaItem'
import Alert from '../UiElements/Alerts';

const Flash = () => {
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
    { Header: 'Producto', accessor: 'item' as keyof RowData },
    { Header: 'Descuento', accessor: 'price' as keyof RowData },
    { Header: 'Fecha Inicio', accessor: 'price' as keyof RowData },
    { Header: 'Fecha Fin', accessor: 'price' as keyof RowData },
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
      <Breadcrumb pageName="Oferta Flash" />
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
      {!showForm && (
        <div className="container mx-auto my-8">
          <TablaItem
            data={data}
            columns={columns}
            title="Oferta Flash"
            buttonLabel="Agregar  Oferta"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}
      {showForm && (
        <div className="formulario">
          <div className="flex flex-col gap-4 shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
            <div className="w-full flex justify-between items-center">
              <label className="text-title-md2 font-semibold text-black dark:text-white mb-8">
                Información de la oferta flash
              </label>
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Selecciona Item *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
            <div className="w-full flex gap-4">
              <div className="w-[50%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Descuento
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <div className="w-[50%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Vista precio del item
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-[50%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Hora Inicio
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <div className="w-[50%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Hora Fin
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
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
        </div>
      )}
    </>
  );
};

export default Flash;
