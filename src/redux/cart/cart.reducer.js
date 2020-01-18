import  cartActionTypes  from "./cart.types";
import { addItemNew } from "./cart.utils";
import {removeItemOld} from './cart.utils'
import  {removeOrDecreateItem} from './cart.utils'
const INITIAL_STATE={
    hidden: true,
    cartItems: []
}
const cartReducer=(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemNew(state.cartItems, action.payload)
            }
        case cartActionTypes.DECREASE_OR_REMOVE:
            return{
                ...state,
                cartItems:removeOrDecreateItem(state.cartItems,action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemOld(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default  cartReducer