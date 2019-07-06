import firebase from 'firebase/app';

import fbconfig from '../fbconfig.json';

const initFirebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbconfig.firebaseConfig);
  }
};

export default initFirebaseApp;
