class person{
    constructor(name1){
        this.name1=name1
    }
    displayname1(){
        return `may i get in ${this.name1}`
    }
}
class work extends person{
    constructor(name1,exp){
    super(name1)
    this.exp=exp
}
display(){
    return`hi my dear ${name1} and i'm ${exp}`
}
}
let obj=new work("priya",20)
console.log(obj.displayname1())

// arrow function
// let
let hi=(name2)=>`hi mam,.,.${name2}`
console.log(hi("padhu"))
// const
const val=(num)=>`${num}`
console.log(val(2+4))
