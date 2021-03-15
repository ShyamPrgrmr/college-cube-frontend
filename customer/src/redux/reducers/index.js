import {AddToCart,GetCart, SetProducts} from './../type/index'

const initialState = {
    cart:[
    ],
    products:[]
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