
import React,{Component} from 'react';

export default class User extends Component{
  
    constructor(props){
    super(props);
  }
  
  render(){
    return(<>
    
        <li class="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">
            <a><i class="far fa-user-circle"></i></a>
            <span class="js-menu-toggle"></span>
            <ul style={{width:120}}>
                <li>
                    <a href="#"><i class="fas fa-user-circle u-s-m-r-6"></i>
                    <span>Account</span></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-user-plus u-s-m-r-6"></i>
                    <span>Signup</span></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-lock u-s-m-r-6"></i>
                    <span>Signin</span></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-lock-open u-s-m-r-6"></i>
                    <span>Signout</span></a>
                </li>
            </ul>
        </li>
        
    </>);
  }
}
