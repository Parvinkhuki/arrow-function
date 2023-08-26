// // task -1: console log the secondary school location of Sophia 
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
// console.log(data.Sophia.study[1].secondary[1])
// // task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }
// console.log(students['2222'].address['city'] +" " +students['3333'].name)

// // task-3 : access and then show habluder adda
// // show output Beginner
// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }
// console.log(data2.data[0].bookDetails.name + " "+
// data2.data[1].bookCategory)


// // create a new array with odd number
// const arrayOdd=(array)=>{
  
//     let newArray=[];
//     for(let i of array)
//     {
//     if(i%2===1){
//         newArray.push(i)    } 
// }
//     return newArray;
// };
// console.log(arrayOdd([2,5,8,8,5,8,5,2,5,4,8,6,52,52]))

// const array2=[12,21,25,23,21,25,21,212,22]
// let result=[]
// result= array2.map((a)=>{
//     if(a%2==1){     
//         return a
//     }  
 
// })
// console.log(array2)
// console.log(result)



// // array filter 
// let array=[21,2110,25,252,11,215,123,51,50,42,50,20,360]
// let result2= array.filter((a)=>a%10===0)
// console.log(result2)
// let result3= array.find((a)=>a%10===0)
// console.log(result3)


// const people= [
// {name:'meena', age:20},
// {name:'Rina', age:15},
// {name:'Suchorita', age:25}
// ]
// let mango=0;
//  for(let i of people){
//    mango =mango+ i.age
//  }
// console.log(mango)
// const human= [1,2,3,4]
//     const sum = human.reduce((p, c) => p + c, 0)
// console.log(sum)
// const e=[{name:'meena', age:20},
// {name:'Rina', age:15},
// {name:'Suchorita', age:25}]
// const sum2 = e.reduce((p, c) => p + c.age, 0)
// console.log(sum2)

// closure

function counter(){
    let counter =0;
    return function(){
        counter+=1
      
      return counter
    }
}
let add = counter()
let hello=counter()
console.dir(add())
console.dir(add())
console.dir(hello())
console.dir(add())
console.dir(hello())
console.dir(add())
console.dir(hello())
  const obj={
    name:"hello",
    id :250,
    subject:"eng"
  }

const{id:roll,name:greet}=obj
console.log(roll, greet)

const array =[12,52,22,11,21,21]
const array1=[...array]
array.push(12)

console.log(array1)
console.log(array)


const h1=[3,1,,3,5,4,2,10]
let first = h1.findIndex((c,index,array)=>{return c>5
});
console.log(first)

 

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 