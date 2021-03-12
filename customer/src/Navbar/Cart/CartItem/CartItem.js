import React,{Component} from 'react';

export default class CartItem extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(<>
    
    <div class="card-mini-product">
        <div class="mini-product">
            <div class="mini-product__image-wrapper">
                <a class="mini-product__link" href="product-detail.html">
                <img class="u-img-fluid" src={this.props.data.imgsrc} alt=""/></a></div>
            <div class="mini-product__info-wrapper">
                <span class="mini-product__category">
                    <a href="#">{this.props.data.name}</a>
                </span>
                <span class="mini-product__name">
                    <a href="#">{this.props.data.description}</a>
                </span>
                <span class="mini-product__quantity">{this.props.data.quantity + this.props.data.measurement + " * "}</span>
                <span class="mini-product__price">{ this.props.data.price + " Rs"}</span></div>
        </div>
        <a class="mini-product__delete-link far fa-trash-alt"></a>
    </div>
    
    </>);
  }
}
