const User = require("../models/usermodel");
// const crypto = require("crypto");
const bcrypt = require("bcrypt");

const UserService = () => {
  const SignUserUp = async (req, res) => {
    try {
      let newUser = new User();
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.emailAddress = req.body.emailAddress;
      newUser.phoneNumber = req.body.phoneNumber;
      newUser.type = req.body.type;

      const saltRound = 10;
      const hash = await bcrypt.hash(req.body.password, saltRound);

      //Second Option on how to hide your password
      // const genSalt = bcrypt.genSalt(saltRound);
      // const hash2 = bcrypt.hash(req.body.password, genSalt);

      //Third option on how to hide your password
      // const randomKey = crypto.randomBytes(64).toString("hex");
      // const hash3 = crypto
      //   .scrypt(req.body.password, randomKey, 64)
      //   .toString("hex");

      console.log(hash);
      newUser.password = hash;
      // res.send("password hashed");

      newUser.save().then((data) => {
        res.send("User saved successfully");
      });
    } catch (err) {
      console.log(err);
      res.send("There is an error with your request");
    }
  };

  const SignUserIn = async (req, res) => {
    try {
      const userData = await User.findOne({
        emailAddress: req.body.emailAddress,
      });
      if (userData) {
        console.log(userData.password);
        let isPasswordCorrect = bcrypt.compareSync(
          req.body.password,
          userData.password
        );
        console.log(isPasswordCorrect);
        if (isPasswordCorrect) {
          res.json({
            message: "Welcome Home",
            data: userData,
          });
        } else {
          res.send("You are not one of us");
        }
      } else {
        res.send("You are not one of us.");
      }
    } catch (err) {
      res.send("An error has occured");
    }
  };

  return { SignUserUp, SignUserIn };
};

module.exports = UserService;
