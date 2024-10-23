import { useState } from 'react';
import Breadcrumb from "../../components/atoms/Breadcrumbs/Breadcrumb";
import TablaItem, {
  RowData,
  Column,
} from '../../components/molecules/TablaItem/TablaItem'
import Alert from '../UiElements/Alerts';
import Maps from '../../components/molecules/GoogleMaps/Maps';

function ZoneManagement() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar el Alert
  const [fadeOut, setFadeOut] = useState(false); // Controlar el efecto de desvanecimiento

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
    { Header: 'Código', accessor: 'item' as keyof RowData },
    { Header: 'Nombre de la Zona', accessor: 'price' as keyof RowData },
    { Header: 'Categorias', accessor: 'price' as keyof RowData },
    { Header: 'Categorias', accessor: 'price' as keyof RowData },
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
          <button
            className="text-blue-500"
            onClick={() => onEdit(row)}
          >
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
    setShowForm(true);
    setIsEditing(true);
  };

  const onDelete = (row: RowData) => {
    console.log('Borrar', row);
    // Lógica para borrar
  };

  const handleButtonClick = () => {
    console.log('botón clickeado');
    setShowForm(true);
    setIsEditing(false);
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  const handlePolygonComplete = (path: { lat: number; lng: number }[]) => {
    console.log('Polígono completo. Coordenadas:', path);
  };

  const handleSaveClick = () => {
    // Mostrar el Alert
    setShowAlert(true);

    // Simular un guardado con un pequeño retraso antes de volver a la vista principal
    setTimeout(() => {
      setFadeOut(true); // Activar desvanecimiento
      setTimeout(() => {
        setShowForm(false); // Ocultar el formulario
        setShowAlert(false); // Ocultar el Alert
        setFadeOut(false); // Reiniciar el fadeOut
      }, 500); // Tiempo del fadeOut
    }, 1500); // Tiempo que permanece visible el Alert antes del fadeOut
  };

  const handleCancelClick = () => {
    // Ocultar el formulario y regresar a la vista principal
    setShowForm(false);
  };

  return (
    <>
      <Breadcrumb pageName="Gestion de Clientes" />
      {showAlert && (
        <Alert
          type="success"
          title="Guardado exitosamente"
          message="La categoría ha sido guardada correctamente."
          className={`${
            fadeOut
              ? 'opacity-0 transition-opacity duration-500'
              : 'opacity-100'
          }`}
        />
      )}

      {showForm && (
        <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto">
          <div className="flex flex-col">
            <div>
              <p className="text-title-sm font-semibold text-black dark:text-white">
                {isEditing ? 'Editar Zona' : 'Agregar Zona'}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="w-[35%]">
                <div className="p-6 bg-white rounded-md">
                  <h2 className="text-lg font-bold text-green-600 mb-2">
                    Instrucciones
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Cree y conecte puntos en un área específica del mapa para
                    agregar una nueva zona comercial.
                  </p>
                  <div className="w-full flex items-start mb-4 justify-between">
                    <div className="w-[10%] h-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <i className=" far fa-hand-paper"></i>
                    </div>
                    <div className="w-[80%]">
                      <p className="text-gray-600">
                        Use esta <strong>'Herramienta de Mano'</strong> para
                        encontrar su zona objetivo.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-start mb-4 justify-between">
                    <div className="w-[10%] h-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <i className="fas fa-map-marked"></i>
                    </div>
                    <div className="w-[80%]">
                      <p className="text-gray-600">
                        Use esta <strong>'Herramienta de Forma'</strong> para
                        señalar las áreas y conectar los puntos. Se requieren al
                        menos 3 puntos.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://servicios.puntossmart.com/img/image 137.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <div>
                  <div className="flex flex-col mb-5.5 gap-4">
                    <div>
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="emailAddress"
                      >
                        Seleccione Zona *
                      </label>
                      <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
                    </div>
                    <Maps
                      apiKey="AIzaSyBbPgQh_qdLyrC0S8TJXPSEf2dZ_IF3SZ8"
                      center={{ lat: 40.7128, lng: -74.006 }}
                      containerStyle={{ width: '100%', height: '455px' }}
                      zoom={12}
                      polygonOptions={{
                        fillColor: '#3c50e0',
                        fillOpacity: 0.6,
                        strokeWeight: 2,
                        editable: true,
                        draggable: true,
                      }}
                      onPolygonComplete={handlePolygonComplete}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-4.5">
            <button
              className="text-[#3c50e0] border-[#3c50e0] flex justify-center rounded border  py-2 px-6 font-medium  hover:shadow-1 dark:border-strokedark dark:text-white"
              type="submit"
              onClick={handleCancelClick} // Asignar la función para manejar el clic en Cancelar
            >
              Cancelar
            </button>
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
              type="button"
              onClick={handleSaveClick} // Asignar la función para manejar el clic en Guardar
            >
              Guardar
            </button>
          </div>
        </div>
      )}

      {!showForm && (
        <div className="container mx-auto my-8">
          <TablaItem
            data={data}
            columns={columns}
            title="Listado de Zonas"
            buttonLabel="Agregar Zona"
            onButtonClick={handleButtonClick}
            newButtonLabel="Importar"
            onNewButtonClick={handleNewButtonClick}
            onEdit={onEdit}
            onDelete={onDelete}
            showNewButton={false}
          />
        </div>
      )}
    </>
  );
}

export default ZoneManagement;