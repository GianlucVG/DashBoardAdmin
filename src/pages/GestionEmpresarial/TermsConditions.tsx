import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function TermsConditions() {
  return (
    <>
      <Breadcrumb pageName="Gestión Empresarial" />
      <div className="flex flex-col gap-4 shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
        <div className="w-full flex justify-between items-center">
          <label className="text-title-md2 font-semibold text-black dark:text-white mb-8">
            Políticas de Privacidad
          </label>
        </div>
        <div className="w-full">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Ingrese Politicas de Privacidad *
          </label>
          <textarea
            rows={20}
            className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>
        <div className="flex justify-end gap-4.5 mt-8">
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
            type="button"
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
