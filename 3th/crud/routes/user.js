const express = require('express');
const router = express.Router();
const util = require("../lib/util")
const users = require('../dbMockup/user')
const responseMessage = require('../constants/responseMessage')
const statusCode = require('../constants/statusCode');
const user = require('../dbMockup/user');


//   /user/signup
router.post('/signup', (req,res) =>{

  // email, password

//  const email = req.body.email;
//  const name = req.body.name;
//  const password = req.body.password;

  // destructuring assignment
  // 비구조화 할당
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
});
// query: /user?age=30
// param: /user/4

//router.post('/login', (req,res) =>{})
//router.post('/', (req,res) =>{})

router.get('/:id', (req,res) => {})
router.put('/:id', (req,res) => {})
router.delete('/:id', (req,res) => {})

module.exports = router;