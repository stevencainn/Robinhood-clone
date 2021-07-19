import { PermDataSettingSharp } from '@material-ui/icons'
import React from 'react'
import {Line} from "react-chartjs-2"


const options = {
    legend: {
      display: false,
    }
}

function Linegraph() {
    const data={
        x:10,
        y:30
    }

    return (
        <div className="linegraph">
            <Line
          data={{
          
            datasets: [
              {
                type: 'line',
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#5AC53B',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                data: data,
              },
            ],
          }}
          options={options}
        />
        </div>
    )
            
}

export default Linegraph
