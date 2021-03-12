import React,{Component} from 'react';
import logo from './../logo.svg';
import MenuItem from './MenuItem/MenuItem';
import './Navbar.css';
import User from './User/User';
import Cart from './Cart/Cart';

export default class Navbar extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount=()=>{

  }
  
  componentDidUpdate=()=>{
    console.log(this.props);
  }

  render(){
    return(
    <>
    
        <header class="header--style-1">
            <nav class="primary-nav primary-nav-wrapper--border">
                <div class="container">
                    <div class="primary-nav">
                        <a class="main-logo" href="index.html"><img className="logo-svg" src={logo} alt=""/></a>
                        <div class="menu-init" id="navigation">
                        <button class="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button"></button>
                            <div class="ah-lg-mode">
                                <span class="ah-close">✕ Close</span>
                                <ul class="ah-list ah-list--design1 ah-list--link-color-secondary">
                                    
                                    <User/>
                                    <MenuItem title="Home" icon="fas fa-home"/>
                                    <MenuItem title="Wishlist" icon="far fa-heart"/>
                                    <Cart/>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    
    </>);
  }
}
