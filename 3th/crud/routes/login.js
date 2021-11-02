const router = require("../../../crud/routes");
const express = require('express');
const router = express.Router();
const util = require("../lib/util")
const users = require('../dbMockup/user')
const responseMessage = require('../constants/responseMessage')
const statusCode = require('../constants/statusCode')

router.post("/signup", (req, res) =>{  
});

router.post("/login", async(req, res) => {
  const {email, password} = req.body;


  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(
        util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
      );
  }

  const user = users.filter(user =>user.email ===email)[0];
  
  if(!user) {
    return res
        .status(statusCode.BAD_REQUEST)
        .send(
          util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.ALREADY_EMAIL
          )
        )
  }
  
  if (user.password !== password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(
        util.fail(
          statusCode.BAD_REQUEST,
          responseMessage.MISS_MATCH_PW
        ),
      );
  }

  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    }),
  );

  
  TRANSACTION

  // 유저 검색 히스토리 저장
  // search?keyword=principle

  // 1. 검색 결과 반환
  // res.status().send()

  // 2. 검색 히스토리 저장
    
});