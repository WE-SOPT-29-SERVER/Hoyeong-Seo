const postings = require("../../dbMockup/posting")
const util = require("../../lib/util")
const statusCode = require("../../constants/statusCode")
const responseMessage = require("../../constants/responseMessage")
const posting = require("../../dbMockup/posting")

module.exports = async (req, res) => {
    const {id, title, contents} = req.body;

    if (!title || !contents) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NULL_VALUE
            )
        );
    };

    existTitle = postings.filter(obj => obj.contents === contents).length > 0

    if(existTitle) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.ALREADY_EXISTING_TITLE
            )
        )
    }

    const newPost = {
        id: posting.length + 1,
        title,
        contents,
        
    }
}