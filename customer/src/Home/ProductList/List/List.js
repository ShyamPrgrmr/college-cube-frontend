import React,{Component} from 'react';
import Item from './Item/Item';

export default class List extends Component{
  constructor(props){
    super(props);
  }

  state={
    products:[
      
    ],
    filter:"",
    page:1
  }

  fetchProduct=()=>{
    let filter = this.state.filter;
    let page = this.state.page;
    
  }

  componentDidMount=()=>{
    this.setState({filter:this.props.filter})
  }

  componentDidUpdate=()=>{
    if(this.state.filter !== this.props.filter){
      this.setState({filter:this.props.filter})
    }
  }

  loadListOfProducts=()=>{
    let data = this.state.products.map(product=>{
      return <Item key={product.id} {...product}/>
    });
    return data;
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
  }
  previousPage=(e)=>{
    e.preventDefault();
    if(this.state.page-1!==0)
     this.setState({page:this.state.page-1});
  }

  render(){
    return(<>

        <div class="filter__grid-wrapper u-s-m-t-30">
            <div class="row">
              {this.loadListOfProducts()}
            </div>
            <div class="u-s-p-y-60">
              <ul class="shop-p__pagination">
              
                  <li>
                    <a className="fas fa-angle-left" onClick={this.previousPage}></a>
                  </li>
                  {this.loadPagination()}
              </ul>
            </div>
        </div>
    
    </>);
  }
}
