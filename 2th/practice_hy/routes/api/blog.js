const express = require("express"); // express모듈 불러오기
const router = express.Router(); // Router()메소드를 사용해서 router 객체 생성
// api 폴더에서 만든 /
router.get("/", (req, res) => {     // router를 사용해서 end point(경로 "/")를 정의 
  const result = {          
    status: 200,
    message: "blog에 접근합니다.",
  };
  res.status(200).send(result);
});

module.exports = router;