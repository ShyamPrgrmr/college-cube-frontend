import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class DeliveryInformation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            billingfname:"",
            billinglname:"",
            billingemail:"",
            billingphone:"",
            billingstreet:"",
            billingsteetoptional:"",
        };
    }

    useDefaultDeliveryAddressClicked=(e)=>{
        if(e.target.checked){
            //api fetch
            console.log("useDefaultDeliveryAddressClicked")
        }else{
            this.setState(
                { 
                    billingfname:"",
                    billinglname:"",
                    billingemail:"",
                    billingphone:"",
                    billingstreet:"",
                    billingstreetoptional:"",
                }
            );
        }
    }

    saveAsDefault=(e)=>{
        if(e.target.checked){
            //api save as default          
        }
    }

    onSubmitForm=(e)=>{
        e.preventDefault();
        let json = JSON.stringify({
            token:""
        });
        
    }

    onChange=(e)=>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value});
    }

    render() {
        return (
            <>
            <div class="col-lg-6">
                <h1 class="checkout-f__h1">DELIVERY INFORMATION</h1>
                <form class="checkout-f__delivery" onSubmit={this.onSubmitForm}>
                    <div class="u-s-m-b-30">


                        <div class="u-s-m-b-15">
                            <div class="check-box">
                                <input type="checkbox" id="get-address" name="getaddress" onChange={this.useDefaultDeliveryAddressClicked}/>
                                <div class="check-box__state check-box__state--primary">
                                    <label class="check-box__label" for="get-address">Use default delivery address from account</label>
                                </div>
                            </div>
                        </div>
                        


                        <div class="gl-inline">
                            <div class="u-s-m-b-15">
                                <label class="gl-label" for="billing-fname">FIRST NAME *</label>
                                <input class="input-text input-text--primary-style" type="text" onChange={this.onChange} value={this.state.billingfname} required name="billingfname" placeholder="First name"/>
                            </div>
                            <div class="u-s-m-b-15">
                                <label class="gl-label" for="billing-lname">LAST NAME *</label>
                                <input class="input-text input-text--primary-style" placeholder="Last name" onChange={this.onChange} value={this.state.billinglname} type="text" required name="billinglname"/>
                            </div>
                        </div>
                        
                        <div class="u-s-m-b-15">
                            <label class="gl-label" for="billing-email">E-MAIL *</label>
                            <input class="input-text input-text--primary-style" type="text" required name="billingemail" onChange={this.onChange} value={this.state.billingemail} placeholder="Email address"/>
                        </div>
                        
                        <div class="u-s-m-b-15">
                            <label class="gl-label" for="billing-phone">Mobile *</label>
                            <input class="input-text input-text--primary-style" type="text" required name="billingphone" onChange={this.onChange} value={this.state.billingphone} placeholder="Mobile number"/>
                        </div>
                        
                        <div class="u-s-m-b-15">
                            <label class="gl-label" for="billing-street">STREET ADDRESS *</label>
                            <input class="input-text input-text--primary-style" type="text" required onChange={this.onChange} value={this.state.billingstreet} name="billingstreet" placeholder="House name and street name"/>
                        </div>

                        
                                                
                        
                        <div class="u-s-m-b-10">
                            <div class="check-box">
                                <input type="checkbox" name="make-default-address" onChange={this.saveAsDefault}/>
                                <div class="check-box__state check-box__state--primary">
                                    <label class="check-box__label" for="make-default-address">Make default delivery address</label>
                                </div>
                            </div>
                        </div>

                       
                        <div>
                            <button class="btn btn--e-transparent-brand-b-2" type="submit">SAVE</button>
                        </div>
                    
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default DeliveryInformation;