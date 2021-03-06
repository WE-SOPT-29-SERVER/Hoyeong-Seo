const statusCode = require("../../constants/statusCode");

const users = require("./../../dbMockup/user")

module.exports = async (req, res) => {
  const { email, name, password} = req.body;

  // 만약 비어 있다면 ?
  if(!email || !name || !password) {
    return res
        .status(statusCode.BAD_REQUEST)
        .send(
          util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
  }

  const alreadyUser = users.filter(obj => obj.email === email).length > 0;
  if (alreadyUser) {
    return res
        .status(statusCode.BAD_REQUEST)
        .send(
          util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.ALREADY_EMAIL
          )
        )
  }
  

  const user = users.filter(user => user.email ===email)[0];


  const newUser = {
    id: users.length + 1,
    name,
    password,
    email,
  };
  
  res.status(200).send(newUser);
}