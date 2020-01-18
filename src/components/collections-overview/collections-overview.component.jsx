import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import  CollectionPreview  from '../preview-collection.component/preview-collection.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss'

const CollectionsOverview=({collections})=>{
    console.log("this is the collection ",collections)
    return(
    <div className="collections-overview">
  {
                     collections.map(({id,...otherCollectionProps})=>(
                          <CollectionPreview key={id}
                          {...otherCollectionProps} /> 
                     ))
                 }
    </div>
)
}
const mapStateToProps =createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)