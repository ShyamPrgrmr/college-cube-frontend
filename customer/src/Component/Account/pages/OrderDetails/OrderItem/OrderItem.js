import React,{Component} from 'react';
import './OrderItem.css';

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            name:"Gemini Oil 500gram",
            quantity:10,
            price:2,
            imgsrc:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
         };
    }

    componentDidMount=()=>{
        this.setState({id:this.props.data.productid,quantity:this.props.data.quantity},this.loadData());
    }

    loadData=()=>{
        //api fetch
    }

    render() {
        return (
            <>
                <div class="manage-o__description margin-top margin-1rem-top">
                    <div class="description__container">
                        <div class="description__img-wrap" style={{display:"flex"}}>

                            <img class="u-img-fluid" src={this.state.imgsrc} alt="image"/></div>
                        <div class="description-title">{this.state.name}</div>
                    </div>
                    <div class="description__info-wrap">

                        
                        <div>
                            <span class="manage-o__text-2 u-c-silver">Quantity: {"  "} 
                                <span class="manage-o__text-2 u-c-secondary">{this.state.quantity}</span>
                            </span>
                        </div>
                        <div>
                            <span class="manage-o__text-2 u-c-silver">Price: {"  "}
                                <span class="manage-o__text-2 u-c-secondary">{ parseFloat(this.state.quantity) * parseFloat(this.state.price) } Rs.</span>
                            </span>
                        </div>

                    </div>
                </div>
            
            
            </>
        );
    }
}

export default OrderItem;