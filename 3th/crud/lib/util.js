const util = {
  success: (status, message, data) => {
      return {
          status,
          success: true,
          message,
          data,
      };
  },
  fail: (status, message) => {
      return {
          status,
          success: false,
          message,
      };
  },
};

module.exports = util;


// 2가지 메소드 success 3가지 파라미터를 먹고
// fail은 2가지 파라미터를 먹고