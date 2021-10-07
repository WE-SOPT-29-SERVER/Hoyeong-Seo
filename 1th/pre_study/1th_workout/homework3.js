
/*
const colfumies = require('./1th_homework2');

const noShowMembers = ["홍지윤", "서호영"];
const offlineMembers = Object.values(colfumies)
.filter(it => !noShowMembers.includes(it.name))
.sort((a, b) => Math.random() - Math.random())
.sort((a, b) => a.status.localeCompare(b.status));

const team = {team1:[], team2:[], team3:[], team4:[], team5:[], team6:[]};

offlineMembers.forEach((colfumies, index) => {
  team[`team${(index%6)+1}`].push(colfumies);
})
console.log(team);
*/
var colfumies = require('./homework2');

const noShowMembers = ["홍지윤", "서호영"];

const offlineMembers = colfumies
.filter(it => !noShowMembers.includes(it.name))
.sort((a, b) => Math.random() - Math.random())
.sort((a, b) => a.status.localeCompare(b.status));

const team = {team1:[], team2:[], team3:[], team4:[], team5:[], team6:[]};

offlineMembers.forEach((colfumies, index) => {
  team[`team${(index%6)+1}`].push(colfumies);
})
console.log(team);