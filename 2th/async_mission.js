const member = require('./members.js'); // @ members.js 파일의 외부 모듈 가져오기

const getOnline = member => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const on_Data = member.filter(member => member.location === "online");
      resolve(on_Data)
    }, 500)
  })
}

const getOffline = member => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const off_Data =  member.filter(member => member.location ==="offline");
      resolve(off_Data)
    }, 500)
  })
}

const getYB = member => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const YB_Data = member.filter(member => member.group ==="YB")
      resolve(YB_Data)
    }, 500)
  })
}

const getOB = member => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const OB_Data = member.filter(member => member.group ==="OB")
      resolve(OB_Data)
    }, 500)
  })
}

const asyncMember1 = async member => {
  const on = await getOnline(member)
  const onOB = await getOB(on)
  console.log(onOB)
}
const asyncMember2 = async member => {
  const off = await getOffline(member)
  const offYB = await getYB(off)
  console.log(offYB)
}
asyncMember1(member)
asyncMember2(member)
