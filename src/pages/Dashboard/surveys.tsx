import ChartFour from '../../components/Charts/ChartFour';
import ChatFive from '../../components/Charts/ChatFive';
import TableProps from '../../components/TableProps/TableProps';

const Surveys: React.FC = () => {
  
  const data = [
    { url: 'Google', views: '100%' },
    { url: 'Github', views: '75%' },
    { url: 'Producthunt', views: '50%' },
    { url: 'Facebook', views: '25%' },
    { url: 'Twitter', views: '10%' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <ChartFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChatFive />
        <div className="col-span-5 flex flex-col gap-2">
          <TableProps data={data} />
          <TableProps data={data} />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <TableProps data={data} className="xl:col-span-7" />
        <TableProps data={data} />
      </div>
    </>
  );
};

export default Surveys;
