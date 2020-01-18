import React, { Component } from 'react'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item.component/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'


const CollectionPage=({collection,match})=>{
    
 
        
        console.log(match.params.collectionId)
        console.log(collection.items);
        const {title,items}=collection;

        
        return (
            <div className='collection-page'>
                <h2 className='title'>{title}</h2>
                <div className='items'>
                    {items.map(item=>(
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    
}

const mapStateToProps = (state,ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps)(CollectionPage)