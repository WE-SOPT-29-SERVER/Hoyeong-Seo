const util = require("../../lib/util")
const users = require('../../dbMockup/user')
const responseMessage = require('../../constants/responseMessage')
const statusCode = require('../../constants/statusCode');

module.exports = async(req, res) =>{
    const {id} = req.params

    const existId = users.filter(obj => obj.id === Number(id))[0];

    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            fail(
                statusCode.BAD_REQUEST,
                responseMessage.NULL_VALUE,
                )
        );
    }

    if(!existId) {
        return res
            .status(statusCode)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NO_USER
                )
            )
    }

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.READ_PROFILE_SUCCESS,
            id
        )
    )
}
