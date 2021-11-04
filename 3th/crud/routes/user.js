const express = require('express');
const router = express.Router();
const util = require("../lib/util")
const users = require('../dbMockup/user')
const responseMessage = require('../constants/responseMessage')
const statusCode = require('../constants/statusCode');
const users = require('../dbMockup/user');


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

router.post('/login', async(req,res) =>{
    // body가져오기
    const {email, password} = req.body;

    // 없다면 NULL Value 반환
    if (!email || !password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NULL_VALUE
                    ),
            );
    };

    // 존재하는 유저인지?
    const alreadyUser = users.filter(obj => obj.email === email)[0];
    if (!alreadyUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NO_USER
                    )
            );
    }
    // 비밀번호는 맞는지?
    if (alreadyUser.password !== password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.MISS_MATCH_PW,
                    )
            )
    }
    // 맞다면 success 반환
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.LOGIN_SUCCESS,
            data
        )
    )

});

router.get('/:id', (req,res) => {})
router.put('/:id', (req,res) => {})
router.delete('/:id', (req,res) => {})

module.exports = router;