exports.addUser = function(name, email) {
    const userData = db.collection("Users").doc(email).set({
        Email:email,
        Name: name,
    });
    return Promise.resolve(userData);
  };
  