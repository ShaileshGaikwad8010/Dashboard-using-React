import React from 'react'

import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js/auto';
// Import Chart.js components
import { Line, Bar, Pie, Radar } from "react-chartjs-2";

function Dashboard2() {

    const randomData = () => {
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
      };
      Chart.register(LinearScale, BarController, CategoryScale, BarElement);
      const radarChartData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "Radar Chart",
            data: randomData(), // Assuming you have a function to generate random data
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
    
    
    
      const pieChartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Line Chart",
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
        <Radar className="App__c2__r2" data={radarChartData} options={options} />
        <div className="App__c2__r3">
          <Line data={pieChartData} options={options} />
        </div>
      </div>
      <div className="App__c3">
        <div className="App__c3__r1">
          <div style={{ width: "70%" }}>
            <p className="App__c3__r1__title">Dear Clients</p>
            <p className="App__c3__r1__desc">
              Join our online community. It helps in managing our Daily Routine Tasks.{" "}
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
            <Bar data={barChartData} options={options} />
          </div>
        </div>
        <div className="App__c3__r3">
          <Pie data={pieChartData} options={options} />
        </div>
      </div>
      
    </>
  )
}

export default Dashboard2
