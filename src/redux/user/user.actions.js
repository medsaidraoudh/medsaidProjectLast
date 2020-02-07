import userActionTypes from './userActions.types';

export const setCurrentUser=user=>({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const emailSignInStart=(payload)=>({
    type:userActionTypes.EMAIL_SIGN_IN_START,
    payload
})

export const SignInSuccess=(user)=>({
    type:userActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const SignInFailure=error=>({
    type:userActionTypes.SIGN_IN_FAILURE,
    payload:error
})

export const googleSignInStart=(emailAndPassword)=>({
    type:userActionTypes.GOOGLE_SIGN_IN_START,
    payload:emailAndPassword
})


export const signOutStart=()=>({
    type:userActionTypes.SIGN_OUT_START
})


export const signOutFailure=(payload)=>({
    type:userActionTypes.SIGN_OUT_FAILURE,
    payload
})
export const signOutSuccess=()=>({
    type:userActionTypes.SIGN_OUT_SUCCESS
})
export const checkUserSession=()=>({
    type:userActionTypes.CHECK_USER_SESSION
})

export const signUpStart=(userCredentials)=>({
    type:userActionTypes.SIGN_UP_START,
    payload:userCredentials
})

export const signUpSuccess=({user, additionalData})=>({
    type:userActionTypes.SIGN_UP_SUCCESS,
    payload : {user,additionalData}
})
 
export const signUpFailure=error=>({
    type:userActionTypes.SIGN_UP_FAILURE,
    payload:error
})