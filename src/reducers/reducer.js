// We will stricly authneticate to make sure that

const features = [];

export default (state = features, action) => {
  switch (action.type) {
    case 'PLUS_ONE':
      return state.map(feature => {
        if (feature.id === action.id) {
          return {
            ...feature,
            hits: feature.hits + 1
          };
        }
        return feature;
      });
    case 'MINUS_ONE':
      return state.map(feature => {
        if (feature.id === action.id) {
          return {
            ...feature,
            hits: feature.hits - 1
          };
        }
        return feature;
      });
    case 'SET_FEATURES':
      return action.features;
    case 'REGISTER_EMAIL':
      return state;
    default:
      return state;
  }
};
