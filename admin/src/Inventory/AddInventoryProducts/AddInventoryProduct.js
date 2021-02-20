import React,{Component} from 'react';


export default class AddInventoryProducts extends Component{
    constructor(props){
        super(props);
        
    }

    state={
        products : [],
        id:"",
        quantity:0,
        name:"",
        measurement:"",
        productdata:[]
    };

    componentDidMount=()=>{
        
    }

    getNamesofProducts=()=>{
        const  data = [
            
                {
                    id:200,
                    price:300,
                    name:"Gemini oil 200",
                    measurement:"gram",
                    quantity:500
                },
                {
                    id:201,
                    price:200,
                    name:"Gemini oil 500 ml",
                    measurement:"litre",
                    quantity:300
                },
                {
                    id:202,
                    price:200,
                    name:"Gemini oil 500 ml",
                    measurement:"litre",
                    quantity:300
                },
                {
                    id:203,
                    price:200,
                    name:"Gemini oil 500 ml",
                    measurement:"litre",
                    quantity:300
                }
            
        ];
        //fetching to server ..... 

        let products = data.map(
            product=>{
                return(<option value={product.id} id={product.id} title={product.name} about={product.measurement}>{product.name}</option>);
            }
        );
        return products;
    }

    addProduct=(e)=>{
        e.preventDefault();
        let list = this.state.products;
        list.push({name:this.state["name"],id:this.state["id"],quantity:this.state["quantity"],measurement:this.state["measurement"]});
        this.setState({products:list});
    }

    selectProduct=(e)=>{
        e.preventDefault();
        let name = document.getElementById(e.target.value).title;
        let measurement = document.getElementById(e.target.value).attributes.about.value;
        this.setState({id:e.target.value,name,measurement});
    }

    inputId=(e)=>{
        e.preventDefault();
        this.setState({quantity:e.target.value});
    }

    deleteProductInList=(e)=>{
        e.preventDefault();
        let id = e.target.value;
        let list = this.state.products.filter(
            product=>{
                if(product.id === id) return false;
                else return true;
            }
        );
        this.setState({products:list});
    }

    getListofProducts=()=>{
        let data = this.state.products.map(
            product=>{
                return (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.quantity+" "+product.measurement}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" value={product.id} onClick={this.deleteProductInList} >delete</button>
                    </td>
                </tr>
                );
            }
        );

        return data;
    }

    addToInventory=(e)=>{
        e.preventDefault();
        console.log();
        //post data...
        //if response is 200... then
        //this.props.addProductinInventory(this.state.products);
        //this.setState({product:[]});
    }

    render(){
        return(
        <div className="row">
            <div class="col-6  grid-margin stretch-card" id="first-container-add-product">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Add Product
                        </div>
                        <div className="form-sample">
                            <div class="form-group">
                                <label for="">Name of products</label>
                                <select class="form-control" value={this.state.id} onChange={this.selectProduct}>
                                    {this.getNamesofProducts()}
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="">Quantity{" in "+this.state.measurement}</label>
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="Quantity" onChange={this.inputId}/>
                            </div>

                            <button type="submit" class="btn btn-primary mr-2" onClick={this.addProduct}>Add</button>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6 grid-margin stretch-card">
                <div class="card ">
                    <div class="card-body table-card">
                        <h4 class="card-title">List of Products</h4>
                        <div class="table-responsive">
                            <table id="recent-purchases-listing" class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getListofProducts()}
                            </tbody>
                            </table>
                        </div>
                    </div>  
                    <button className="btn btn-primary in-btn"  onClick={this.addToInventory}>Add to Inventory</button>
                    
                </div>
            </div>

        </div>);
    }
}