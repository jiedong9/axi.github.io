let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/* 你好，我叫小方
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#div1{
    border: 1px solid green;
    width: 200px;
    height: 200px;
    
}

已成功部署，无需安装，请登录修改默认账号密码

用户：admin

密码：zblogger
`

let string2 = ''
let n = 0

let step = () => {

    setTimeout(() => {

        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        if (n < string.length - 1) {
            n += 1
            step()
        }

    }, 100)



}

step()