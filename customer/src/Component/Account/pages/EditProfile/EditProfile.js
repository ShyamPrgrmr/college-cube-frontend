import React,{Component} from 'react';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fname:"Shyam",
            lname:"Pradhan",
            email:"123@123.com",
           
            gender:"Male",
            bmonth:"1",
            bday:1,
            byear:2002,
            password:"",
            address:"Near Gandhi nagar, Amravati",
            phone:"4433443322"
         };
    }

    componentDidMount=()=>{
        //API fetch
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

    onChange=(e)=>{
        e.preventDefault()
        let val = e.target.value;
        let name = e.target.name;
        this.setState({ [name] : val});
    }

    onSubmit=(e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <>
                <div class="col-lg-9 col-md-12">
                    <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                        <div class="dash__pad-2">
                            <h1 class="dash__h1 u-s-m-b-14">Edit Profile</h1>

                            <span class="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                            
                            <div class="row">
                                <div class="col-lg-12">
                                    <form class="dash-edit-p" onSubmit={this.onSubmit}>
                                        <div class="gl-inline">
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-fname">FIRST NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" name="fname" placeholder="First name" value={this.state.fname} onChange={this.onChange}/></div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-lname">LAST NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" name="lname" placeholder="Last name" value={this.state.lname} onChange={this.onChange}/></div>
                                        </div>

                                        <div class="gl-inline">
                                            <div class="u-s-m-b-30">


                                                <span class="gl-label">BIRTHDAY</span>
                                                <div class="gl-dob">
                                                    
                                                    <select class="select-box select-box--primary-style" onChange={this.onChange} value={this.state.bmonth} name="bmonth" required>    
                                                        {this.getMonth()}
                                                    </select>
                                                    
                                                    <select class="select-box select-box--primary-style"  onChange={this.onChange} value={this.state.bday} name="bday" required>
                                                        <option selected disabled>day</option>
                                                        {this.getDays()}
                                                    </select>
                                                    
                                                    <select class="select-box select-box--primary-style"  onChange={this.onChange} value={this.state.byear} name="byear">
                                                        <option selected disabled>Year</option>
                                                        <option value="1991">1991</option>
                                                        {this.getYears()}
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="gender">GENDER</label>
                                                <select class="select-box select-box--primary-style u-w-100" onChange={this.onChange} value={this.state.gender} name="gender" id="gender" required>
                                                    <option selected disabled>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select></div>
                                        </div>



                                        <div class="gl-inline">
                                            <div class="u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">E-mail</h2>

                                                <span class="dash__text">{this.state.email}</span>
                                                
                                            </div>
                                            <div class="u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Phone</h2>
                                                <input class="input-text input-text--primary-style" type="number" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Phone"/>
                                            </div>
                                        </div>

                                        <div className="gl-inline">
                                            <div class="u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Address</h2>
                                                <input class="input-text input-text--primary-style" type="text" name="address" value={this.state.address} onChange={this.onChange} placeholder="Address"/>
                                            </div>
                                        </div>

                                        <button class="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EditProfile;