const express = require("express");
const router = express.Router();
const util = require("../lib/util")
const responseMessage = require("../constants/responseMessage")
const statusCode = require("../constants/statusCode")

const users = require("./../dbMockup/user")
//xxxx/user/signup
router.post('/signup', (req, res) => { 
  
  // email이랑 password를 body에 담아 보내주자
  // const email = req.body.email;
  // const name = req.body.name;
  // const password = req.body.password;

  // destructuring assignment
  // 비구조화 할당
  const {email, name, password} = req.body;


  // request body가 잘못됐을 때,
  if (!email || !name ||!password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(
        util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
      );
  }
  // 해당 email을 가진 유저가 이미 있을 때,  
  const alreadyUser = users.filter(obj => obj.email === email).length > 0;
  if (alreadyUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(
        util.fail(
          statusCode.BAD_REQUEST, 
          responseMessage.ALREADY_EMAIL,
        ),
      );
  }
  const newUser = {
    id: users.length + 1, // id번호를 dbMockup파일에 있는 유저의 수 +1로 설정
    name, 
    password, 
    email
  };

  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.CREATED_USER, newUser),
  );
});



module.exports = router

router.post("/login", async (req, res) =>{
  
  //request에서 body가져오기
  const {email, password, name} = req.body

  if (!email || !password || !name) {
    return res.status(statusCode.NULL_VALUE,)
  }

});