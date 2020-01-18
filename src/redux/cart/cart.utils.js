export const addItemNew=(exsitingItems,newItemToAdd)=>{
    const isExist=exsitingItems.find(item=> newItemToAdd.id==item.id)
    if(isExist){
        return exsitingItems.map(item=>
           item.id==newItemToAdd.id ?
                {...item, quantity : item.quantity+1}
                :item
        )
    }
    return [...exsitingItems,{...newItemToAdd , quantity : 1}]
}



export const removeItemOld=(existingItems,ItemToRemove)=>{
    return existingItems.filter(cartItem=>
    cartItem.id!=ItemToRemove.id    
    )
}


export const removeOrDecreateItem=(existingItems,ItemToDecreaseOrRemove)=>{
    const existingCartItem=existingItems.find(item=> ItemToDecreaseOrRemove.id==item.id)

    if(existingCartItem.quantity==1)
    return existingItems.filter(cartItem=>
        cartItem.id!=ItemToDecreaseOrRemove.id    
        )

    return existingItems.map(item=>{

        if(item.id==ItemToDecreaseOrRemove.id) {
             return {...item, quantity : item.quantity-1}
        }else return item
        }
    )


}

