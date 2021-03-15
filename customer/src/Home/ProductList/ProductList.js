import React,{Component} from 'react';
import Filters from './Filters/Filters';
import List from './List/List';
import {connect} from 'react-redux';
import { setproducts } from '../../redux/action';

function mapDispatchToProps(dispatch) {
    return {
      setProducts : products => dispatch(setproducts(products))
    };
}

class ListView extends Component{
  constructor(props){
    super(props);
  }

  state={
      filter:[],
      selectedFilter:"All",
      products:[],
      page:1
  }
  
  getAllFilters = () =>{
      return [
        {
            name:"All",
            checked:true
        },
        {
            name:"Dal",
            checked:false
        },
        {
            name:"Oil",
            checked:false
        },
        {
            name:"Personal Care",
            checked:false
        },
        {
            name:"Grains",
            checked:false
        },
        {
            name:"Snack",
            checked:false
        },
        {
            name:"Dairy",
            checked:false
        },
        {
            name:"Vegetable",
            checked:false
        }

      ]
  }


  componentDidMount=()=>{
      this.setState({filter:this.getAllFilters()})
  }


  loadFilterList= () =>{
      let data = this.state.filter.map(
          fil =>{
              return <Filters data={fil} filterChanged={this.filterChanged}></Filters>
          }
      );
      
      return data;
  }

  filterChanged=(item)=>{
    let selected = "";
    let data = this.state.filter.map(
        fil =>{
            if(fil.name === item){
                fil.checked = true;
                selected = fil.name;
                return fil;
            }
            else{
                fil.checked = false;
                return fil;
            }
        }
    );
    
    this.setState({filter:data,selectedFilter:selected});
    this.fetchNew();
  }

  fetchNewPage=(page)=>{
    let filter = this.state.filter;
    let products=[];

    //api fetch;
    
    this.props.setProducts(products);
  }

  fetchNew=()=>{
    let filter = this.state.filter;
    let products=[];

    //api fetch;

    this.props.setProducts(products);
  }

  render(){
    return(<>
        <div class="section__content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="filter-category-container">
                            {this.loadFilterList()}
                        </div>
                        <List fetchNewPage={this.fetchNewPage} filter={this.state.selectedFilter}/>
                    </div>
                </div>
            </div>
        </div>
    </>);
  }
}


const ProductList = connect(null,
    mapDispatchToProps)(ListView);
export default ProductList;