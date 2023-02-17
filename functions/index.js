const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();

const {users} = require("./models/users/users")
const { cors, fastify, requestHandler } = require("./models/application/lib");



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

exports.users = users
exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, ()=>{
    console.log("hi");
    res.send({data: "Hello from Firebase!"});
  })
});

