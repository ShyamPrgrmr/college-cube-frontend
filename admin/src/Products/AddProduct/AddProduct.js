import './AddProduct.css';
import React,{Component} from 'react';
import ImageUploader from './ImageUploader/ImageUploader';
import Cookies from 'universal-cookie';

export default class AddProduct extends Component{
  
  state={
    name:"",
    measurement:"Kilo Gram",
    manufacturer:"",
    description:"",
    images:[],
    token:"",
    server:"http://localhost:8080/"
  };

  constructor(props) {
    super(props);
  }

  onNewImgAdd=(src)=>{
    let listSrc = this.state.images;
    if(listSrc.length<3)
    {
      listSrc.push(src);
      this.setState({images:listSrc});
      console.log("Image uploaded!");
    } 
  }

  componentDidMount=()=>{
    const cookies = new Cookies();
    const token = cookies.get("token");
    this.setState({token});
  }

  onSubmit=(e)=>{
    e.preventDefault();
    if(this.state.images.length === 0)
    {
      alert("Please upload images!");
      return;
    }
    const cookies = new Cookies();
    const token = cookies.get("token");
    const json = JSON.stringify({
      name:this.state.name,
      measurement:this.state.measurement,
      manufacturer:this.state.manufacturer,
      images:this.state.images,
      description:this.state.description,
      token:token
    });

    fetch(
      this.state.server + "admin/addproductdata",
      {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'Accept':'application/json'
        },
        body:json
      }
    ).then(data=>{return data.json(); }).then(res=>{
      alert("Product added succefully!");
      this.setState({
        name:"",
        measurement:"Kilo Gram",
        manufacturer:"",
        images:[],
        description:""
      });
    }).catch(e=>{
      console.log(e);
    });
  }

  onChange=(e)=>{
    let {name,value} = e.target;
    this.setState({[name]:value});
  }


  render(){
      return( <>     
        <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add Product</h4>
            
            <div class="forms-sample">
              <div class="form-group">
                <label>Name</label>
                <input name="name" onChange={this.onChange} value={ this.state.name} type="text" class="form-control" placeholder="Name of product"/>
              </div>
              
              
              
            <div class="form-group">
                <label for="exampleSelectGender">Measurement</label>
                  <select class="form-control" name="measurement" onChange={this.onChange}>
                    <option value="Kilo Gram">Kilo Grams</option>
                    <option value="Litres">Litres</option>
                    <option value="Mili Litres">Mili Litres</option>
                    <option value="Grams">Grams</option>
                    <option value="Pieces">Pieces</option>
                  </select>
            </div>

              <div class="form-group">
                <ImageUploader onNewImgAdd={this.onNewImgAdd}/>
              </div>

              <div class="form-group">
                <ImageUploader onNewImgAdd={this.onNewImgAdd}/>
              </div>

              <div class="form-group">
                <ImageUploader onNewImgAdd={this.onNewImgAdd}/>
              </div>

              
              <div class="form-group">
                <label for="exampleInputCity1">Manufacturer</label>
                <input type="text" class="form-control " value={this.state.manufacturer} name="manufacturer" onChange={this.onChange} placeholder="Manufacturer"/>
              </div>
              
              <div class="form-group">
                <label for="exampleInputEmail3">Description</label>
                <textarea type="email" class="form-control" value={this.state.description} onChange={this.onChange} name="description" placeholder="Product description"></textarea>
              </div>


              <button onClick={this.onSubmit} class="btn btn-primary mr-2">Submit</button>

            </div>
          </div>
        </div>
      </div>
      </>
      );
  }
}
