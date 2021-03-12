import React,{Component} from 'react';
import CartItem from './CartItem/CartItem';

export default class Cart extends Component{
  constructor(props){
    super(props);
  }

  state={
      cart:[
          {
              
          },

      ]
  };

  loadCart=()=>{

  }
  
  render(){
    return(<>
        <li class="has-dropdown">

            <a class="mini-cart-shop-link"><i class="fas fa-shopping-bag"></i>

                <span class="total-item-round">2</span></a>


            <span class="js-menu-toggle"></span>
            <div class="mini-cart">

                <div class="mini-product-container gl-scroll u-s-m-b-15">
                    <CartItem data={ {name:"gemini oil", measurement:"kg", quantity:300 , price:400 , imgsrc:""} } />
                </div>

                <div class="mini-product-stat">
                    <div class="mini-total">
                        <span class="subtotal-text">SUBTOTAL</span>
                        <span class="subtotal-value">$16</span></div>
                    <div class="mini-action">
                        <a class="mini-link btn--e-brand-b-2" href="#">PROCEED TO CHECKOUT</a>
                        <a class="mini-link btn--e-transparent-secondary-b-2" href="#">VIEW CART</a></div>
                </div>


            </div>
        </li>
    </>);
  }
}
