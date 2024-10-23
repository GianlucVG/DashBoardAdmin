import Maps from '../../components/molecules/GoogleMaps/Maps';
function CompanyInformation() {
  const handlePolygonComplete = (path: { lat: number; lng: number }[]) => {
    console.log('Polígono completo. Coordenadas:', path);
  };
  return (
    <>
      <div className="formulario">
        <div className="flex flex-col gap-4 shadow-xl p-8 bg-white rounded-lg container mx-auto my-8">
          {/* Información de la Empresa */}
          <div className="w-full flex justify-between items-center">
            <label className="text-title-md2 font-semibold text-black dark:text-white mb-8">
              Información de la Empresa
            </label>
          </div>
          <div className="w-full">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Nombre de la Empresa *
            </label>
            <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
          </div>

          {/* Correo Electrónico y Teléfono */}
          <div className="w-full flex gap-4">
            <div className="w-[50%]">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Correo Electrónico *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
            <div className="w-[50%]">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Teléfono *
              </label>
              <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
            </div>
          </div>

          {/* Dirección */}

          {/* Latitud, Longitud y Mapa */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-[50%]">
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Dirección *
                </label>
                <textarea rows={6} className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"></textarea>
              </div>
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Latitud
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Longitud
                </label>
                <input className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" />
              </div>
            </div>
            <div className="w-[50%]">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Mapa
              </label>
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
          {/* Redes Sociales */}
          <div className="w-full mt-8">
            <label className="text-title-md2 font-semibold text-black dark:text-white mb-8">
              Redes Sociales
            </label>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="Facebook"
                />
              </div>
              <div className="flex items-center gap-4">
                <img src="/icons/tiktok.svg" alt="TikTok" className="w-8 h-8" />
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="TikTok"
                />
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="Instagram"
                />
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  className="w-8 h-8"
                />
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="YouTube"
                />
              </div>
              <div className="flex items-center gap-4">
                <img src="/icons/twitter.svg" alt="X" className="w-8 h-8" />
                <input
                  className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="Twitter"
                />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4.5 mt-8">
            <button
              className="text-[#3c50e0] border-[#3c50e0] flex justify-center rounded border py-2 px-6 font-medium hover:shadow-1 dark:border-strokedark dark:text-white"
              type="submit"
            >
              Restablecer
            </button>
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
              type="button"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInformation;
