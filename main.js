alert('目前只支持中文和数字搜索，纯英文搜索请使用输入法间接输入')
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
    y : 'youtube.com',
    u : 'uc.com',
    i : 'iqiyi.com',
    o : 'opera.com',
    p : 'phtoshop.com',
    a : 'alibaba.com',
    s : 'sohu.com',
    d : 'dd.com',
    f : 'ff.com',
    g : 'gg.com',
    h : 'hh.com',
    j : 'jj.com',
    k : 'kk.com',
    l : 'll.com',
    z : 'zz.com',
    x : 'xx.com',
    c : 'cc.com',
    v : 'vv.com',
    b : 'bb.com',
    n : 'nn.com',
    m : 'mm.com'
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
            kbd.id = row[index2]+'kbd'
            kbd.appendChild(btn)
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
var keydown = document || (!wd)             
keydown.onkeypress = function(k){
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
