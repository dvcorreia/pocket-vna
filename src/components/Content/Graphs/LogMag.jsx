import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2';

export default class LogMag extends Component{
    state = {
        chartData: {
            datasets:[
                {
                    label: "S11 LogMag Graph",
                    fill: false,
                    backgroundColor: this.props.color,
                    pointBorderColor: this.props.color,
                    pointBackgroundColor: '#ffffff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointRadius: 0.25,
                    pointHitRadius: 2,
                    data: this.props.data,
                }
            ]
        },
        chartOptions: {
            maintainAspectRatio: false,
            showLine: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Real"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Imaginary"
                    }
                }]
            }
        } 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.chartData.datasets[0].data !== this.props.data){
            this.setState(
                Object.assign({}, prevState, {
                    chartData: {
                        datasets:[
                            Object.assign({}, prevState.chartData.datasets[0],{
                                data: this.props.data
                            })
                        ]
                    }
                })
            )
        }
    }
    
    render(){
        return(
                <Scatter
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    style={{position: 'absolute'}}
                />
        )
    }
}