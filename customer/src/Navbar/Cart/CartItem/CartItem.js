import React,{Component} from 'react';

export default class CartItem extends Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }
  
  componentDidMount=()=>{
    this.setState({data : this.props.data})
  }

  componentDidUpdate=()=>{
    if(this.state.data !== this.props.data)
      this.setState({data : this.props.data})
  }

  render(){
    return(<>
    
    <div class="card-mini-product">
        <div class="mini-product">
            <div class="mini-product__image-wrapper">
                <a class="mini-product__link" href="product-detail.html">
                <img class="u-img-fluid" src={this.state.data.imgsrc} alt=""/></a></div>
            <div class="mini-product__info-wrapper">
                <span class="mini-product__category">
                    <a href="#">{this.state.data.name}</a>
                </span>
                <span class="mini-product__name">
                    <a href="#">{this.state.data.description}</a>
                </span>
                <span class="mini-product__quantity">{this.state.data.price+" Rs. " + " * " + this.state.data.quantity+" = "} </span>
                <span class="mini-product__price">{ ( parseInt(this.state.data.price) * parseInt(this.state.data.quantity)) + " Rs"}</span></div>
        </div>
        <a class="mini-product__delete-link far fa-trash-alt"></a>
    </div>
    
    </>);
  }
}
