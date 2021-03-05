import React,{Component} from 'react';
import DoughnutChart from '../../Component/Chart/DoughnutChart';
import LineChart from '../../Component/Chart/LineChart';

export default class Overview extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount=()=>{
        this.getLineChartData();
        this.getDoughnutChart();
    }

    state={
        line:{
        },
        doughnut:{}
    }

    getDoughnutChart=()=>{
        let doughnut = { //Top 5 products sold.
            data:{
                labels: ['Rambandhu Papad Aata', 'Ambari 500 gram', 'Gemini oil 500 gram',
                        'Gemini Oil 1kg', 'Suruchi 500 gram'],
                datasets: [
                    {
                    label: 'Top 5 Sold Products of This Week.',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',
                        '#00A6B4',
                        '#6800B4'
                    ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                    ],
                    data: [65, 59, 80, 81, 56]
                    }
                ]
            },

            options:{

                title:{
                    display:true,
                    text:'Top 5 Sold Products of This Week.',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
                  
            }      
        }

        this.setState({doughnut:doughnut});
    }

    getLineChartData=()=>{
        let line = {
            //shows data of last 7 days...

            options : {
                title:{
                  display:true,
                  text:'Orders Summary of last 7 days.',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                },
                
            },

            data:{
    
                labels: ['March 01', 'March 02', 'March 03','March 04', 'March 05' , 'March 06' , 'March 07'], // test Dates 
                
                datasets: [
                    {
                        label: 'Accepted Orders',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: ['#4d83ff'],
                        borderWidth: 2,
                        fill: false,
                        pointBackgroundColor: "#fff",
                        data: [65, 59, 80, 81, 56, 56, 34]
                    },

                    {
                        label: 'Rejected Orders',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: ['#ff4747'],
                        borderWidth: 2,
                        fill: false,
                        pointBackgroundColor: "#fff",
                        data: [5, 9, 2, 3, 2, 1, 7]
                    },

                    {
                        label: 'Delivered Orders',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: ['#ffc100'],
                        borderWidth: 2,
                        fill: false,
                        pointBackgroundColor: "#fff",
                        data: [45, 60, 60, 41, 36, 26, 74]
                    },

                ]

            },

        }

        this.setState({line:line});
    }

    showLineChart=()=>{
        if(this.state.line.data){
            return <LineChart data={this.state.line.data} options={this.state.line.options}/>
        }
        else <></>
    }

    showDoughnutChart=()=>{
        if(this.state.doughnut.data){
            return <DoughnutChart data={this.state.doughnut.data} options={this.state.doughnut.options} />
        }
        else <></>
    }

    render(){
        return(
        <div class="row">
            <div class="col-md-12 grid-margin">
              
                <div class="row">
                
                    <div class="col-md-6 grid-margin">
                        <div className="card card-body">
                            {this.showLineChart()}
                        </div>
                    </div>
                
                    <div class="col-md-6 grid-margin">
                        <div className="card card-body">
                            {this.showDoughnutChart()}
                        </div>
                    </div>

                </div>
            
            </div>  
        </div>            
        );
    }
}