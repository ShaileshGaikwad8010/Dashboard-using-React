import React from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js/auto';
import { Bubble, Bar, Pie, Radar, Scatter, Line } from 'react-chartjs-2';

function Dashboard4() {
    const randomData = () => {
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    };
    Chart.register(LinearScale, BarController, CategoryScale, BarElement);

    
const bubbleChartData = {
  datasets: [
    {
      label: 'Bubble chart',
      data: [
        { x: 1, y: randomData()[0] * 10, r: 10 }, // Adjusted y value to spread out bubbles along the y-axis
        { x: 2, y: randomData()[1] * 10, r: 20 },
        { x: 3, y: randomData()[2] * 10, r: 15 },
        { x: 4, y: randomData()[3] * 10, r: 25 },
        { x: 5, y: randomData()[4] * 10, r: 18 },
        { x: 6, y: randomData()[5] * 10, r: 30 },
        { x: 7, y: randomData()[6] * 10, r: 22 },
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(128, 0, 128, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(128, 0, 128, 1)',
      ],
    },
  ],
};

      

    const areaChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Area chart',
                data: randomData(),
                fill: true,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };



    const lineChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Linear Chart',
                data: randomData(),
                fill: true,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };



    const barChartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Bar Chart",
            data: randomData(),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

    const options = {
        scales: {
            x: {
                type: 'category',
            },
        },
    };

    return (
        <>
            <div className="App__c2">
                <Bubble className="App__c2__r2" data={bubbleChartData} options={options} />
                <div className="App__c2__r3">
                    <Line data={lineChartData} options={options} />
                </div>
            </div>
            <div className="App__c3">
                <div className="App__c3__r1">
                    <div style={{ width: '70%' }}>
                        <p className="App__c3__r1__title">Dear Clients</p>
                        <p className="App__c3__r1__desc">
                            Join our online community. It helps in managing our Daily Routine Tasks.{' '}
                        </p>
                    </div>
                </div>
                <div className="App__c3__r2">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '90%',
                        }}
                    >
                        <Bar data={barChartData} options={options} />
                    </div>
                </div>
                <div className="App__c3__r3">
                    <Pie data={areaChartData} options={options} />
                </div>
            </div>
        </>
    );
}

export default Dashboard4;
