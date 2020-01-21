import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const  firebaseConfig = {
    apiKey: "AIzaSyDP2FcWzH8CYNTu-Y6T_tUsKP-_-Yhc83w",
    authDomain: "crwnreact-db.firebaseapp.com",
    databaseURL: "https://crwnreact-db.firebaseio.com",
    projectId: "crwnreact-db",
    storageBucket: "crwnreact-db.appspot.com",
    messagingSenderId: "658052823579",
    appId: "1:658052823579:web:b549aab984fece1a6016be",
    measurementId: "G-RCE5DHTJKB"
  };


  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();



  
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export const createUserProfileDocument=async(userAuth, additionalData)=>{
    if(!userAuth) return;
    
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName, email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
      }catch(error){
        console.log('"error createing user ', error.message)
      }
    }
    console.log(snapShot);
    return userRef; 
    
    
  }

  export const addCollectionsAndDocuments=async (collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    console.log("hahahah",collectionRef);
    
    const batch=firestore.batch();

    objectsToAdd.forEach(element => {
      const newDocRef=collectionRef.doc();

      batch.set(newDocRef, element)

    });
   return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection=collections.docs.map(doc=>{
      const { title,items}=doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator;
    },{})
    //console.log(transformedCollection);
    
  }
  export default firebase;
