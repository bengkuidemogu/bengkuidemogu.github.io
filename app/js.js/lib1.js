//  const PI = 3.14
//  let num = 123
//  const arr = ["a","b","c"]
//  const obj = {x:1,y:2}
//  const fn = function(){console.log("hellow") 
// return 1+1
// ;}
//  class User{
//     constructor(userName,age){
//         this.userName = userName,
//         this.age= age
//     }
//     getUser(){
//         console.log(this.userName,this.age);
//     }
// }
//  const user =new User("花折","18") 
// export { PI,num,arr,obj,fn,User,user}



export const PI = 3.14
export let num = 123
export const arr = ["a","b","c"]
export const obj = {x:1,y:2}
export default function(){console.log("hellow") 
return 1+1
;}
export class User{
    constructor(userName,age){
        this.userName = userName,
        this.age= age
    }
    getUser(){
        console.log(this.userName,this.age);
    }
}
export const user =new User("花折","18") 

