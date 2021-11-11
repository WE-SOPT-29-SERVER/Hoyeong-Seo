const util = require("../../lib/util");
const users = require('../../dbMockup/user');
const responseMessage = require('../../constants/responseMessage');
const statusCode = require('../../constants/statusCode');

module.exports = async(req, res) =>{
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
            alreadyUser
        )
    )
}
