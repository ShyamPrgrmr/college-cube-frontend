import React,{Component} from 'react';
import Cookies from 'universal-cookie';

export default class ListItem extends Component{
  
  constructor(props) {
    super(props);
  }

  state={
    product:{},
    server:"http://localhost:8080/",
    price:0,
    id:"",
    previousprice:0
  }

  changeToEdit=(e)=>{
    e.preventDefault();
    this.props.changeToEdit(this.state.product);
  }

  componentDidMount=()=>{
    const cookies = new Cookies();
    const token = cookies.get("token");
    let price=0;

    fetch(this.state.server+"product/getproductsprice?id="+this.props.data._id+"&token="+token,{
      method:"GET",
      headers:{
        "accept":"application/json"
      }
    }).then(data=>{
      return data.json();
    }).then(response=>{
      price = response.price;
      this.setState({
        product:this.props.data,
        price:price,
        id:this.props.data._id,
        previousprice:price
      });
    });
  }

  onChange=(e)=>{
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  updateClick=(e)=>{
    e.preventDefault();

    const cookies = new Cookies();
    const token = cookies.get("token");


    let json = JSON.stringify({
      token:token,
      id:this.props.data._id,
      price:this.state.price
    }); 

    fetch(this.state.server+"admin/updateproductprice",{
      method:"PUT",
      headers:{
        "content-type":"application/json",
        "accept":"application/json"
      },
      body:json
    }).then(data=>{ return data.json(); }).then(res=>{
      if(!res){
        this.setState({price:this.state.previousprice});
      }
    });
  }

  loadPrice=()=>{
    return (
    <>
      <div class="input-group">
        <input type="number" class="form-control" name="price" onChange={this.onChange} placeholder="Product price" value={this.state.price}/>
        <div class="input-group-append">
          <button class="btn btn-xs btn-primary" type="button" onClick={this.updateClick}>Update</button>
        </div>
      </div>
    </>);
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
            <td>{this.loadPrice()}</td>
            <td><button className="btn btn-link btn-fw" type="button" onClick={this.changeToEdit}>More option</button></td>
      </tr>
      );
  }

}