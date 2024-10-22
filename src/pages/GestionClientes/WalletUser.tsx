import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function WalletUser() {
  const handleSave = () => {
    console.log('first');
  };
  const handleCancel = () => {
    // Al cancelar, volvemos a mostrar la tabla y ocultamos el formulario
    console.log('first');
  };
  return (
    <>
      <Breadcrumb pageName="Billetera del Usuario" />
      <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
        <div className="">
          <h2 className="text-xl font-bold mb-4">Agregar fondos al Usuario</h2>
          <div className="flex justify-between">
            <div className="w-[62%]">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="emailAddress"
              >
                Seleccionar Usuario *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
            <div className="w-[35%]">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="emailAddress"
              >
                Cantidad PS *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="emailAddress"
              >
                Referencia (Opcional)
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
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
    </>
  );
}

export default WalletUser;
