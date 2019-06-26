import React, { Component } from 'react'
import Chart from 'chart.js'
import './Chart.Smith.js'
import hexToRgba from 'hex-rgba'

var chartObj

export default class SmithChart extends Component{
    state = {
        chartData:{
            datasets: [{
                label: 'none',
                borderColor: this.props.color,
                pointBackgroundColor: this.props.color,
                backgroundColor: hexToRgba(this.props.color, 100),
                borderWidth: 2,
                fill: false,
                radius: 0,
                hitRadius: 3,
                data: [],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Smith Chart'
            },
            legend: {
                display: true
            }
        },
    }

    updateChartData(chart, data) {
        chart.data.datasets[0].data = data
        chart.update()
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.data !== this.props.data){
            let datap = []
            let smithData = this.props.data.ZIN()

            console.log(smithData)
            
            for(var i = 0 ; i < smithData.length ; i++ ){
                datap.push({
                    real: smithData[i].re,
                    imag: smithData[i].im
                })
            }

            console.log(datap)
            
            this.setState(
                Object.assign({}, prevState, {
                    chartData: {
                        label: ("Data: " + this.props.param),
                        datasets:[
                            Object.assign({}, prevState.chartData.datasets[0],{ data: datap })
                        ]
                    }
                })
            )
            
            this.updateChartData(chartObj, datap)
        }
    }

    componentDidMount(){
        const ctx = document.getElementById("smith-chart").getContext('2d');
        chartObj = new Chart(ctx, {
            type: 'smith',
            data: this.state.chartData,
            options: this.state.options
        });
    }
    
    render(){
        return(
            <div style={{
                width: '100%',
                height: 550
            }}>
                <canvas id="smith-chart" className="extra-large-chart"></canvas>
            </div>
        )
    }
} 

