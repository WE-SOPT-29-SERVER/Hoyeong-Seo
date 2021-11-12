const postings = require("../../dbMockup/posting")
const util = require("../../lib/util")
const statusCode = require("../../constants/statusCode")
const responseMessage = require("../../constants/responseMessage")


module.exports = async(req, res) =>{
    res.status(statusCode.OK)
        .send(util.success(
            statusCode.OK,
            responseMessage.READ_ALL_CONTENTS_SUCCESS,
            postings
        ))
}