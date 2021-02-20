import './ListProduct.css';
import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ListItem from './ListItem/ListItem';
import EditProduct from './EditProduct/EditProduct';

export default class ListProduct extends Component{
  
  state={
    listOfProduct:[],
    currentPage:1,
    isEditProduct:false,
    toEditProduct:{}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount= ()=>{
    const cookies = new Cookies();
    const token = cookies.get("token");
    let url = "http://localhost:8080/product/getproducts?page="+this.state.currentPage+"&token="+token;

    fetch(url,{
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'accept':'application/json'
      },
    }).then(response=>{
      return response.json();
    }).then(data=>{
      this.setState({listOfProduct:data.product});
    });
      
  }

  changeToEdit=(product)=>{
    this.setState({toEditProduct:product,isEditProduct:true});
  }

  changeToList=()=>{
    this.setState({isEditProduct:false});
  }


  getListOfProduct= ()=>{
    const listOfProduct = this.state.listOfProduct;
    let products = listOfProduct.map((product)=>{
      return (
        <ListItem key={product.id} data={product} changeToEdit={this.changeToEdit}/>
      );
    });

    return products;
  }

  loadNewPage=()=>{
    const page = this.state.currentPage;
    
  }

  previousButtonClicked=(e)=>{
    e.preventDefault();
    this.setState({currentPage:this.state.currentPage-1});
  }
  nextButtonClicked=(e)=>{
    e.preventDefault();
    this.setState({currentPage:this.state.currentPage+1});
  }

  currentPage=()=>{
    let currentPage = this.state.currentPage;
    return currentPage === 1 ?(
        <div className="btn-group" role='group'>
            <button className='btn btn-primary btn-sm' disabled> 0 </button>
            <button className='btn btn-outline-secondary btn-sm' disabled> {this.state.currentPage} </button>
            <button className='btn btn-primary btn-sm' onClick={this.nextButtonClicked}> {this.state.currentPage+1} </button>
        </div>
    ) : (
        <div className="btn-group" role='group'>
            <button className='btn btn-primary btn-sm' onClick={this.previousButtonClicked}> {this.state.currentPage-1} </button>
            <button className='btn btn-outline-secondary btn-sm' disabled> {this.state.currentPage} </button>
            <button className='btn btn-primary btn-sm' onClick={this.nextButtonClicked}> {this.state.currentPage+1} </button>
        </div>
    );
}

editProduct=()=>{
  return this.state.isEditProduct?<>
   <EditProduct edit={this.state.toEditProduct} changeToList={this.changeToList}/>
  </>:<>
  <p class="card-title">Products</p>
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
    <div className="d-flex justify-content-center">
      {this.currentPage()}
    </div>
  
  </>;
}


  render(){
    return(<>
      <div class="col-md-12 stretch-card">
          <div class="card">
            <div class="card-body">
              {this.editProduct()}
            </div>
          </div>
        </div>
      </>
    );
  }

}
