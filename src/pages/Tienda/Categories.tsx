import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TablaItem, {
  Column,
  RowData,
} from '../../components/TablaItem/TablaItem';
import Alert from '../UiElements/Alerts';

const Categories = () => {
  const [showAlert, setShowAlert] = useState(false); // Controlar visibilidad de la alerta
  const [fadeOut, setFadeOut] = useState(false); // Controlar el efecto de desvanecimiento
  const [showForm, setShowForm] = useState(false); // Controlar visibilidad de la tabla y formulario

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
    { Header: 'Categorias', accessor: 'item' as keyof RowData },
    { Header: 'Creado', accessor: 'price' as keyof RowData },
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
    // Al hacer clic en el botón, ocultamos la tabla y mostramos el formulario
    setShowForm(true);
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  const handleCancel = () => {
    // Al cancelar, volvemos a mostrar la tabla y ocultamos el formulario
    setShowForm(false);
  };

  return (
    <>
      <Breadcrumb pageName="Categorias" />
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
      {/* Ocultar la tabla si el formulario está visible */}
      {!showForm && (
        <div className="container mx-auto my-8">
          <TablaItem
            data={data}
            columns={columns}
            title="Mis Categorías"
            buttonLabel="Agregar categoria"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}

      {/* Mostrar el formulario solo si el estado showForm es true */}
      {showForm && (
        <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
          <div className="">
            <h2 className="text-xl font-bold mb-4">
              Agrega una nueva Categoria
            </h2>
            <div className="flex justify-between">
              <div className="w-[62%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Nombre de la Categoria
                </label>
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  
                />
              </div>
              <div className="w-[35%]">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Estado
                </label>
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="border border-gray-400 px-4 py-2 rounded"
                onClick={handleCancel} // Ocultar el formulario al cancelar
              >
                Cancelar
              </button>
              <button
                className="bg-cyan-500 text-white px-4 py-2 rounded"
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

export default Categories;
