import React from 'react';
import '../menu-item/menu-item';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss'
import {createStructuredSelector} from 'reselect';
import { selectDirectorySectinos} from '../../redux/directory/direcory.selectors'
import {connect} from 'react-redux'

const  DirectoryItem =({sections})=>(
  

  
            <div className='directory-menu'>
            {
            sections.map(({id, ...otherSecionProps}) =>
                    (
                        <MenuItem key={id}
                         {...otherSecionProps}
                        />
                    )
                )
            }
            </div>
        )

const mapToStateProps=createStructuredSelector({
  sections: selectDirectorySectinos
})
export default connect(mapToStateProps)(DirectoryItem);