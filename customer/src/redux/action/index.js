import {AddToCart,ClearCart,GetCart,GetProducts, RemoveFromCart, SetProducts, UpdateCart} from './../type/index';

export function addToCart(payload){
    return { type: AddToCart , payload };
}

export function getcart(payload){
    return {type:GetCart,payload};
}

export function getProducts(payload){
    return { type: GetProducts , payload };
}

export function setproducts(payload){
    return { type:SetProducts,payload }
}

export function removeFromCart(payload){
    return { type:RemoveFromCart,payload }
}

export function clearCart(){
    return { type:ClearCart }
}

export function updateCart(payload){
    return { type:UpdateCart,payload }
}