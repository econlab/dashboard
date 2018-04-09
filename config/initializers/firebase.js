module.exports = function(/* environment */) {
  return {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `econlab-${process.env.FIREBASE_HOST}.firebaseapp.com`,
    databaseURL: `https://econlab-${process.env.FIREBASE_HOST}.firebaseio.com`,
    storageBucket: `econlab-${process.env.FIREBASE_HOST}.appspot.com`,
  };
};
