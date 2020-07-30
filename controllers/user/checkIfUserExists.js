const { userModel } = require('../../models');

module.exports = async (req, res) => {
  try {
    const userExists = await userModel.exists({ username: req.body.username });
    return res.status(200).json({
      userExists,
    });
  } catch (err) {
    return res.status(500).json({
      err,
    });
  }
};
