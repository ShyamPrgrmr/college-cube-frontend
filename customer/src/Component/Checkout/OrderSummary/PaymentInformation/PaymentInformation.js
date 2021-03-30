import React,{Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {cart : state.cart }
}


class PaymentInformationView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onSubmit=(e)=>{
        e.preventDefault();

        //API POST
    }

    render() {
        return (
            <>
                <div class="o-summary__box">
                    <h1 class="checkout-f__h1">PAYMENT INFORMATION</h1>
                    <form onSubmit={this.onSubmit}>
                        <button class="btn btn--e-brand-b-2" type="submit">PLACE ORDER</button>
                    </form>
                </div>  
            </>
        );
    }
}


const PaymentInformation = connect(mapStateToProps)(PaymentInformationView);
export default PaymentInformation;