import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import UserTwo from '../../images/cupon/cupon.jpg';

function RedeemCoupon() {
  return (
    <>
      <Breadcrumb pageName="Transacciones Smart" />
      <div className="shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
        <div className="">
          <h2 className="text-xl font-bold mb-4">Canjear Cupón Smart</h2>
          <div className="flex justify-between items-end gap-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Ingrese código del usuario *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
            <div className="">
              <button className="bg-cyan-500 text-white px-5 py-3 rounded">
                Buscar
              </button>
            </div>
          </div>
          <div className="flex w-full gap-8">
            <div className="flex items-center w-1/2 flex-col gap-4 mt-4">
              <div>
              <img src={UserTwo} alt="User" />
              </div>
            </div>
            <div className="flex w-1/2  mt-4 gap-4 flex-col">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Nombre del Usuario (solo vista)
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded">
                Canjear Cupón
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RedeemCoupon;
