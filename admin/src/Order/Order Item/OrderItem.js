import React,{Component} from 'react';
import Cookies from 'universal-cookie';

export default class OrderItem extends Component{

    constructor(props){
        super(props);
        this.state = props;
    }

    state={
        server:"http://localhost:8080/"
    }

    
    componentDidMount=()=>{
    }

    componentDidUpdate=(props,state)=>{

    }


    onClick=(e)=>{
        e.preventDefault();
        const cookies = new Cookies();
        const token = cookies.get("token");
        const orderid = this.props.orderid;
        let status = 0;

        if(e.target.value==="1"){
           status=1;
        }
        else if(e.target.value==="0"){
            status=0;
        }

        const json = JSON.stringify(
            {
                token:token,
                orderid:orderid,
                status:status
            }
        );

        fetch("http://localhost:8080/admin/order/setdelivery",
        {
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json"
            },
            body:json
        }).then(
            data=>{return data.json();}
        ).then(res=>{

            if(!res){ alert("Error!"); return; }
            this.props.changeOrderStatus(orderid,status);
            this.setState({orderstatus:status});

        }).catch(e=>{console.error(e);})

    }
    

    displayButton=()=>{
        if(this.state.orderstatus===-1){
            return <>
                <button className="btn btn-primary btn-sm" style={{marginRight:3}} onClick={this.onClick} value={1}>Accept</button>
                <button className="btn btn-danger btn-sm" onClick={this.onClick} value={0}>Reject</button>
            </>;
        }
        else if(this.state.orderstatus===0){
            return <div className="r">Rejected</div>;
        }
        else if(this.state.orderstatus===1){
            return <div className="ar">Being Deliver</div>;
        }
        
        else if(this.state.orderstatus===3){
            return <div className="d">Delivered</div>;
        }
    }

    borderColor=()=>{
        if(this.state.orderstatus===-1){
            return "order--list__item arrived";
        }
        else if(this.state.orderstatus===0){
            return "order--list__item rejected";
        }
        else if(this.state.orderstatus===1){
            return "order--list__item accepted";
        }
        
        else if(this.state.orderstatus===3){
            return "order--list__item delivered";
        }
        
    }

    loadtable=()=>{
        const products = this.state.products;
        let tabledata = products.map(
            product=>{
                return(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                    </tr>
                );
            }
        );
        return tabledata;
    }

    render(){
        return(
            <div className={this.borderColor()}>
                <div className='main'>
                    <h4>{this.state.username.firstname+" "+this.state.username.lastname}</h4>
                    <div >
                       {this.displayButton()} 
                    </div>
                </div>

                <div className="sub">
                    <p className="address">
                        {this.state.useraddress.route}, 
                        {" "+this.state.useraddress.pincode}
                        <br/>
                         {this.state.usermobile.mob_1}
                    </p>
                </div>
                <hr/>
                <div className="product-list">
                    <div class="table-responsive">
                        <table id="recent-purchases-listing" class="table">
                            <thead>
                                <tr>
                                    <th>Product name</th>
                                    <th>Quantity</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.loadtable()}
                                <tr className="total">
                                    <td/><td/><td>Total Amount {" "+this.state.totalprice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
                </div>

            </div>
        );
    }
    

}

/*

-1 : not accepted yet waiting       primary
        0 : not accepted                    danger
        1 : accepted                        info
        2 : out for delivery                secondary
        3 : delivered                       warning

[
    {
        "userid": "5ffd63f9d49fd14098ba6251",
        "username": {
            "firstname": "Shyam",
            "lastname": "Pradhan"
        },
        "usermobile": {
            "mob_1": "7387954553"
        },
        "useraddress": {
            "route": "wadali camp amravati",
            "pincode": 444606
        },
        "products": [
            {
                "name": "test",
                "quantity": 3,
                "price": 600,
                "id": "6010dea6505d014bd4e9ef03"
            }
        ],
        "totalprice": 600,
        "placedat": "2021-01-27T04:19:13.202Z",
        "orderid": "6010e9c13841022270a63fa5",
        "orderstatus": 1
    }
]

*/