import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2';

export default class PolarGraph extends Component{
    state = {
        data: this.props.data
    }

    chartData = {
        datasets:[
            {
                label: "S11 Polar Graph",
                fill: false,
                backgroundColor: this.props.color,
                pointBorderColor: this.props.color,
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                pointHoverRadius: 1,
                pointRadius: 0.25,
                pointHitRadius: 2,
                data: this.state.data,
            }
        ]
    }

    chartOptions = {
        maintainAspectRatio: false,
        showLine: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Real"
                },
                ticks: {
                    suggestedMin: -1.5,
                    suggestedMax: 1.5
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Imaginary"
                },
                ticks: {
                    suggestedMin: -1.5,
                    suggestedMax: 1.5
                }
            }]
        }
    }
    
    render(){
        return(
            <Scatter
                data={this.chartData}
                options={this.chartOptions}
                style={{position: 'absolute'}}
            />
        )
    }
}