import database from '../firebase/firebase';

let found = false;

export const RegisterUser = email => ({
  type: 'REGISTER_EMAIL',
  email
});

export const startRegisterEmail = email => dispatch =>
  database
    .ref('RegisteredUsers')
    .once('value')
    .then(snapshot => {
      snapshot.forEach(childSnapShot => {
        //  console.log(childSnapShot.val().email);
        if (childSnapShot.val().email === email.toLowerCase()) {
          found = true;
        }
        // found = false;
      });

      if (!found) {
        database.ref('RegisteredUsers').push({
          email,
          date: Date.now()
        });
      }
      dispatch(RegisterUser(email, found));
      found = false;
    });

// export const plusOne = (id = 1) => ({
//   type: 'PLUS_ONE',
//   id
// });

let child;

export const doPlusOne = child2 => ({
  type: 'PLUS_ONE',
  id: child2.id
});

export const startPlusOne = (id = 555) => dispatch =>
  database
    .ref('features')
    .once('value')
    .then(snapshot => {
      snapshot.forEach(childSnapShot => {
        if (childSnapShot.val().id === id) {
          child = childSnapShot.val();
          const newFeature = {
            avatar: child.avatar,
            display: child.display,
            hits: child.hits + 1,
            id: child.id,
            subTitle: child.subTitle,
            text: child.text,
            title: child.title
          };
          database.ref(`features/${childSnapShot.key}`).update(newFeature);
        }
      });
      if (child) {
        dispatch(doPlusOne(child));
      }
    });

export const doMinusOne = child2 => ({
  type: 'MINUS_ONE',
  id: child2.id
});

export const startMinusOne = (id = 1) => dispatch =>
  database
    .ref('features')
    .once('value')
    .then(snapshot => {
      snapshot.forEach(childSnapShot => {
        if (childSnapShot.val().id === id) {
          child = childSnapShot.val();
          const newFeature = {
            avatar: child.avatar,
            display: child.display,
            hits: child.hits - 1,
            id: child.id,
            subTitle: child.subTitle,
            text: child.text,
            title: child.title
          };
          database.ref(`features/${childSnapShot.key}`).update(newFeature);
        }
      });
      dispatch(doMinusOne(child));
    });

export const setFeatures = features => ({
  type: 'SET_FEATURES',
  features
});

export const startSetFeatures = () => dispatch =>
  database
    .ref('features')
    .once('value')
    .then(snapshot => {
      const features = [];
      snapshot.forEach(childSnapShot => {
        features.push({
          id: childSnapShot.key,
          ...childSnapShot.val()
        });
      });
      dispatch(setFeatures(features));
    });
