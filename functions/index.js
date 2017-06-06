const functions = require('firebase-functions');
const admin = require('firebase-admin');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');

// set up Service Client
// Service Client will overide all database or user rules

admin.initializeApp({ // this could be found in project settings > service accounts
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://messenger-1a6ff.firebaseio.com"
});

// create new user
exports.createUser = functions.https.onRequest(createUser);