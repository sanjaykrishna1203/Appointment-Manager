const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();
const { db } = require("./models/application/lib");

const {users} = require("./models/users/users")
const { cors } = require("./models/application/lib");

exports.users = users ;
exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, ()=>{
    console.log("hi");
    res.send({data: "Hello from Firebase!"});
  })
});

exports.addUser = functions.https.onRequest((req, res) => {
  cors(req, res, ()=>{
    const email = req.body.data.Email;
    const name = req.body.data.Name;
    const promise = db.collection("Users").doc(email).set({
      Name:name,
      Email:email
    })
    Promise.resolve(promise).then(()=>{
      return res.send({data:"User Added"})
    })
  })
});

