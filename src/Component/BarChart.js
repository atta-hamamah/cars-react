import React from 'react'
import { Bar } from "react-chartjs-2"

function BarChart() {
    const Data = {
        labels: [
            '5 PM',
            '2 PM',
            '3 PM',
            '4 PM',
            '5 PM',
            '6 PM',
            '7 PM'
        ],
        datasets: [
            {
                data: [110, 90, 157, 80, 130, 60, 100],
                backgroundColor: [
                    "#F4F5F9",
                    "#F4F5F9",
                    "#F4F5F9",
                    "#F4F5F9",
                    "#F4F5F9",
                    "#F4F5F9",
                    "#F4F5F9"
                ],
                barThickness: 20,
                hoverBackgroundColor: "#2884FF",
            },
        ],

    }

    return (
        <Bar className=' w-full h-full items-stretch' data={Data} />
    )
}

export default BarChart