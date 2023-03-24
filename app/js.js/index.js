//默认导出
import myFn from "./lib1.js";
myFn()

// 把export关键字放在let,const,function,class,var前面
// import { PI,num,arr,obj,fn,user} from "./lib1.js";
// console.log(PI,num,arr,obj);
// fn()
// user.getUser()

//使用通配符导入所有的变量
// import * as myVar from "./lib1.js";
// console.log(myVar.PI,myVar.num,myVar.arr,myVar.obj);
// myVar.fn()
// myVar.user.getUser()u