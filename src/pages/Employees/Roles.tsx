import { useState } from 'react';
import TablaItem, {
  Column,
  RowData,
} from '../../components/molecules/TablaItem/TablaItem'
import Checkbox from '../../components/atoms/Checkboxes/Checkbox';

function Roles() {
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
    { Header: 'Roles', accessor: 'item' as keyof RowData },
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
  };

  const onDelete = (row: RowData) => {
    console.log('Borrar', row);
  };
  const handleButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };

  const [selectedAccesses, setSelectedAccesses] = useState<string[]>([]);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedAccesses([...selectedAccesses, label]);
    } else {
      setSelectedAccesses(selectedAccesses.filter((item) => item !== label));
    }
  };

  const options = [
    'Dashboard PS',
    'Dashboard Encuestas',
    'Categorias',
    'Items',
    'Cupones',
    'Encuestas',
    'Enviar PS',
    'Canjear PS',
    'Canjear Cupón',
    'Mis Movimientos',
    'Notificaciones Push',
    'Usuarios Cerca',
    'Red de Comercio',
    'Empleados',
    'Aplicativo Movil',
  ];
  return (
    <>
      <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Agrega un nuevo rol</h1>{' '}
        </div>
        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="emailAddress"
          >
            Nombre del Rol
          </label>
          <div className="flex gap-4">
            <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            <button className="flex items-center justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90">
              Guardar
            </button>
          </div>
          <div>
            <div className="p-4">
              <h2 className="font-medium mb-4">
                Selecciona los Accesos (Mínimo 1)
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {options.map((option, index) => (
                  <Checkbox
                    key={index}
                    label={option}
                    id={`option-${index}`} // Asigna un ID único dinámicamente basado en el índice
                    checked={selectedAccesses.includes(option)}
                    onChange={(checked) =>
                      handleCheckboxChange(option, checked)
                    }
                  />
                ))}
              </div>
              {selectedAccesses.length === 0 && (
                <p className="text-red-500 mt-2">
                  Debes seleccionar al menos un acceso.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <TablaItem
          data={data}
          columns={columns}
          title="Roles"
          buttonLabel="Agregar categoria"
          onButtonClick={handleButtonClick}
          newButtonLabel="Importar"
          onNewButtonClick={handleNewButtonClick}
          onEdit={onEdit}
          showNewButton={false}
          showButton={false}
          onDelete={onDelete}
        />
      </div>
    </>
  );
}

export default Roles;
