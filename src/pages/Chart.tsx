import React from 'react';
import Breadcrumb from '../components/atoms/Breadcrumbs/Breadcrumb';
import ChartOne from '../components/molecules/Charts/ChartOne';
import ChartThree from '../components/molecules/Charts/ChartThree';
import ChartTwo from '../components/molecules/Charts/ChartTwo';

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo title={''} series={[]} categories={[]} />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
