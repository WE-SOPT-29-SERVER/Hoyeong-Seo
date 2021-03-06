const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

module.exports = async (req, res) => {

  const {userId} = req.params

  
  // 필요한 값이 없을 때 보내주는 response
  if (!userId) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  
  let client;
  
  try {
    client = await db.connect(req);

    const user = await userDB.getUserById(client, userId)

    if(!user) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER))
    const deleteUser = await userDB.deleteUser(client, userId);
    
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.DELETE_ONE_USER_SUCCESS, deleteUser));
    
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    
  } finally {
    client.release();
  }
};