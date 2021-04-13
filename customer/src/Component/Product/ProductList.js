import React,{Component} from 'react';
import List from './List/List';
import {connect} from 'react-redux';
import { setproducts } from '../../redux/action';

function mapDispatchToProps(dispatch) {
    return {
      setProducts : products => dispatch(setproducts(products))
    };
}

function mapStateToProps(state){
    return {state:state};
}

class ListView extends Component{
  constructor(props){
    super(props);
  }

  state={
      products:[],
      page:1,
  }
  

  loadProductList=()=>{

    fetch(this.props.state.server+"shop/getproductbyfilter?filter="+this.props.filter+"&page="+this.state.page,{
        headers:{
            "content-type":"Application/json",
            "accept":"Application/json"
        },
        method:"GET"
    }).then(data=>{ 
        if(data.status===200){
            return data.json();
        }
    }).then(data=>{
        this.setState({products:data.products});
    }).catch(e=>{alert(e)});
  
}

  componentDidMount=()=>{
      this.loadProductList();
  }

  fetchNewPage=(page)=>{
      let filter = this.state.selectedFilter;
      fetch(this.props.state.server+"shop/getproductbyfilter?filter="+this.state.selectedFilter+"&page="+page,{
        headers:{
            "content-type":"Application/json",
            "accept":"Application/json"
        },
        method:"GET"
        }).then(data=>{ 
            if(data.status===200){
                return data.json();
            }
        }).then(data=>{
            this.setState({products:data.products}); 
        }).catch(e=>{alert(e)});
  }

 

  loadPagination=()=>{
    let page = this.state.page;
    let pagination = [];
    for(let i=page;i<=(page+3);i++){
      pagination.push(i);
    }

    let data = pagination.map(
      p =>{
        if(p===page){
          return(
            <li class="is-active">
              <a>{p}</a>
            </li>)
        }
        
          return(
            <li>
              <a value={p} onClick={this.changePage}>{p}</a>
            </li>
          );
        });
      return data;    
    }
  
  changePage=(e)=>{
    e.preventDefault();
    this.setState({page:parseInt(e.target.text)});
    this.fetchNewPage(parseInt(e.target.text));
  }
  previousPage=(e)=>{
    e.preventDefault();
    
    if(this.state.page-1!==0){
      let page = parseInt(this.state.page)-1;
      this.setState({page});
      this.fetchNewPage(page);
    }
     
  }


  render(){
    return(<>
        <div class="section__content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <List products={this.state.products}/>
                    </div>
                    
                    <div class="col-lg-12">
                        <div class="u-s-p-y-60">
                            <ul class="shop-p__pagination" >
                            
                                <li>
                                    <a className="fas fa-angle-left" onClick={this.previousPage}></a>
                                </li>
                                {this.loadPagination()}
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>);
  }
}


const ProductList = connect(mapStateToProps,
    mapDispatchToProps)(ListView);
export default ProductList;