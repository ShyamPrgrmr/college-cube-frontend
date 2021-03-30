import React,{Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return { username:state.username, phone:state.mobile, address:state.address, email:state.email, isLoggedIn : state.isLoggedIn }
}

class MyAccountView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders:[
                {
                    id:"12345",
                    date:"12/12/12",
                    total:120,
                },
                {
                    id:"54395",
                    date:"12/12/12",
                    total:170,
                }

            ],
            name:"Shyam Pradhan",
            phone:"8899665511",
            address:"Near Gandhi nagar, Amravati",
            email:"qwer@123.com",
            orderFilter:"last_5"
         };
    }



    onOrderDetailsClick=(e)=>{
        e.preventDefault();
        let id = e.target.name;
        this.props.loadOrderDetails(id);
    }


    loadTable=()=>{
        let filter = this.state.orderFilter;
        // API Fetch
        let ret = this.state.orders.map(
            data=>{
                return (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.date}</td>
                        <td>{data.total} Rs.</td>
                        <td>
                            <div class="dash__link dash__link--brand">
                                <a onClick={this.onOrderDetailsClick} name={data.id}>Order Details</a>
                            </div>
                        </td>
                    </tr>
                )
            }
        );

        return ret;
    }
    
    componentDidMount=()=>{
        this.setState({
            name:this.props.username,
            phone:this.props.phone,
            address:this.props.address,
            email:this.props.email,
        })
    }
    
    componentDidUpdate=()=>{
        if(this.props.username !== this.state.name){
            this.setState({
                name:this.props.username,
                phone:this.props.phone,
                address:this.props.address,
                email:this.props.email,
            })
        }
    }

    filterOrder=(e)=>{
        this.setState({orderFilter:e.target.value});
    }

    render() {
        return (
            <>
                <div class="col-lg-9 col-md-12">

                <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div class="dash__pad-2">
                <h1 class="dash__h1 u-s-m-b-14">Manage My Account</h1>
                <span class="dash__text u-s-m-b-30">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</span>
                <div class="row">
                    <div class="col-lg-6 u-s-m-b-30">
                        <div class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                            <div class="dash__pad-3">
                                <h2 class="dash__h2 u-s-m-b-8">PERSONAL PROFILE</h2>
                                
                                <span class="dash__text">{this.state.name}</span>
                                <span class="dash__text">{this.state.email}</span>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 u-s-m-b-30">
                        <div class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                            <div class="dash__pad-3">
                                <h2 class="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>
                                <div class="dash__link dash__link--secondary u-s-m-b-8">
                                    <a onClick={(e)=>{e.preventDefault(); this.props.loadEditProfile();}}>Edit</a>
                                </div>
                                <span class="dash__text">{this.state.address}</span>
                                <span class="dash__text">{this.state.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div></div>
                
                <div class="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
                    <h2 class="dash__h2 u-s-p-xy-20">MY ORDERS</h2>
                    <div class="dash__pad-2">
                    <div class="m-order__select-wrapper">
                        <label class="u-s-m-r-8" for="my-order-sort">Show:</label>
                        <select class="select-box select-box--primary-style" id="my-order-sort" value={this.state.orderFilter} onChange={this.filterOrder}>
                            <option selected value="last_5">Last 5 orders</option>
                            <option value="last_15_d">Last 15 days</option>
                            <option value="last_30_d">Last 30 days</option>
                            <option value="last_6_m">Last 6 months</option>
                            <option value="all">All Orders</option>
                        </select>
                        </div>
                    </div>

                    <table class="dash__table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Placed On</th>
                                <th>Total</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.loadTable()}
                        </tbody>
                    </table>
                </div>
                
                </div>
            </>
        );
    }
}


const MyAccount = connect(mapStateToProps)(MyAccountView);
export default MyAccount;