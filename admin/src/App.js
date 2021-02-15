
import './App.css';
import React,{Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import AddProduct from './Products/AddProduct/AddProduct';
import Error404 from './error/Error404';
import ListProduct from './Products/ListProduct/ListProduct';
import Order from './Order/Order';
import Navbar from './Navbar/Navbar';
import TopNavbar from './Navbar/TopNavabar';

export default class App extends Component{
  
  state={
    name : "Shyam Pradhan",
    route : "/Dashboard"
  };


  constructor(props) {
    super(props);
  }


  changeRoute=(route)=>{
    this.setState({route:route});
  }

  render(){
    return(
      <>
      <div className="container-scroller">
        <TopNavbar name={this.state.name} route={this.state.route}></TopNavbar>
        <div className="container-fluid page-body-wrapper">
            <Navbar changeRoute={this.changeRoute} routeprops={this.props}></Navbar>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        {this.router()}
                    </div>
                </div>
            </div>
          </div>
    </div>
    </>
    );
  }

  componentDidMount=()=>{

  }

  router=()=>{
    return(
      
        <Switch>
            <Route path='/products/addproduct' component={AddProduct} routeprops={this.props}></Route>
            <Route path='/products/listproducts' component={ListProduct} routeprops={this.props}></Route>
            <Route path='/orders' component={Order} routeprops={this.props}></Route>
            <Route component={Error404}></Route>
        </Switch>
      
    );
  }

}
