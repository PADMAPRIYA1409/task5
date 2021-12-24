// call function
function newname(name1,name2){
    this.name1=name1;
    this.name2=name2;
}
function tele(name1,name2,name3){
    newname.call(this,name1,name2)
    this.name3=name3;
}
var hlo=new tele('padma','priya','rajamani')
console.log(hlo.name3)

// apply function
const numb1=[23,34,45,56,67,78,89]
// max aply
console.log(Math.max.apply(null,numb1))
// min apply
console.log(Math.min.apply(null,numb1))

let data1=[3,5,8,9]
let data2=[4,7,5,9]
data1=[...data1,...data2]
// console.log(data1)
console.log(data1.push.apply(data2,data1))

// tym.hr=24
// var tym={min:"ten",hr:"twenty"}
// console.log(tym.min)
console.log(Math.PI.toFixed(3))

