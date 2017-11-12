alert('在搜索框直接输入纯英文会触发键盘事件')
var keys = {
    '0': ['q','w','e','r','t','y','u','i','o','p'],
    '1': ['a','s','d','f','g','h','j','k','l'],
    '2': ['z','x','c','v','b','n','m'],
    'length': 3
}
var hash = {
    q : 'qq.com',
    w : 'weibo.com',
    e : 'ele.me',
    r : 'renren.com',
    t : 'tencent.com',
    y : 'cctv.com',
    u : 'baidu.com',
    i : 'iqiyi.com',
    o : 'baidu.com',
    p : 'baidu.com',
    a : 'alibaba.com',
    s : 'sohu.com',
    d : 'baidu.com',
    f : 'baidu.com',
    g : 'baidu.com',
    h : 'baidu.com',
    j : 'baidu.com',
    k : 'kfc.com',
    l : 'baidu.com',
    z : 'zhihu.com'

}
    hashInLocalStorage = JSON.parse(localStorage.getItem('usermessage') || 'null')
        if(hashInLocalStorage){
            hash = hashInLocalStorage
        }


var index = 0
while(index < keys['length']){
div1 = document.createElement('div')
    main.appendChild(div1)
var row = keys[index]
var index2 = 0
while(index2 < row.length){
    kbd = document.createElement('kbd')
        kbd.textContent = (row[index2])
        div1.appendChild(kbd)
        btn = document.createElement('button')
            btn.textContent = '编辑'
            btn.id = row[index2]
            if(hash[keys[index][index2]]){
                img = document.createElement('img')
                img.src = 'http://www.'+hash[keys[index][index2]]+'/favicon.ico'
                img.className = 'img'
            }else if(img.onerror){
                img = document.createElement('img')
                img.src = 'picture/null.png'
                img.className = 'noimg'
            }
            
            img.onerror = function(err) {
                console.log(err)
                err.target.src = 'picture/null.png'
                err.target.className = 'noimg'
            }
            kbd.className = 'kbd-'+row[index2]
            kbd.appendChild(btn)
            kbd.appendChild(img)
            btn.onclick = function(c){
                console.log(c.target.id)
                var key = c.target.id
                var x = window.prompt('给我一个网址，网址前部分不要加 "http://"或"https://"')
                hash[key] = x
                localStorage.setItem('usermessage',JSON.stringify(hash))
                console.log(hash)
            } 
            index2++
    }
index++
}         
document.onkeypress = function(k){
    var key = k.key
    var website = hash[key]
    if(!website){
        
    }else {
        window.open('http://' + website,'_blank')
    }
}

submit1.onclick = function() {
    window.open('http://www.baidu.com//s?wd='+wd.value,'_blank')
}
submit2.onclick = function() {
    window.open('http://www.google.co.uk/search?q='+wd.value,'_blank')
}
