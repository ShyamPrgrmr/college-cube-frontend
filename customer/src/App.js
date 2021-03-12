import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import './App.css'


export default class App extends Component{
  constructor(props){
    super(props); 
    this.state = this.props;
  }
  
  router=()=>{
    return (
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>
    );
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  render(){
    return(
    <>
      <div id="app">
          <Navbar/>
          <div className="app-content">
            {this.router()}
          </div>
         
      </div>
    </>);
  }
}


/*

import React,{Component} from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(<></>);
  }
}


*/
