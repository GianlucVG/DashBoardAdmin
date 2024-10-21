import CardDashboard from '../../components/Card/CardDashboard';
import ChartTwo from '../../components/Charts/ChartTwo';
import TableOne from '../../components/Tables/TableOne';

const DashboardSuperAdmin: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"></div>

      <div className="">
        <div>
          <ChartTwo />
          <div className="w-max">
            <CardDashboard
              title="Cupones Emitidos"
              total="40"
              showRate={false}
            />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-12">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default DashboardSuperAdmin;
