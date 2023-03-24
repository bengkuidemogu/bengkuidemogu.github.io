
//项目中如何写请求
//获取一个xhr对象 
const url = "https://jsonplaceholder.typicode.com/todos"
function getData(API, callback, error) {
    const url = API
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("load", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.readyState,xhr.status);//4 200
            const data = JSON.parse(xhr.response)
            //请求数据成功时，传给回调函数的实参
            callback && callback(data, undefined)//给回调函数传入实参。
        } else {
            // console.log(xhr.readyState,xhr.status,xhr.statusText);//44 404 Not Found
            //请求数据失败时传给回调函数的实参
            callback && callback(undefined, xhr.status)
        }
    })
    xhr.open("GET", url, true)
    xhr.send()
}
//调用：/
//    url：http地址，function(data2){console.log(data2);}一个回调函数。形参data2
getData(url, function (successDate, failDate) {
    if (successDate) {
        //请求成功处理的数据
        console.log(successDate);
    } else {
        //请求失败处理的信息
        console.log(failDate);
    }
})
