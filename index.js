import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// import our credentials (serviceAccount)
import serviceAccount from './serviceAccount.js';

// connect to our firebase project using those credentials
initializeApp({
  credential: cert(serviceAccount)
});

// connect to firestore database
const db = getFirestore();

// define a new video game:
const newSong = {
  title: 'Moscow Mule',
  artist: 'Bad Bunny',
  genre: 'Reggaeton',
  released: 2022,
}

// create a doc inside a collection
db.collection('songs').add(newSong)
  // if ok, console log the doc id
  .then(doc => console.log('Song created: ', doc.id))
  // if not, console the error
  .catch(console.error)
  // .catch(err => console.error(err))