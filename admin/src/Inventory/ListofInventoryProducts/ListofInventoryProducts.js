import React,{Component} from 'react';


export default class AddInventoryProducts extends Component{
    constructor(props){
        super(props);       
    }

    state={
        products:[],
        currentPage:1
    };

    componentDidMount=()=>{
        let data=[
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
        this.setState({products:data});
    }
    

    getListofProducts=()=>{
        const data = this.state.products;
        let index = 0;
        let list = data.map(
            product=>{
                index++;
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td>{product.price+"/"+product.measurement}</td>
                        <td>{product.quantity+" "+product.measurement}</td>
                    </tr>
                );
            }
        );
        return list;
    }

    reload=(e)=>{
        e.preventDefault();
        let data=[
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
                name:"Gemini oil 3000 ml",
                measurement:"litre",
                quantity:300
            },
            {
                id:202,
                price:200,
                name:"Gemini oil 200 ml",
                measurement:"litre",
                quantity:300
            },
            {
                id:203,
                price:200,
                name:"Gemini oil 1500 ml",
                measurement:"litre",
                quantity:300
            }
        ];
        this.setState({products:data});
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
                <button className='btn btn-primary' disabled> 0 </button>
                <button className='btn btn-outline-secondary' disabled> {this.state.currentPage} </button>
                <button className='btn btn-primary' onClick={this.nextButtonClicked}> {this.state.currentPage+1} </button>
            </div>
        ) : (
            <div className="btn-group" role='group'>
                <button className='btn btn-primary' onClick={this.previousButtonClicked}> {this.state.currentPage-1} </button>
                <button className='btn btn-outline-secondary' disabled> {this.state.currentPage} </button>
                <button className='btn btn-primary' onClick={this.nextButtonClicked}> {this.state.currentPage+1} </button>
            </div>
        );
    }

    render(){
        return(
            <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                    <div className="card-title d-flex justify-content-between"> <p>Products in Inventory</p> <button className="btn btn-sm btn-outline-dark" onClick={this.reload}>Reload</button> </div> 
                    <div class="table-responsive">
                        <table id="recent-purchases-listing" class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getListofProducts()}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-center">
                            {this.currentPage()}                    
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

