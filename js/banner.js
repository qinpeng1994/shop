// 轮播图
window.onload = function () {
    var pic = document.getElementById('pic')
    var ul = document.getElementsByClassName('banner_pic')[0];
    var show = setInterval(changePic, 1800);
    var index = 1;
    function changePic() {
        pic.src = 'images/' + (index + 1) + '.jpg';
        //使图片对应的li变色，其他li样式恢复默认
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].className = 'item';
        }
        ul.children[index].className = 'active'
        index++;
        if (index == ul.children.length) {
            index = 0;
        }
    }

    // 添加鼠标over与out事件
    for (let i = 0; i < ul.children.length; i++) {
        //添加mouseover事件
        ul.children[i].onmouseover = function () {
            //使对应的li变色，并且更改计数的值
            for (let j = 0; j < ul.children.length; j++) {
                if (ul.children[j] == event.target) {
                    index = j;
                }
            }
            changePic();
            clearInterval(show);
        }
        ul.children[i].onmouseout = function () {
            show = setInterval(changePic, 1800);
        }
    }

    

}