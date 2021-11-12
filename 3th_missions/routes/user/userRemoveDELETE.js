const util = require("../../lib/util")
const users = require('../../dbMockup/user')
const responseMessage = require('../../constants/responseMessage')
const statusCode = require('../../constants/statusCode');

module.exports = async(req, res) => {
    const {id} = req.params;

    if(!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }
    const existUser = users.filter(obj => obj.id === Number(id))[0];
    
    if (!existUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NO_USER
                    )
            );
    }
    const remainUsers = users.filter(obj => obj.id !== Number(id));
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            remainUsers,
        )
    )
}