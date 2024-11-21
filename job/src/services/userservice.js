const User = require("../models/usermodel");

const UserService = () => {
  const SignUserUp = (req, res) => {
    try {
      let newUser = new User();
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.emailAddress = req.body.emailAddress;
      newUser.phoneNumber = req.body.phoneNumber;
      newUser.type = req.body.type;
      newUser.password = req.body.password;

      newUser
        .save()
        .then((data) => {
          res.send("User saved successfully");
        })
        .catch((err) => {
          console.log(err);
          res.send("An error occured");
        });
    } catch (err) {
      console.log(err);
      res.send("There is an error with your request");
    }
  };

  return { SignUserUp };
};

module.exports = UserService;
