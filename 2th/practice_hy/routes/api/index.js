const express = require("express"); // express모듈 불러오기
const router = express.Router(); // Router()메소드를 사용해서 router 객체 생성
// api 폴더에서 만든 /
router.get("/", (req, res) => {     // router를 사용해서 end point(경로 "/")를 정의 
                                    // 이 경로 날아오는 get request를 (req, res)함수로 대응하겠다.
  const result = {          
    status: 200,
    message: "api~!",
  };
  res.status(200).send(result);
});

module.exports = router;