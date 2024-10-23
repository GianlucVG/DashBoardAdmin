
import Breadcrumb from '../components/atoms/Breadcrumbs/Breadcrumb';
import TableOne from '../components/organisms/Tables/TableOne';
import TableThree from '../components/organisms/Tables/TableThree';
import TableTwo from '../components/organisms/Tables/TableTwo';


const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
