import React from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js/auto';
import { Line, Doughnut, Radar, Scatter } from 'react-chartjs-2';

function Dashboard3() {
  const randomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  };

  Chart.register(LinearScale, BarController, CategoryScale, BarElement);

  const radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "Radar Chart",
        data: randomData(),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const donutChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
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

 
  const scatterChartData = {
    datasets: [
      {
        label: 'Scatter Chart',
        data: [
          { x: 1, y: randomData()[0] },
          { x: 2, y: randomData()[1] },
          { x: 3, y: randomData()[2] },
          { x: 4, y: randomData()[3] },
          { x: 5, y: randomData()[4] },
          { x: 6, y: randomData()[5] },
          { x: 7, y: randomData()[6] },
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
      },
    ],
  };

  const LineChartData = {
    datasets: [
      {
        label: 'Linear Chart',
        data: [
          { x: 1, y: randomData()[0] },
          { x: 2, y: randomData()[1] },
          { x: 3, y: randomData()[2] },
          { x: 4, y: randomData()[3] },
          { x: 5, y: randomData()[4] },
          { x: 6, y: randomData()[5] },
          { x: 7, y: randomData()[6] },
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
      },
    ],
  };


  const options = {
    scales: {
      x: {
        type: 'linear',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <>
      <div className="App__c2">
        <Radar className="App__c2__r2" data={radarChartData} options={options} />
        <div className="App__c2__r3">
          <Line data={LineChartData} options={options} />
        </div>
      </div>
      <div className="App__c3">
        <div className="App__c3__r1">
          <div style={{ width: "70%" }}>
            <p className="App__c3__r1__title">Dear Clients</p>
            <p className="App__c3__r1__desc">
              Join our online community. It helps in managing our Daily Routine Tasks.
            </p>
          </div>
        </div>
        <div className="App__c3__r2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Scatter data={scatterChartData} options={options} />
          </div>
        </div>
        <div className="App__c3__r3">
          <Doughnut data={donutChartData} options={options} />
        </div>
      </div>
    </>
  );
}

export default Dashboard3;
