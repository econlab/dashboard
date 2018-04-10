module.exports = function(environment) {
  return {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `econlab-${environment}.firebaseapp.com`,
    databaseURL: `https://econlab-${environment}.firebaseio.com`,
    storageBucket: `econlab-${environment}.appspot.com`,
  };
};
