import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,Title,Tooltip,ArcElement,Legend} from 'chart.js'
import {Line,Doughnut} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    ArcElement,
    Legend
) 


 export const LineChart = () => {
    const labels=["omar","abdullah","abc","abc2","abc3"];

    const options={
        responsive:true,
        plugins:{
            legend:{
                position:'bottom'
            },
            title:{
                display:true,
                text:'Yearly Views'

            }
            
        }
    }

    const data={
        labels,
        datasets:[
            {
                label:"Views",
                data:[1,2,3,4,5],
                borderColor:"rgba(107,70,193,0.5)",
                backgroundColor:"#6b46c1"


            }
        ]
    }


  return <Line options={options} data={data} />
}

