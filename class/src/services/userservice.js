const User = require("../models/usermodel");

const UserService = () => {
  const input = async (req, res) => {
    try {
      let newUser = new User();
      newUser.name = req.body.name;
      newUser.emailAddress = req.body.emailAddress;
      newUser.dateOfBirth = req.body.dateOfBirth;
      newUser.Address = req.body.Address;
      newUser.Bio = req.body.Bio;

      newUser.save().then((data) => {
        res.send("User saved successfully");
        console.log(data);
      });
    } catch (err) {
      console.log(err);
      res.send("There is an error with your request");
    }
  };
  return { input };
};

module.exports = UserService;
