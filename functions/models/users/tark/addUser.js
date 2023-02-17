
const {addUser} = require("../tark/lib")

exports.addUser = function(request, response)
{
    console.log("user");
    let status = 200;
    addUser("Sanjay", "email@email.com").then(()=>{
        let result = "Success";
        return response.status(status).send(result);
    }).catch((error) => {
        status = 500;
        console.log("Error: ", error);
        result = { data: { status: "Error", data: "No Experiences Listed" } };
        return response.status(status).send(result);
      });
}