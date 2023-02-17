const { functions, cors, fastify, requestHandler } = require("../application/lib");
const {addUser} = require("../../models/users/tark/addUser")


fastify.post("/addUser", (req, res) => {
    addUser(req, res);
  });

exports.users = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      fastify.ready((err) => {
        if (err) throw err;
        requestHandler(req, res);
      });
    });
  });