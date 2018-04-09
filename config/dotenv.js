module.exports = function(env) {
  return {
    clientAllowedKeys: ['FIREBASE_API_KEY', 'FIREBASE_HOST'],
    path: `./config/.env-${env}`
  };
};
