import React,{Component} from 'react';

export default class EditProduct extends Component{
  
  state={
      product:{},
      name:"",
      manufacturer:"",
      description:""
  };

  constructor(props) {
    super(props);
  }

  onChange=(e)=>{
    const {name, value} = e.target;
    this.setState({[name] : value});
  }

  componentDidMount=()=>{
      this.setState({
        product:this.props.edit,
        name:this.props.edit.name,
        manufacturer:this.props.edit.manufacturer,
        description:this.props.edit.description
    });
  }

  changeToList=(e)=>{
    e.preventDefault();
    this.props.changeToList();
  }

  onSave=(e)=>{
    e.preventDefault();
  }

  render(){
      return (
          <>
            <div className="card-title d-flex justify-content-between align-items-center"> Edit Product
                <button onClick={this.changeToList} className="btn btn-sm btn-icon btn-link">
                    <i className="mdi mdi-close text-dark"></i>
                </button>
            </div> 
            <div className="forms-sample">
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input type="text" onChange={this.onChange} name="name" class="form-control" value={this.state.name} placeholder="Name of product"/>
                </div>
              
                <div class="form-group">
                    <label for="exampleInputCity1">Manufacturer</label>
                    <input type="text" onChange={this.onChange} name="manufacturer" class="form-control" value={this.state.manufacturer}  id="exampleInputCity1" placeholder="Location"/>
                </div>
              
                <div class="form-group">
                    <label for="exampleInputEmail3">Description</label>
                    <textarea type="text" onChange={this.onChange} name="description" class="form-control" value={this.state.description} id="exampleInputEmail3" placeholder="Product description"></textarea>
                </div>

                <button type="submit" onClick={this.onSave} class="btn btn-primary mr-2">Save</button>

            </div>
          </>
      );
  }
}