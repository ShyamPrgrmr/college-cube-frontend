import {AddToCart,GetCart,GetProducts, SetProducts} from './../type/index';

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