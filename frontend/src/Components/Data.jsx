import React from 'react';
import {Chart, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import Label from "./Label";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 20,
      spacing: 5
    }]
  },

  options: {
    cutout: 100
  }
};

export default function Data() {
  return (
    <div>
        <div className="flex justify-content max-w-xs mx-auto">
            <div className="item">
                <div className="chart relative">
                    <Doughnut {...config}></Doughnut>
                    <h3 className='mt-4 font-bold title'>Total
                      <span className='block text-3xl text-green-600'>{0}</span>
                    </h3>
                </div>

                <div className="flex flex-col py-10 gap-6">
                  <Label></Label>
                </div>
            </div>
        </div>
    </div>
  )
}
