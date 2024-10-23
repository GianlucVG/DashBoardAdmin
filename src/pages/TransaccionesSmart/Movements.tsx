import { useState } from 'react';
import TablaItem, {
  Column,
  RowData,
} from '../../components/molecules/TablaItem/TablaItem'

const Movements = () => {
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
    { Header: 'Movimiento', accessor: 'item' as keyof RowData },
    { Header: 'Fecha Emitido (filtro)', accessor: 'price' as keyof RowData },
    { Header: 'Tipo (filtro)', accessor: 'date' as keyof RowData },
  ];

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleNewButtonClick = () => {
    console.log('Nuevo botón clickeado');
  };
  return (
    <>
      <div className="container mx-auto my-8">
        <TablaItem
          data={data}
          columns={columns}
          title="Mis Banners Premium"
          buttonLabel="Agregar Banner"
          onButtonClick={handleButtonClick}
          newButtonLabel="Importar"
          onNewButtonClick={handleNewButtonClick}
          showButton={false}
          showNewButton={false} 
        />
      </div>
    </>
  );
};

export default Movements;
