const member = require('./members.js'); // @ members.js 파일의 외부 모듈 가져오기

member.sort(function(a,b) {
  return(a.group < b.group) ? -1 : (a.group > b.group) ? 1:0; // @ 구글링을 통해 구한 group 프로퍼티의 알파벳 순서로 정렬
});

console.log(member) // @ 정렬이 잘 되었는지 체크 한번

const team = {team_1:[], team_2:[], team_3:[], team_4:[], team_5:[]}; // @ 5개의 팀에 대한 빈 배열 생성
member.forEach((server, index) => {
  team[`team_${(index%5)+1}`].push(server); // @ foreach를 이용해 순서대로 한 명씩 각 팀에 배치 (OB 먼저 각 팀에 배치된 후, YB가 나뉘어짐)
})

console.log(team)