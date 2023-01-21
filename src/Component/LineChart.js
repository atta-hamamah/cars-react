import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

function LineChart() {
    const Data = {
        labels: [
            '7 am',
            '9 am',
            '11 am',
            '1 pm',
            '3 pm',
            '5 pm',
            '7 pm',
            '9 pm'
        ],
        datasets: [
            {
                data: [30 , 120 , 157 , 80 , 110 , 40 , 60 ,90],
                tension: .5,
                borderWidth:1,
                pointBorderWidth:0,
                borderColor: "#FF764C",
                fill:{
                    target: true,
                    above: "rgba(255, 118, 76, 0.40)",
                } ,
            },
            
        ],
        

    }

  return (
    <Line  data={Data}/>
  )
}

export default LineChart 