import * as firebase from 'firebase';

// import manymore from '../../dist/images/manymore.jpg';
// import maps from '../../dist/images/map.png';
// import pm from '../../dist/images/pm.png';
// import profile from '../../dist/images/profile.png';
// import story from '../../dist/images/story.png';
import access from '../../dist/images/access.jpg';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDPghmj3Pq7BemJyzk0vmQmvG5NZd31WWE',
  authDomain: 'klu-sky1.firebaseapp.com',
  databaseURL: 'https://klu-sky1.firebaseio.com',
  projectId: 'klu-sky1',
  storageBucket: 'klu-sky1.appspot.com',
  messagingSenderId: '742325620049'
};

firebase.initializeApp(config);

const database = firebase.database();
// const access = '../../dist/images/access.jpg';
// const storage = firebase.storage();
// const storageRef = storage.ref();
// const imagesRef = storageRef.child('images');

// imagesRef.put(access);

// imagesRef.put(access).then(snapshot => {
//   console.log('Uploaded a blob or file!');
//   console.log(snapshot);
// });

// database.ref('features').push({
//   id: 1,
//   title: 'Only KLUians allowed in',
//   subTitle: 'Restrivted access',
//   hits: 29,
//   text: 'No NON-KLUian can get in here',
//   display: access
// });
//
// database.ref('features').push({
//   id: 2,
//   title: 'Rich Socail Profile',
//   subTitle: 'Profile',
//   hits: 11,
//   text: 'You can have a rich socail profile in here.',
//   display: profile
// });
//
// database.ref('features').push({
//   id: 3,
//   title: 'Personal Message and Live Chat Support',
//   subTitle: 'Chat',
//   hits: 33,
//   text:
//     'You will be able to send pms to other KLUians over here + Live Chat with all online users will be rolled in.',
//   display: pm
// });
//
// database.ref('features').push({
//   id: 4,
//   title: 'Post a Story',
//   subTitle: 'Story',
//   hits: 18,
//   text:
//     'You will be able to post fully interactable stories like in any other socail networking platforms.',
//   display: story
// });
//
// database.ref('features').push({
//   id: 5,
//   title: 'Search for KLUians nearby via maps',
//   subTitle: 'Maps',
//   hits: 31,
//   text:
//     'You will be able to search for kluians nearby. You can have access to KLUian Directory',
//   display: maps
// });
//
// database.ref('features').push({
//   id: 6,
//   title: 'Many more...',
//   subTitle: '...',
//   hits: 10,
//   text:
//     'You can ask Seniors/Working class guys for carrier guidelines - You can post something of your personal interest - You can seek/provide jobs - You can use this portal even for matrimony adv.',
//   display: manymore
// });

export { firebase, database as default };
