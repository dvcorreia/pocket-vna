import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2';

import hexToRgba from 'hex-rgba'

import './Chart.Smith.js'

export default class LogMag extends Component{
    state = {
        chartData: {
            datasets:[
                {
                    label: "none",
                    fill: false,
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointRadius: 0.25,
                    pointHitRadius: 2,
                    showLine: true,
                    borderColor: this.props.color,
                    pointBackgroundColor: this.props.color,
                    backgroundColor: hexToRgba(this.props.color, 100),
                    borderWidth: 2,
                    data: [],
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
                        labelString: "Frequency (Hz)"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Gain (dB)"
                    }
                }]
            }
        } 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){
            let dataUpdate = []
            const div = Math.floor(this.props.data.freq.length / 500)

            this.props.data.LogMag(this.props.param).forEach((value, i) => {
                if(i%div === 0){
                    dataUpdate.push({
                        x: this.props.data.freq[i],
                        y: value
                    })
                }
            })

            this.setState(Object.assign({}, prevState, {
                chartData: {
                    datasets: [
                        Object.assign({}, prevState.chartData.datasets[0], {
                            label: ("LogMag: " + this.props.param),
                            data: dataUpdate
                        })
                    ]
                }
            }))
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