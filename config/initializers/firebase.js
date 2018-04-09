module.exports = function(environment) {
  const env = (environment === 'production') ? 'prod' : 'dev';
  return {
    apiKey: 'AIzaSyCum5dPtUnxFEQB86o2cj9zsC2m2NpwofQ',
    authDomain: `econlab-${env}.firebaseapp.com`,
    databaseURL: `https://econlab-${env}.firebaseio.com`,
    storageBucket: `econlab-${env}.appspot.com`,
  };
};
