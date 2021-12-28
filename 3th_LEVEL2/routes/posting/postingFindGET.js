const util = require("../../lib/util")
const Message = require("../../constants/responseMessage")
const S_Code = require("../../constants/statusCode")
const posting = require("../../dbMockup/posting")


module.exports = async(req, res) =>{
    const {id} = req.params;

    if (!id) {
        return res.status(S_Code.BAD_REQUEST).send(
            fail(
                S_Code.BAD_REQUEST,
                Message.NULL_VALUE,
                )
        );
    }

    const existPost = posting.filter(obj => obj.id === Number(id))[0];

    if(!existPost) {
        return res
            .status(S_Code)
            .send(
                util.fail(
                    S_Code.BAD_REQUEST,
                    Message.NO_ID_CONTENTS
                )
            );
    }

    res.status(S_Code.OK).send(
        util.success(
            S_Code.OK,
            Message.READ_CERTAIN_CONTENTS_SUCCESS,
            existPost
        )
    );
}