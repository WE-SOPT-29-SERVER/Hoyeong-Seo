// 선언 후 fulfilled, rejected

const promise = new Promise((resolve, reject) =>{
  const age = 25;
  if (age > 20) {
    resolve(age);
  } else {
    reject(new Error("Age is too young to enter"))
  }
});

promise
  .then(resolvedData => {
    console.log(resolvedData);
  })
  .catch(err =>{
    console.log(err);
  });

  const cook = (callback, timeout) => {
    setTimeout(callback, timeout);
  };
  
  const ramenRecipe = () => {
    return new Promise((resolve, reject) => {
      cook(() => {
        console.log("[라면 진행상황]");
        resolve("[라면 만들기 시작]");
      }, 1000);
    });
  };
  
  const boilWater = progress => {
    return new Promise((resolve, reject) => {
      console.log("[라면] - 1. 물 끓이기 시작");
      cook(() => {
        resolve(`${progress} ---> 물 끓이기`);
      }, 2000);
    });
  };
  
  const putTheRamenAndSoupPowder = progress => {
    return new Promise((resolve, reject) => {
      console.log("[라면] - 2. 라면과 스프 넣기 완료, 앞으로 3분 간 끓이기 시작");
      cook(() => {
        resolve(`${progress} --> 면과 스프 넣기 후 3분 간 끓이기`);
      }, 500);
    });
  };
  
  const delayThreeMinutes = progress => {
    return new Promise((resolve, reject) => {
      console.log("[라면] - 3. 3분 간 대기 시작");
      cook(() => {
        resolve(`${progress} ---> 라면 완성`);
      }, 3000);
    });
  };
  
  // 이렇게 해도
  ramenRecipe()
    .then(function (progress) {
      boilWater(progress);
    })
    .then(function (progress) {
      putTheRamenAndSoupPowder(progress);
    })
    .then(function (progress) {
      delayThreeMinutes(progress);
    })
    .then(function (progress) {
      console.log(progress);
    });
  
  // 화살표 함수를 써도
  ramenRecipe()
    .then(progress => boilWater(progress))
    .then(progress => putTheRamenAndSoupPowder(progress))
    .then(progress => delayThreeMinutes(progress))
    .then(progress => console.log(progress));
  
  // 더 간결하게는 이렇게 해도 다 똑같은 실행 방식
  ramenRecipe().then(boilWater).then(putTheRamenAndSoupPowder).then(delayThreeMinutes).then(console.log);