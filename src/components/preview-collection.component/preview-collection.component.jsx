import React from 'react';
import { withRouter } from 'react-router-dom';

import './preview-collection.styles.scss';
import CollectionItem from '../collection-item.component/collection-item.component';
const CollectionPreview=({match,items,title,routeName,history})=>{
        
    return(
        <div className='collection-preview'>
            <h1 className='title' onClick={()=> history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=>idx<4)
                    .map((item)=>{
                        return(
                            <CollectionItem key={item.id} item={item} />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default withRouter(CollectionPreview);