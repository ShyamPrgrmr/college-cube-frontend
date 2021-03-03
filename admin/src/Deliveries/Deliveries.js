import React,{Component} from 'react';
import Cookies from 'universal-cookie';

export default class Deliveries extends Component{
    constructor(props) {
        super(props);
    }

    state={
        deliveries:[],
        server:"http://localhost:8080/"
    };

    componentDidMount=()=>{
        let coockie = new Cookies();
        const token = coockie.get('token');

        fetch(this.state.server+"admin/order/getacceptedorder",{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        }).then(
            data=>{
                return data.json();
            }
        ).then(res=>{
            if(!res) {alert("Error"); return;}
            else{
                this.setState({deliveries : res});
            }
        }).catch(err=>{
            console.error(err);
        });
    }

    state={}

    render(){
        return(
            <>

            </>
        );
    }
} 