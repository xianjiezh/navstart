




// 初始化数据


var hashInit = init()
var keys = hashInit['keys']
var hash = hashInit['hash']
generatingKeyboard(keys, hash)

var wd = document.getElementById('wd')
wd.onblur = function(){
    listenToUser(hash)    
}
wd.onfocus = function(){
    listenToUser(undefined)
}


/* 搜索框 */

submit1.onclick = function () {
    window.open('//www.baidu.com//s?wd=' + wd.value, '_blank')
}
submit2.onclick = function () {
    window.open('//www.google.co.uk/search?q=' + wd.value, '_blank')
}



/**************/
function init() {
    var keys = {
        '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        'length': 3
    }
    var hash = {
        q: 'qq.com',
        w: 'weibo.com',
        e: 'ele.me',
        r: 'renren.com',
        t: 'taobao.com',
        y: 'cctv.com',
        u: 'baidu.com',
        i: 'iqiyi.com',
        o: 'baidu.com',
        p: 'baidu.com',
        a: 'alibaba.com',
        s: 'sohu.com',
        d: 'baidu.com',
        f: 'baidu.com',
        g: 'baidu.com',
        h: 'baidu.com',
        j: 'baidu.com',
        k: 'kfc.com',
        l: 'baidu.com',
        z: 'zhihu.com',
        x: 'x-art.com',
        c: 'cctv.com',
        v: 'vivo.com',
        b: 'bilibili.com',
        n: 'nba.com',
        m: 'Microsoft.com'
    }
    var hashInLocalStorage = getFromLocalStorage('userMessage')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }

    function getFromLocalStorage(usmsg) {
        JSON.parse(localStorage.getItem('usmsg') || 'null')
    }
    return {
        keys: keys,
        hash: hash
    }
}


function generatingKeyboard(keys, hash) {
    for (var index = 0; index < keys['length']; index++) {
        div1 = tag('div')
        main.appendChild(div1)
        var row = keys[index]
        for (var index2 = 0; index2 < row.length; index2++) {
            var img = creatImage(hash[row[index2]])
            var btn = creatButton(row[index2])
            kbd = tag('kbd')
            kbd.textContent = (row[index2])
            kbd.id = row[index2]
            kbd.appendChild(btn)
            kbd.appendChild(img)
            div1.appendChild(kbd)
            kbd.onclick = function (wedsite) {
                var site = hash[wedsite.target.id]
                console.log(site)
                window.open("http://" + site, "_blank")
            }  // 鼠标点击事件不能return出去，就要绑定在这里
        }

    }

}

function tag(tagName) {
    return document.createElement(tagName)
}

function creatButton(id) {
    var btn = tag('button')
    btn.textContent = '编辑'
    btn.id = id
    btn.onclick = function (c) {
        var btn2 = c.target
        img2 = btn2.nextSibling
        key = btn2['id']
        var key = c.target.id    //btn2的 q w e r t 等
        var x = window.prompt('给我一个网址，网址前部分不要加 "http://"或"https://"')
        hash[key] = x                                   //变更hash
        console.log(x)
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (err) {
            err.target.src = 'picture/null.png'
            err.target.className = 'noimg'
        }
        localStorage.setItem('userMessage', JSON.stringify(hash))
    }
    return btn
}

function creatImage(domin) {
    if (domin) {
        img = tag('img')
        img.src = 'http://' + domin + '/favicon.ico'
        img.className = 'img'
    } else {
        img = tag('img')
        img.src = 'picture/null.png'
        img.className = 'noimg'
    }

    img.onerror = function (err) {
        err.target.src = 'picture/null.png'
        err.target.className = 'noimg'
    }
    return img
}

function listenToUser(hash) {
    // 监听键盘事件
    document.onkeypress = function (k) {
        var key = k.key
        var website = hash[key]
        if (!website) {

        } else {
            window.open('//' + website, '_blank')
        }

    }
    return false
}




















