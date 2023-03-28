  //需求描述
        //1.在输入框里输入关键词
        //2.点击搜索按钮
        //3.在页面上显示与关键词相关的照片
        const input = document.querySelector("input")
        const button = document.querySelector("button")
        const div = document.querySelector(".container")
        var keyword = ""
        let api_url = ""
        let str = ""
        //点击按钮获取数据，显示照片
        button.addEventListener("click", function () {
            keyword = input.value
            console.log(keyword);
            api_url = `https://api.unsplash.com/search/photos?query=${keyword}&page=1&client_id=MEGctJu9x5RoVaToNwPqvXKPOMxODrlyA8u9IJKYiEQ`
            showPhotos()
        })
        //showPhotos处理函数
        let showPhotos = () => {
            //示例化一个请求对象
            const xhr = new XMLHttpRequest()
            //
            xhr.open("GET", api_url, true)
            //
            xhr.send()
            xhr.onreadystatechange = function () {

                if (this.readyState === 4) {
                    let tada = JSON.parse(this.responseText).results
                    // console.log(tada)
                    str = ""
                    for (let i = 0; i < tada.length; i++) {
                        let img_url = tada[i].urls.small
                        str += `<img src="${img_url}">`
                    }

                    div.innerHTML = str
                }
            }
        }    
       let timerId = self.setInterval(h1,1000)
        function h1(){
        let H =  document.querySelector("h1")
        let c = new Date
        let n = c.getFullYear()
        let y = c.getMonth() + "月"
        let r = c.getDate() + "日"
        let s = c.getHours()
        let f = c.getMinutes() +"分"
        let m = c.getSeconds() +"秒"
        H.innerHTML = `${n}年${y}${r}${s}时${f}${m}`;
        s=> 7 && s <= 19?document.body.style.background = "rgb(191, 191, 191)":document.body.style.background = "rgb(13, 13, 13)"
        }
        h1()  