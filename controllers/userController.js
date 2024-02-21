const User = require("../models/users");

exports.getUser = async (req, res) => {
  let users = await User.find({});
  res.json({ count: users.length, users });
};

exports.postUser = async (req, res) => {
  try {
    let userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      res.json({ message: "Email already exist, choose another!" });
    } else {
      let newUser = await User.create(req.body);
      res.json(newUser);
    }
  } catch (error) {
    res.json({ error });
  }
};

exports.putUser = async (req, res) => {
  // console.log(req);
  try {
    var id = req.params.id;
    var { name, password } = req.body;
    let user = await User.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        password: password,
      }
    );
    res.json(user);
  } catch (error) {
    res.json({ error });
  }
};
