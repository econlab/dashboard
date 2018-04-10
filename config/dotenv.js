module.exports = function(env) {
  return {
    clientAllowedKeys: ['FIREBASE_API_KEY'],
    path: `./config/.env-${env}`
  };
};
