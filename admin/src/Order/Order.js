import React,{Component} from 'react';
import OrderItem from './Order Item/OrderItem';
import './Order.css';

export default class Order extends Component{
    
    state={orders:[],filterOrder:[]};
    constructor(props){
        super(props);
    }


    filterOreders=(fil)=>{
        const filter = fil.target.value;
        
        
        if(filter==="Arrived"){
            const products = this.state.orders;
        
            let productarr = products.filter(
                (data)=>{
                    if(data.orderstatus===-1) return true;
                    else return false;
                }
            );
            this.setState({filterOrder:productarr});
        }
        else if(filter==="All"){
            const products = this.state.orders;
            this.setState({filterOrder:products});
        }
        else if(filter==="Rejected"){
            const products = this.state.orders;
        
            let productarr = products.filter(
                (data)=>{
                    if(data.orderstatus===0) return true;
                    else return false;
                }
            );

            this.setState({filterOrder:productarr});
        }
        
        else if(filter==="Delivered"){
            const products = this.state.orders;
        
            let productarr = products.filter(
                (data)=>{
                    if(data.orderstatus===3) return true;
                    else return false;
                }
            );

            this.setState({filterOrder:productarr});   
        }
        
        else if(filter==="Accepted"){
            const products = this.state.orders;
        
            let productarr = products.filter(
                (data)=>{
                    if(data.orderstatus===1) return true;
                    else return false;
                }
            );
            this.setState({filterOrder:productarr});
        }

    }
    
    componentDidMount=()=>{
        let orders = [
            {
                userid: "5ffd63f9d49fd14098ba6251",
                username: {
                    firstname: "Shyam",
                    lastname: "Pradhan"
                },
                usermobile: {
                    mob_1: "7387954553"
                },
                useraddress: {
                    route: "wadali camp amravati",
                    pincode: 444606
                },
                products: [
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    }
                ],
                totalprice: 1800,
                placedat: "2021-01-27T04:19:13.202Z",
                orderid: "6010e9c13ddd841022270a63fa5",
                orderstatus: 3
            },
            {
                userid: "5ffd63f9d49fd14098ba6251",
                username: {
                    firstname: "Shyam",
                    lastname: "Pradhan"
                },
                usermobile: {
                    mob_1: "7387954553"
                },
                useraddress: {
                    route: "wadali camp amravati",
                    pincode: 444606
                },
                products: [
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    }
                ],
                totalprice: 1800,
                placedat: "2021-01-27T04:19:13.202Z",
                orderid: "6010e9sssc13841022270a63fa5",
                orderstatus: 1
            },
            {
                userid: "5ffd63f9d49fd14098ba6251",
                username: {
                    firstname: "Shyam",
                    lastname: "Pradhan"
                },
                usermobile: {
                    mob_1: "7387954553"
                },
                useraddress: {
                    route: "wadali camp amravati",
                    pincode: 444606
                },
                products: [
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    }
                ],
                totalprice: 1800,
                placedat: "2021-01-27T04:19:13.202Z",
                orderid: "6010e9c13841022270a63fa5",
                orderstatus: -1
            },
            {
                userid: "5ffd63f9d49fd14098ba6251",
                username: {
                    firstname: "Shyam",
                    lastname: "Pradhan"
                },
                usermobile: {
                    mob_1: "7387954553"
                },
                useraddress: {
                    route: "wadali camp amravati",
                    pincode: 444606
                },
                products: [
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea650eeee5d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    },
                    {
                        name: "test",
                        quantity: 3,
                        price: 600,
                        id: "6010dea6505d014bd4e9ef03"
                    }
                ],
                totalprice: 1800,
                placedat: "2021-01-27T04:19:13.202Z",
                orderid: "6010e9c1384102227hhh0a63fa5",
                orderstatus: 0
            }


        ];

        this.setState({orders:orders,filterOrder:orders});
    }

    getList=()=>{
        const orders = this.state.filterOrder;
        
        
        let orderarr = orders.map(
            (data)=>{
                return(
                    <OrderItem {...data} key={data.orderid}></OrderItem>
                );
            }
        );
        return orderarr;

    }

    /*
        -1 : not accepted yet waiting       primary
        0 : not accepted                    danger
        1 : accepted                        info
        2 : out for delivery                secondary
        3 : delivered                       warning
    */


    filter=()=>{
        return(
        <>
            <div className="filter">
            <label for="selectordertype">Order type</label>
                  <select class="form-control" onChange={ this.filterOreders}>
                    <option>All</option>
                    <option>Accepted</option> 
                    <option>Rejected</option>
                    <option>Arrived</option>
                    <option>Delivered</option>
                  </select>
            </div>
        </>
        );
    }

    render(){
        return(
            <>
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Orders</h4>
                            {this.filter()}
                            <div className="order--list">
                                
                                {this.getList()}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}