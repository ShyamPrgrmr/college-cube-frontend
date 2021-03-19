import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SectionIntro from './../../Header/Header';

class Login extends Component{
    
    constructor(props){
        super(props);
    }

    state={
        email:"",
        password:""
    }

    onSubmit=(e)=>{
        e.preventDefault();
    }

    onChange=(e)=>{
        this.setState({ [e.target.name]:e.target.value});
    }

    render(){
        return(<>
        
        <div class="u-s-p-b-60">
        <SectionIntro title="Already Registered?"/>
                <div class="section__content">
                    <div class="container">
                        <div class="row row--center">
                            <div class="col-lg-6 col-md-8 u-s-m-b-30">
                                <div class="l-f-o">
                                    <div class="l-f-o__pad-box">
                                        <h1 class="gl-h1">I'M NEW CUSTOMER</h1>

                                        <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span>
                                        
                                        <div class="u-s-m-b-15">
                                            <Link class="l-f-o__create-link btn--e-transparent-brand-b-2" to="/signup" >CREATE AN ACCOUNT</Link>
                                        </div>
                                        
                                        <h1 class="gl-h1">SIGNIN</h1>
                                        <span class="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                                        <form class="l-f-o__form" onSubmit={this.onSubmit}>

                                            <div class="u-s-m-b-30">
                                                <label class="gl-label" for="login-email">E-MAIL *</label>
                                                <input class="input-text input-text--primary-style" type="email" id="login-email"  onChange={this.onChange}  name="email" value={this.state.email} placeholder="Enter E-mail" required/>
                                            </div>
                                            
                                            <div class="u-s-m-b-30">
                                                <label class="gl-label" for="login-password">PASSWORD *</label>
                                                <input class="input-text input-text--primary-style" type="password" id="login-password" onChange={this.onChange}  name="password" value={this.state.password} placeholder="Enter Password" required/>
                                            </div>
                                            
                                            <div class="gl-inline">
                                                <div class="u-s-m-b-30">
                                                    <button class="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button>
                                                </div>
                                                
                                                <div class="u-s-m-b-30">
                                                    <Link class="gl-link" to="/forgotpassword">Lost Your Password?</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>);
    }
}

export default Login;