// arrow func
const add=(a,b)=>a+b;
console.log(add(9,9))

// async and await
async function fetchdata(){
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(resdata=>{
        // console.log(resdata)
        displaymydata(resdata)
    })
    .catch(err=>{
        console.log(err)
    })
}
function displaymydata(data){
    console.log(data)
}
fetchdata()

// this key
var bike={
    bikename:"duke",
    bikemodel:"2017",
    desc:function(){
        return `my bike name is ${this.bikename} and model is ${this.bikemodel}`
    }
}
console.log(bike.desc())

// new array func
var num1=[8,3,2,2,0,6,24,69]
var num2=[3,5,78,2]
console.log(num2.reduce((x,y)=> x-y))

var arr=Array.of(49,5,25,68)
console.log(arr)

// every
// console.log(num1.every(val => val==2))

// some
// console.log(num1.some(val=>val==2))

// filter
// console.log(num1.filter((data)=>data ===2))

// for each or for each
// for(i=0;i<num1.length;i++){
//     console.log(num[i])}

// num2.foreach(function(data,index){
//     console.log(index+"."+data)
// })


// var arr1=[]
// console.log(Array(3).fill(true))












