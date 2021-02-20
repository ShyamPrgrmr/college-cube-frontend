import React,{Component} from 'react';

export default class ListItem extends Component{
  
  constructor(props) {
    super(props);
  }

  state={
    product:{}
  }

  changeToEdit=(e)=>{
    e.preventDefault();
    this.props.changeToEdit(this.state.product);
  }

  componentDidMount=()=>{
      this.setState({product:this.props.data});
  }

  moreOptionClick=(e)=>{
    e.preventDefault();
  }

  render(){
      const product = this.state.product;
      return(
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.measurement}</td>
            <td>{product.manufacturer}</td>
            <td><button className="btn btn-link btn-fw" type="button" onClick={this.changeToEdit}>More option</button></td>
      </tr>
      );
  }

}