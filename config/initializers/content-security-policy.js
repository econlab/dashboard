module.exports = function(environment) {
  return {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
    'font-src': [
      "'self'",
      "https://fonts.gstatic.com",
      "data:"
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com"
    ]
  };
};
