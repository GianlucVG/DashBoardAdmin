import React, { useState } from 'react';

// Definir un tipo para los datos de cada fila
export interface RowData {
  item: string;
  price: string;
  date: string;
  status: string;
}

// Definir un tipo para las columnas
export interface Column {
  Header: string;
  accessor?: keyof RowData; // Hacer que accessor sea opcional
  Cell?: (row: RowData) => JSX.Element; // Tipar correctamente la función Cell
}

// Ahora el componente acepta estos tipos
interface TableProps {
  data: RowData[];
  columns: Column[];
  onEdit: (row: RowData) => void;
  onDelete: (row: RowData) => void;
  title: string; // Prop para el título
  buttonLabel: string; // Prop para el nombre del primer botón
  onButtonClick: () => void; // Evento onClick personalizado para el primer botón
  newButtonLabel: string; // Prop para el nombre del nuevo botón
  onNewButtonClick: () => void; // Evento onClick personalizado para el nuevo botón
}

const TablaItem: React.FC<TableProps> = ({
  data,
  columns,
  title,
  buttonLabel,
  onButtonClick,
  newButtonLabel,
  onNewButtonClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar los datos por el término de búsqueda
  const filteredData = data.filter((row) =>
    row.item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Obtener los elementos actuales para la paginación
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    
    <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
      {/* Sección de encabezado de la tabla con buscador y botones */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1> {/* Título editable */}
        <div className="flex space-x-2 items-center">
          {/* Botón nuevo (cambio de texto y evento personalizado) */}
          <button
            className="text-[#3c50e0] border-[#3c50e0] flex justify-center rounded border  py-2 px-6 font-medium  hover:shadow-1 dark:border-strokedark dark:text-white"
            onClick={onNewButtonClick} // Evento onClick personalizado para el nuevo botón
          >
            {newButtonLabel} {/* Texto editable del nuevo botón */}
          </button>
          {/* Primer botón */}
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
            onClick={onButtonClick} // Evento onClick personalizado para el primer botón
          >
            {buttonLabel} {/* Texto editable del primer botón */}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="w-full justify-between flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/4 border border-gray-300 p-2 rounded"
          />
          <select className="p-2 rounded">
            <option value="10">10 por página</option>
            <option value="20">20 por página</option>
            <option value="50">50 por página</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="py-5 px-10 border-b text-left text-gray-600 font-bold"
                >
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} className="py-5 px-10">
                    {column.Cell
                      ? column.Cell(row)
                      : row[column.accessor as keyof RowData]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaItem;