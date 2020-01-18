 import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const Header=({currentUser,hidden, dispatch})=>(
    <div className='header'>
        <Link  className='logo-container' to="/">
    <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to ='/shop'>
                SHOP
            </Link>
            <Link className='option' to ='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
 :(
     <Link className='option' to='/signin'>
         SIGN IN
     </Link>
 )                
            }
            <CartIcon />
        </div>
        {!hidden ?         <CartDropdown onBlur={()=> dispatch(toggleCartHidden())} />
: null }
    </div>
     
)

const mapStateToProps=(state)=> createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);