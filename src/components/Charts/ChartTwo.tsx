import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartProps {
  title: string;
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
  chartType?: 'bar' | 'line';
  colors?: string[];
  height?: number;
  widthClass?: string; // Nueva propiedad para personalizar la clase del ancho
}

const ChartComponent: React.FC<ChartProps> = ({
  title,
  series,
  categories,
  chartType = 'bar',
  colors = ['#3C50E0', '#80CAEE', '#FF4560', '#00E396'],
  height = 350,
  widthClass = 'w-4/5', // Por defecto w-4/5
}) => {
  const options: ApexOptions = {
    colors,
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: chartType,
      height,
      stacked: false, // Desapilamos las barras
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%', // Ajusta el ancho de las columnas
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories, // Categorías dinámicas basadas en los datos que pases
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className={`border-stroke dark:border-strokedark dark:bg-boxdark ${widthClass} p-4 bg-white`}>
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            {title}
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="filter"
              id="filter"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="monthly" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="weekly" className="dark:bg-boxdark">
                Weekly
              </option>
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chart" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={series}
            type={chartType}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
