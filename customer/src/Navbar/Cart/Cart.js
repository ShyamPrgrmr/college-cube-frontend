import React,{Component} from 'react';
import CartItem from './CartItem/CartItem';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {cart:state.cart};
}



class CartList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount=()=>{
      this.setState({cart:this.props.cart});
  }
  
  componentDidUpdate=()=>{
      if(this.state.cart !== this.props.cart){
          this.setState({cart:this.props.cart});
      }
  }

  loadCartList=()=>{
    if(this.state){
        let data = this.state.cart.map(cartitem=>{
            return <CartItem data={ cartitem } />
          })
        return data;
    }
    else{
        return <></>
    }
      
  }

  getNumberOfItem=()=>{
    let data = this.props.cart;
    return data.length;
  }

  render(){
    return(<>
        <li class="has-dropdown">

            <a class="mini-cart-shop-link"><i class="fas fa-shopping-bag"></i>

                <span class="total-item-round">{this.getNumberOfItem()}</span></a>


            <span class="js-menu-toggle"></span>
            <div class="mini-cart">

                <div class="mini-product-container gl-scroll u-s-m-b-15">
                    
                    {this.loadCartList()}

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


const Cart = connect(mapStateToProps)(CartList)

export default Cart;