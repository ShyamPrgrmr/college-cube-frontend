import {AddToCart,ClearCart,GetCart, RemoveFromCart, SetProducts, UpdateCart} from './../type/index'

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

        }
    ],
    isLoggedIn:false,
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

    
    return state;
};

export default rootReducer; 