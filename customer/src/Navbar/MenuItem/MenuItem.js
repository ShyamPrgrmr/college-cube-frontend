import React,{Component} from 'react';

export default class MenuItem extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(<>
        <li data-tooltip="tooltip" data-placement="left" title={this.props.title}>
            <a href="#">
                <i class={this.props.icon}></i>
            </a>
        </li>
    </>);
  }
}
