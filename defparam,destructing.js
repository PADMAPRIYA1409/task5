// rest parameter
let asign=(a=2,b="raju",c,...z)=>{
    var arr=[...z,"name1","name2"]
    return arr
}
console.log(asign("ravi",4,"saran",true,false))

// spread operator
var val1=[12,5,67,98]
var val2=[...val1,...val1]
console.log(val2)

// destructing
const numm1=[2,6,9,3,47,6]
const [a,b,...z]=numm1
console.log(z[2])

const numm2={
    namee:"varun",
    age:"30",
    hobby:"player"
}
console.log(numm2.age) // console.log(numm2.namee)

const{name,hobby,age}=numm2
console.log(hobby)