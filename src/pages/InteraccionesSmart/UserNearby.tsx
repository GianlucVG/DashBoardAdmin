import Breadcrumb from "../../components/atoms/Breadcrumbs/Breadcrumb";
import Maps from '../../components/molecules/GoogleMaps/Maps';

function UserNearby() {
  const handlePolygonComplete = (path: { lat: number; lng: number }[]) => {
    console.log('Polígono completo. Coordenadas:', path);
  };
  return (
    <>
    <Breadcrumb pageName="Interacciones Smart" />
    <div className="col-span-5 xl:col-span-3">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
          Usuarios Smart Cerca
          </h3>
        </div>
        <div className="maps p-20">
          <Maps
            apiKey="AIzaSyBbPgQh_qdLyrC0S8TJXPSEf2dZ_IF3SZ8"
            center={{ lat: 40.7128, lng: -74.006 }}
            containerStyle={{ width: '100%', height: '500px' }}
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
      </div></div>
    </>
  );
}

export default UserNearby;
