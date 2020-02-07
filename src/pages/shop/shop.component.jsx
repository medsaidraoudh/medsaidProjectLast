import React from 'react';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { createStructuredSelector } from 'reselect';
import CollectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollctionStart } from '../../redux/shop/shop.actions';

class  ShopPage extends React.Component{


  
unsubscribeFromSnapshot=null;
componentDidMount() {
  const {fetchCollctionStart}=this.props
  fetchCollctionStart();

}


  render(){
  const {match}=this.props;
  
  return(

             <div className='shop-page'>
               <Route exact path={`${match.path}`}
                component={CollectionsOverViewContainer}
                />
  <Route path={`${match.path}/:collectionId`}  
 
  component={CollectionPageContainer}
  />
             </div>
         )}
  }


  const mapStateToProps = createStructuredSelector({
  })
  
  const mapDispatchToProps =(dispatch)=>( {

    fetchCollctionStart:()=>dispatch(fetchCollctionStart())
  })
  
 export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

 