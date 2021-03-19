import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SectionIntro from './../../Header/Header';


class ForgotPassword extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<>
            <div class="u-s-p-b-60">

<SectionIntro title="Forgot Password"/>

<div class="section__content">
    <div class="container">
        <div class="row row--center">
            <div class="col-lg-6 col-md-8 u-s-m-b-30">
                <div class="l-f-o">
                    <div class="l-f-o__pad-box">
                        <h1 class="gl-h1">PASSWORD RESET</h1>

                        <span class="gl-text u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</span>
                        
                        <form class="l-f-o__form">
                            
                            <div class="u-s-m-b-30">

                                <label class="gl-label" for="reset-email">E-MAIL *</label>
                                <input class="input-text input-text--primary-style" type="text" id="reset-email" placeholder="Enter E-mail"/>    
                            </div>

                            <div class="u-s-m-b-30">
                                <button class="btn btn--e-transparent-brand-b-2" type="submit">SUBMIT</button>
                            </div>

                            <div class="u-s-m-b-30">
                                <Link class="gl-link" to="/signin">Back to Login</Link>
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

export default ForgotPassword;