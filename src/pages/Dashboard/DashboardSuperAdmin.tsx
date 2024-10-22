import { useState } from 'react';
import CardDashboard from '../../components/Card/CardDashboard';
import TablaItem, {
  Column,
  RowData,
} from '../../components/TablaItem/TablaItem';
import ChartComponent from '../../components/Charts/ChartTwo';

const DashboardSuperAdmin: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [, setShowForm] = useState(false);

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
    { Header: 'Tienda', accessor: 'item' as keyof RowData },
    { Header: 'Items', accessor: 'price' as keyof RowData },
    { Header: 'Cupones Emitidios', accessor: 'date' as keyof RowData },
    { Header: 'Encuestas Emitidas', accessor: 'date' as keyof RowData },
    {
      Header: 'Acciones',
      Cell: (row: RowData) => (
        <div className="ml-4 flex space-x-2">
          <button className="text-green-500" onClick={() => onView(row)}>
            <i className="far fa-eye"></i>
          </button>
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
  const onView = (row: RowData) => {
    console.log('Ver', row);
    setShowDetails(true); // Mostrar el div con los detalles
  };
  const onDelete = (row: RowData) => {
    console.log('Borrar', row);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };
  const dataSecond: RowData[] = [
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
  const columnsSecond: Column[] = [
    { Header: 'Sucursal', accessor: 'item' as keyof RowData },
    { Header: 'Puntos Emitidios', accessor: 'price' as keyof RowData },
    { Header: 'Puntos Canjeados', accessor: 'date' as keyof RowData },
    { Header: 'Vistas', accessor: 'date' as keyof RowData }
  ];
  return (
    <>
      {/* Mostrar el contenido solo cuando showDetails es falso */}
      {!showDetails && (
        <div className="">
          <div className="flex justify-between">
            <ChartComponent
              title="Puntos de la semana"
              series={[
                {
                  name: 'Cupones Emitidos',
                  data: [44, 55, 41, 67, 22, 43, 65],
                },
                { name: 'Puntos Emitidos', data: [13, 23, 20, 8, 13, 27, 15] },
                {
                  name: 'Tiendas Registradas',
                  data: [13, 23, 20, 8, 13, 27, 15],
                },
                {
                  name: 'Encuestas Emitidas',
                  data: [13, 23, 20, 8, 13, 27, 15],
                },
              ]}
              categories={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
              chartType="bar"
              colors={['#3C50E0', '#80CAEE', '#ff0000', '#00bd2f']}
            />

            <div className="w-max flex flex-col justify-between">
              <CardDashboard
                title="Cupones Emitidos"
                total="40"
                showRate={false}
                isSquare={true}
              />
              <CardDashboard
                title="Cupones Emitidos"
                total="40"
                showRate={false}
                isSquare={true}
              />
              <CardDashboard
                title="Cupones Emitidos"
                total="40"
                showRate={false}
                isSquare={true}
              />
              <CardDashboard
                title="Cupones Emitidos"
                total="40"
                showRate={false}
                isSquare={true}
              />
            </div>
          </div>
          <div className="container mx-auto my-8">
            <TablaItem
              data={data}
              columns={columns}
              title="Tiendas Totales"
              buttonLabel="Agregar Empleado"
              onButtonClick={handleButtonClick}
              newButtonLabel="Importar"
              onNewButtonClick={handleNewButtonClick}
              onEdit={onEdit}
              onDelete={onDelete}
              showNewButton={false}
              showButton={false}
            />
          </div>
        </div>
      )}

      {/* Mostrar este div cuando showDetails sea verdadero */}
      {showDetails && (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <div className="py-8 pr-20 pl-8 flex items-start flex-col bg-white p-4 border border-stroke w-[33%] h-auto justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"></div>
                <div className="title">
                  <p className="text-title-xsm font-bold text-black dark:text-white">
                    Billetera Smart
                  </p>
                </div>
              </div>
              <div className="Puntos">
                <p className="text-title-md font-bold text-black dark:text-white">
                  40,5k PS
                </p>
              </div>
            </div>
            <div className="py-8 pr-20 pl-8 flex items-start flex-col bg-white p-4 border border-stroke w-[33%] h-auto justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"></div>
                <div className="title">
                  <p className="text-title-xsm font-bold text-black dark:text-white">
                    Billetera Smart
                  </p>
                </div>
              </div>
              <div className="Puntos">
                <p className="text-title-md font-bold text-black dark:text-white">
                  40,5k PS
                </p>
              </div>
            </div>
            <div className="py-8 pr-20 pl-8 flex items-start flex-col bg-white p-4 border border-stroke w-[33%] h-auto justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"></div>
                <div className="title">
                  <p className="text-title-xsm font-bold text-black dark:text-white">
                    Billetera Smart
                  </p>
                </div>
              </div>
              <div className="Puntos">
                <p className="text-title-md font-bold text-black dark:text-white">
                  40,5k PS
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white p-8 space-x-8">
            <div className="text-center">
              <div>
                <div className="gap-4 flex justify-center items-center text-sm text-green-500">
                  <h4 className="text-2xl font-bold text-black">$4,350</h4>
                  <div className="flex mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span>18%</span>
                  </div>
                </div>
              </div>
              <p className="flex text-gray-500">Puntos Emitidos</p>
            </div>
            <div className="text-center">
              <div>
                <div className="gap-4 flex justify-center items-center text-sm text-green-500">
                  <h4 className="text-2xl font-bold text-black">$4,350</h4>
                  <div className="flex mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span>18%</span>
                  </div>
                </div>
              </div>
              <p className="flex text-gray-500">Puntos Emitidos</p>
            </div>
            <div className="text-center">
              <div>
                <div className="gap-4 flex justify-center items-center text-sm text-green-500">
                  <h4 className="text-2xl font-bold text-black">$4,350</h4>
                  <div className="flex mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span>18%</span>
                  </div>
                </div>
              </div>
              <p className="flex text-gray-500">Puntos Emitidos</p>
            </div>
            <div className="text-center">
              <div>
                <div className="gap-4 flex justify-center items-center text-sm text-green-500">
                  <h4 className="text-2xl font-bold text-black">$4,350</h4>
                  <div className="flex mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span>18%</span>
                  </div>
                </div>
              </div>
              <p className="flex text-gray-500">Puntos Emitidos</p>
            </div>
          </div>
          <div className="conteiner flex justify-between">
            <div className="w-fit bg-white p-6">
              <h4 className="text-lg font-semibold mb-4">
                Información de la tienda
              </h4>

              <div className="flex items-start">
                <div className="w-24 h-24 bg-gray-300 rounded-md mr-4"></div>

                <div>
                  <h5 className="text-lg font-bold mb-2">
                    Nombre de la tienda
                  </h5>

                  <p className="text-sm">
                    <span className="font-semibold">Administrador:</span>
                    <a href="#" className="text-blue-500 hover:underline">
                      Nombres e Apellidos
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Correo Electrónico:</span>
                    <a
                      href="mailto:admin@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      admin@gmail.com
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Teléfono:</span>
                    <a
                      href="tel:+51987456321"
                      className="text-blue-500 hover:underline"
                    >
                      +51 987456321
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">
                      Ubicación / o Cantidad de sedes:
                    </span>
                    Ubicación aquí
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Suscripción:</span>
                    <a href="#" className="text-blue-500 hover:underline">
                      Tipo de Suscripción
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <ChartComponent
              widthClass="w-[58.5%]"
              title="Puntos de la semana"
              series={[
                {
                  name: 'Cupones Emitidos',
                  data: [44, 55, 41, 67, 22, 43, 65],
                },
                { name: 'Puntos Emitidos', data: [13, 23, 20, 8, 13, 27, 15] },
              ]}
              categories={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
              chartType="bar"
              colors={['#3C50E0', '#80CAEE']}
              height={200}
            />
          </div>
          <div className="container mx-auto">
            <TablaItem
              data={dataSecond}
              columns={columnsSecond}
              title="Tiendas Totales"
              buttonLabel="Agregar Empleado"
              onButtonClick={handleButtonClick}
              newButtonLabel="Importar"
              onNewButtonClick={handleNewButtonClick}
              onEdit={onEdit}
              onDelete={onDelete}
              showNewButton={false}
              showButton={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSuperAdmin;
