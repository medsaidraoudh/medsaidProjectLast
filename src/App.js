import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect } from 'react-redux';
import {firestore,auth,createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth=null;

  
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
const {setCurrentUser}=this.props;

        if (userAuth){
          console.log(userAuth);
          
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot=>{
              console.log(snapshot.data());
             setCurrentUser( {
                  id:snapshot.id,
                  ...snapshot.data()
                
              })
              
          })
          

        } 

        setCurrentUser(userAuth)

        // addCollectionsAndDocuments('collections', collectionsArray.map((
        //   {title,items}
        // )=>({title,items})))
        console.log(this.state);

      // this.setState({currentUser: user});
      // console.log(user);
      // console.log("hkejrke");
      
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signin' 
      render={()=>this.props.currentUser ? 
        (<Redirect to ='/' />)
        :
        (<SignInAndSignUpPage/>)
        }
        />
    </Switch>
 
    </div>

  );
}
}
const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser,

})
const mapDispatchToProps=dispatch=>({
 setCurrentUser: user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
