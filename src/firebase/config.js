import firebase  from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqxT2PpHgPpF1ipmy9ggj-Ed1k91UfS0c",
    authDomain: "olx-react-b463f.firebaseapp.com",
    projectId: "olx-react-b463f",
    storageBucket: "olx-react-b463f.appspot.com",
    messagingSenderId: "983643934533",
    appId: "1:983643934533:web:61871505bce76e4fd2b82c",
    measurementId: "G-E391N6PV2B"
  };

  export default firebase.initializeApp(firebaseConfig);

