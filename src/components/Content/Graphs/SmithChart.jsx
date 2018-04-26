import React, { Component, Fragment } from 'react'
import Chart from 'chart.js'
require('./Chart.Smith.js')

export default class SmithChart extends Component{
    componentDidMount(){
        var ctx = document.getElementById("smith-chart").getContext('2d');
        var chartInstance = new Chart(ctx, 
        {
            type: 'smith',
            data: {
                datasets: [{
                    data: [{
                        real: 0.1,
                        imag: 0
                    }, {
                        real: 1,
                        imag: 0
                    }, {
                        real: 0,
                        imag: -1
                    }, {
                        real: 20,
                        imag: 0
                    }],
                    label: 'Dataset 1',
                    borderColor: '#36A2EB',
                    pointBackgroundColor: '#36A2EB',
                    backgroundColor: 'rgba(54,162,235, 0.4)'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Smith Chart Extension'
                },
                legend: {
                    display: false
                }
            }
        }
        );
    }
    
    render(){
        return(
            <Fragment>
                <canvas id="smith-chart" className="extra-large-chart"></canvas>
            </Fragment>
        )
    }
} 

