const postings = require("../../dbMockup/posting")
const util = require("../../lib/util")
const statusCode = require("../../constants/statusCode")
const responseMessage = require("../../constants/responseMessage")

module.exports = async (req, res) => {
    const {title, contents} = req.body;
    const {id} = req.params;

    if (!title || !contents) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NULL_VALUE
            )
        );
    };

    const existTitle = postings.filter(obj => obj.contents === contents).length > 0;

    if(existTitle) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.ALREADY_EXISTING_TITLE
            )
        );
    };

    const newPost = {
        id: postings.length + 1,
        title,
        contents
    };
    postings.push(newPost);
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.CREATED_CONTENTS
        )
    );
}