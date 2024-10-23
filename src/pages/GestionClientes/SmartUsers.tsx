import { useState } from 'react';
import Breadcrumb from "../../components/atoms/Breadcrumbs/Breadcrumb";
import TablaItem, {
  Column,
  RowData,
} from '../../components/molecules/TablaItem/TablaItem'
import Alert from '../UiElements/Alerts';


const SmartUsers = () => {
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
    { Header: 'Usuario', accessor: 'item' as keyof RowData },
    { Header: 'Información de Contacto', accessor: 'price' as keyof RowData },
    { Header: 'Fecha Incorporación', accessor: 'price' as keyof RowData },
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
    console.log('botón clickeado');
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  return (
    <>
      <Breadcrumb pageName="Gestion de Clientes" />
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
            title="Mis Usuarios"
            buttonLabel="Agregar Encuestas"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
            showButton={false}
            showNewButton={false}
          />
        </div>
      )}
    </>
  );
};

export default SmartUsers;
