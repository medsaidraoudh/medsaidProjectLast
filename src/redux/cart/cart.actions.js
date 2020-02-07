import cartActionTypes from './cart.types'
export const toggleCartHidden=()=>({
    type: cartActionTypes.TOGGLE_CART_HIDDEN  
})

export const addItem=(item)=>({
    type : cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem=(item)=>({
    type : cartActionTypes.REMOVE_ITEM,
    payload: item
})


export const removeOrDecreseItem=(item)=>({
    type: cartActionTypes.DECREASE_OR_REMOVE,
    payload: item
})

export const clearCart=()=>({
    type:cartActionTypes.CLEAR_CART
})