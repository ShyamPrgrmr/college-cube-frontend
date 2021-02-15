import './ListProduct.css';
import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class ListProduct extends Component{
  
  state={
    listOfProduct:[]
  };

  constructor(props) {
    super(props);
    //demo perpose

    
  }

  componentDidMount= async ()=>{
    let data = [
      {
        id:"1",
        name:"Gemini Oil",
        description:"Eatable Oil",
        measurement:"litre",
        manufacturer:"Gemini"
      }
    ];

    await this.setState({listOfProduct:data});
  }

  getListOfProduct= ()=>{
    const listOfProduct = this.state.listOfProduct;
    let products = listOfProduct.map((product)=>{
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.measurement}</td>
          <td>{product.manufacturer}</td>
          <td><button className="btn btn-link btn-fw" type="button">More option</button></td>
        </tr>
      );
    });

    return products;
  }

  render(){
    return(<>
      <div class="col-md-12 stretch-card">
          <div class="card">
            <div class="card-body">
              <p class="card-title">All Products</p>
              <div class="table-responsive">
                <table id="recent-purchases-listing" class="table">
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Measurement</th>
                        <th>Manufacturer</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.getListOfProduct()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}
