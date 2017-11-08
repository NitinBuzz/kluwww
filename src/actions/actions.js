import database from '../firebase/firebase';

export const plusOne = (id = 1) => ({
  type: 'PLUS_ONE',
  id
});

export const minusOne = (id = 1) => ({
  type: 'MINUS_ONE',
  id
});

export const setFeatures = features => ({
  type: 'SET_FEATURES',
  features
});

export const startSetFeatures = () => {
  return dispatch => {
    return database
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
  };
};
