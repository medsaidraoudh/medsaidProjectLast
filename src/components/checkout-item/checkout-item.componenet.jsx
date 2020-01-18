import React from 'react';
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {removeItem} from '../../redux/cart/cart.actions'
import {removeOrDecreseItem} from '../../redux/cart/cart.actions'
import {addItem} from '../../redux/cart/cart.actions'

const CheckoutItem=({cartItem,clearItem,removeOrDecreaseQuantityItem,addItemQuantity})=>{
    
    const  {name,imageUrl,price,quantity}=cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
        <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeOrDecreaseQuantityItem(cartItem)}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick={()=>addItemQuantity(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=>
        clearItem(cartItem)
        }>&#10005;</div>
    </div>
)
    }

const mapDispatchToProps=dispatch=>({
    clearItem: item=>dispatch(removeItem(item)),
    removeOrDecreaseQuantityItem: item=>dispatch(removeOrDecreseItem(item)),
    addItemQuantity:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)