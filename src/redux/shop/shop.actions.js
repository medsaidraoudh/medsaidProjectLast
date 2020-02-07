import ShopActionTypes from "./shopes.types"
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils"


export const fetchCollctionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})


export const fetchCollectionsSuccess=collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFailure=error=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error
})
export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections')
        dispatch(fetchCollctionStart()) 
        collectionRef.get().then( snapshot=>{
          const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
          console.log(collectionsMap);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error=> dispatch(fetchCollectionsFailure(error.message ))) 
    }
}
