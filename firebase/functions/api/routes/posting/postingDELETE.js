const postings = require("../../dbMockup/posting")
const util = require("../../lib/util")
const statusCode = require("../../constants/statusCode")
const responseMessage = require("../../constants/responseMessage")

module.exports = async (req, res) => {

    const {id} = req.params;

    if(!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    };

    const existId = postings.filter(obj => obj.id === Number(id)).length > 0;

    if(!existId) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NO_ID_CONTENTS
                )
            );
    };
    
    const remainPostings = postings.filter(obj => obj.id !== Number(id));
    res.status(statusCode.OK).send(
        util(
            statusCode.OK,
            responseMessage.DELETE_CONTENTS_SUCCESS,
            remainPostings
        )
    );
}