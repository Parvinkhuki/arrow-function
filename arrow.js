const multi=(x,y,z)=> x*y*z;

console.log(multi(12,2,2))

// temple
const sen =`I am a web developer.
I love to code.
i love to eat biryani`
console.log(sen)
// default
const add=(x,y=5)=>x+y;
console.log(add(10))

// array square prb 3 squre array elements and avg 
const arraySquare=(array)=>{
    let  sum=0
    let   add=0 
    for(let i of array)
    {sum=i+i
     add=add+sum
    console.log(add)
}
    return add/array.length;
};
console.log(arraySquare([2,5,8,8]))


// create a new array with even number
const arrayEven=(array)=>{
  
    let newArray=[];
    for(let i of array)
    {
    if(i%2===0){
        newArray.push(i)    } 
}
    return newArray;
};
console.log(arrayEven([2,5,8,8,5,8,5,2,5,4,8,6,52,52]))

const people={
    name:'human',
    age:20,
    class:"5th"
}
console.log(people.age)
const array=[20,12,22,14,12,22]
let arrayNum=Math.max(...array)
console.log(arrayNum)

const cat={
    name:'meww',
    ages:20,
    class:"5th"}
    delete cat.ages
console.log(cat);