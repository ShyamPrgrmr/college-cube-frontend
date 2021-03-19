import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import './App.css'
import SignUp from './Component/Auth/SignUp/SignUp';
import Login from './Component/Auth/Login/Login';
import ForgotPassword from './Component/Auth/ForgotPassword/ForgotPassword';
import {connect} from 'react-redux';
import { PathView } from './Component/Path/Path';
import Cart from './Component/Cart/Cart';

function mapStateToProps(state){
  return {state : state };
}


class AppContent extends Component{
  
  constructor(props){
    super(props); 
  }

  state={
    isLoggedIn:false
  }

  router=()=>{
    return (
      <Switch>
        <Route component={SignUp} path="/signup" key="Sign Up"></Route>
        <Route component={Login} path="/signin" key="Sign In"></Route>
        <Route component={ForgotPassword} path="/forgotpassword" key="Password Recovery"></Route>
        <Route component={Cart} path="/cart" key="Cart"></Route>
        <Route component={Home} path="/"></Route>
      </Switch>
    );
  }

  componentDidMount(){
    this.setState({isLoggedIn:this.props.state.isLoggedIn});
  }

  componentDidupdate=()=>{
    if(this.state.isLoggedIn !== this.props.state.isLoggedIn)   
      this.setState({isLoggedIn:this.props.isLoggedIn});
  }

  render(){
    return(
    <>
      <div id="app">
          <Navbar/>
          <div className="app-content">
            <PathView/>
            {this.router()}
          </div>
      </div>
    </>);
  }
}

const App = connect(mapStateToProps)(AppContent);

export default App;
