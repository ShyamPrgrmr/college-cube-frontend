import React,{Component} from 'react';
import Filters from './Filters/Filters';
import List from './List/List';

export default class ProductList extends Component{
  constructor(props){
    super(props);
  }

  state={
      filter:[
          
      ],
      selectedFilter:"All"
  }
  
  componentDidMount=()=>{
      let filter = [
        {
            name:"All",
            checked:true
        },
        {
            name:"Weekly Special",
            checked:false
        },
        {
            name:"Most Liked",
            checked:false
        },
        {
            name:"Recommended",
            checked:false
        }
      ]

      this.setState({filter})
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
                        <List filter={this.state.selectedFilter}/>
                    </div>
                </div>
            </div>
        </div>
    </>);
  }
}
