import {AddToCart,GetCart} from './../type/index'

const initialState = {
    cart:[],
    products:[
        {
            id:1,
            name:"Gemini Oil 500 gram",
            imgsrc:"",
            measurement:"Gram",
            price:"200",
            description:"Oil",
            category:"Oil",
          }
    ]
};

function rootReducer(state = initialState, action) {
    
    if(action.type===AddToCart){
        
        let cart = state.cart;
        let p = action.payload;

        let data = cart.map(product=>{
            if(product.id == p.id){
                return p;
            }
            else{
                return product;
            }
        });


        return Object.assign({},state, {
            cart: data
          });
    }

    if(action.type === GetCart){
       return state.cart;
    }
    
    return state;
};

export default rootReducer; 