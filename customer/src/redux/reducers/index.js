import {AddToCart,ClearCart,GetCart, RemoveFromCart, setLogin, setLogout, SetProducts, UpdateCart} from './../type/index'

const initialState = {
    cart:[],
    products:[
        {
            id:123,
            name:"gemini oil",
            measurement:"Kg",
            category:"Oil",
            description:"A Description",
            imgsrc:"",
            images:[],
            manufacturer:"Gemini",
            price:10,

        },
        
    ],
    isLoggedIn:false,
    username:"User",
    token:"",
    address:"",
    mobile:"",
    fname:"",
    lname:"",
    server:"http://localhost:8080/",
    email:""
};

function rootReducer(state = initialState, action) {
    
    if(action.type===AddToCart){
        
        let cart = state.cart;
        let p = action.payload;

        let data = cart.filter(product=>{
            if(product.id == p.id){
                return false;
            }
            else{
                return true;
            }
        });

        data.push(p);

        return Object.assign({},state, {
            cart: data
          });
    }

    if(action.type === ClearCart ){
        return Object.assign({},state,{cart:[]});
    }

    if(action.type === UpdateCart){
        return Object.assign({},state,{cart:action.payload});
    }

    if(action.type === RemoveFromCart){
        let id = action.payload;
        
        let data = state.cart.filter(cartite=>{
            if(cartite.id === id) return false;
            else return true;
        });

        return Object.assign({},state,{cart:data});
    }

    if(action.type === SetProducts){
        return Object.assign({},state,{
            products:action.payload
        });
    }

    if(action.type === GetCart){
       return state.cart;
    }

    if(action.type===setLogin){
        return Object.assign({},state,{
            isLoggedIn:true,
            username:action.payload.username,
            token:action.payload.token,
            fname:action.payload.fname,
            lname:action.payload.lname,
            address:action.payload.address,
            mobile:action.payload.mobile,
            email:action.payload.email
        });
    }
    
    
    if(action.type===setLogout){
        return Object.assign({},state,{isLoggedIn:false,username:"Not Login",token:""});
    }

    return state;
};

export default rootReducer; 