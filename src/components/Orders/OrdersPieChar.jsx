import React from 'react';
import ReactEchart from 'echarts-for-react';
import * as echarts from 'echarts';

const OrdersPieChart = () => {
  const option = {
    series: [
      {
        name: 'Item',
        type: 'pie',
        radius: ['60%', '80%'],
        label: {
          show: false,
        },
        itemStyle: {
          borderRadius: 50,
          borderColor: 'black',
          borderWidth: 5,
        },
        emphasis: {
          label: {
            show: true,
            fontStyle: 'italic',
            fontweight: 'bolder',
            fontSize: 16,
          },
        },
        data: [
          { value: 2190, name: 'Social Platforms' },
          { value: 735, name: 'Email marketing' },
          { value: 1000, name: 'Sale Campaigns' },
          { value: 400, name: 'Personalized text' },
        ],
      },
    ],
  };
  return (
    <ReactEchart option={option} style={{ height: 140, margin: '1rem' }} />
  );
};

export default OrdersPieChart;
