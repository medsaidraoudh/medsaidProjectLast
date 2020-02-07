import {takeLatest,call,put,all} from 'redux-saga/effects';
import ShopActionTypes from './shopes.types';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';


export function* fetchCollectionsAsync(){
    console.log("i am fired")

try{    const collectionRef=firestore.collection('collections');
    const snapshot=yield collectionRef.get();
    const collectionSMap=yield call(
        convertCollectionsSnapshotToMap,
        snapshot
    );
    yield put(fetchCollectionsSuccess(collectionSMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));

    }
//     collectionRef.get().then( snapshot=>{
//       const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
//       console.log(collectionsMap);
//         dispatch(fetchCollectionsSuccess(collectionsMap))
//     }).catch(error=> dispatch(fetchCollectionsFailure(error.message ))) 
// }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
         ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}


export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}