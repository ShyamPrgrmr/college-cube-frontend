import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SectionIntro from './../../Header/Header';

class SignUp extends Component{
    
    constructor(props){
        super(props);
        
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    onChange=(e)=>{
        e.preventDefault()
        let val = e.target.value;
        let name = e.target.name;
        this.setState({ [name] : val});
    }

    state={
        fname:"",
        lname:"",
        email:"",
        gender:"Male",
        bmonth:"1",
        bday:1,
        byear:2002,
        password:""
    }

    getMonth=()=>{
        return(<>
            <option value="1" selected>January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">Octomber</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </>);
    }

    getYears=()=>{
        let year = new Date().getFullYear();
        let pryear = year - 80;
        let ret = [];
        for(let i=pryear;i< (year-16);i++){
            ret.push(i);
        }
        let data = ret.map(y=>{
            return <option value={""+y}>{y}</option>
        });
        return data;
    }

    DaysInMonth=()=>{
        return new Date( parseInt(this.state.byear),parseInt(this.state.bmonth),0 ).getDate();
    }

    getDays=()=>{
        let num = this.DaysInMonth(); 
        
        let arr = [];
        for(let i=1;i<=num;i++) arr.push(i);
        let data = arr.map(day=>{
            return <option value={""+day}>{day}</option>;
        });
        return data;
    }


    render(){
        return(<>    
    <div class="u-s-p-b-60">

    <SectionIntro title="Create An Account"/>
        
        <div class="section__content">
            <div class="container">
                <div class="row row--center">
                    <div class="col-lg-6 col-md-8 u-s-m-b-30">
                        <div class="l-f-o">
                            <div class="l-f-o__pad-box">
                                <h1 class="gl-h1">PERSONAL INFORMATION</h1>
                                <form class="l-f-o__form" onSubmit={this.onSubmit}>
                                    
                                    <div class="u-s-m-b-30">
                                        <label class="gl-label" for="reg-fname">FIRST NAME *</label>
                                        <input class="input-text input-text--primary-style" type="text" onChange={this.onChange} value={this.state.fname} name="fname" placeholder="First Name" required/>
                                    </div>
                                    
                                    <div class="u-s-m-b-30">
                                        <label class="gl-label" for="reg-lname">LAST NAME *</label>
                                        <input class="input-text input-text--primary-style" type="text" onChange={this.onChange} value={this.state.lname} name="lname" placeholder="Last Name" required/>
                                    </div>

                                    <div class="gl-inline">
                                        <div class="u-s-m-b-30">
                                            <span class="gl-label">BIRTHDAY</span>
                                            <div class="gl-dob">
                                                <select class="select-box select-box--primary-style" onChange={this.onChange} value={this.state.bmonth} name="bmonth" required>
                                                    <option selected disabled>Month</option>
                                                    {this.getMonth()}
                                                </select>
                                                <select onChange={this.onChange} value={this.state.bday} name="bday" class="select-box select-box--primary-style">
                                                    <option selected disabled>Day</option>
                                                    {this.getDays()}
                                                </select>
                                                <select onChange={this.onChange} value={this.state.byear} name="byear" class="select-box select-box--primary-style">
                                                    <option selected disabled>Year</option>
                                                    {this.getYears()}
                                                </select></div>
                                        </div>

                                        <div class="u-s-m-b-30">
                                            <label class="gl-label" for="gender">GENDER</label>
                                            <select class="select-box select-box--primary-style u-w-100" onChange={this.onChange} value={this.state.gender} name="gender" id="gender" required>
                                                <option selected>Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div class="u-s-m-b-30">
                                        <label class="gl-label" for="reg-email">E-MAIL *</label>
                                        <input class="input-text input-text--primary-style" onChange={this.onChange} value={this.state.email} name="email" type="email" autoComplet="on" id="reg-email" placeholder="Enter E-mail" required/>
                                    </div>

                                    <div class="u-s-m-b-30">
                                        <label class="gl-label" for="reg-password">PASSWORD *</label>
                                        <input class="input-text input-text--primary-style" onChange={this.onChange} value={this.state.password} name="password" type="password"  placeholder="Enter Password" required/>
                                    </div>
                                    
                                    <div class="u-s-m-b-15">
                                        <button class="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button>
                                    </div>

                                    <Link class="gl-link" to="/signin">Return to Signin</Link>
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


export default SignUp;