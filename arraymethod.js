var lang=["english","tamil","maths","chemi"]
var lang1=["botany","zoology","history"]
var lang2=["physics","french"]

// count of array to know
console.log(lang.length)

// first array value
console.log(lang[1])

// last array value
console.log(lang[lang.length-1])

// to change index value
console.log(lang[2]="physco");

// push in last
console.log(lang1.push("hello"))

// pop remove in last
console.log(lang.pop())

// unshift..to add first
console.log(lang.unshift("thumb"));

// shift..to remove first
console.log(lang1.shift());

// reverse
console.log(lang.reverse())

// sort 
console.log("sorted val:"+lang2.sort().reverse)
console.log("sorted:"+lang1.sort((a,b)=>a<b ? 1:-1))

// splice..to get a specific value
// console.log(lang1.splice(0,3))

// console.log(lang2[1].replace("priya"))

lang2.splice(0,2)
console.log(lang2)

// concat..to use mixed(name)in var
var mixedlang=lang.concat(lang1,lang2)
console.log(mixedlang)  //all lang,push,unshift
console.log(lang)   //push,unshift,lang