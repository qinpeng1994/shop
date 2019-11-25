// 轮播图
window.onload = function () {
    var pic = document.getElementById('pic')
    var ul = document.getElementById('banner_pic');
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

    // 限时抢购倒计时
    function countDown() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = new Date("2019-12-23 24:00:00");
        var end = endDate.getTime();
        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        var day, hour, minute, second;
        if (leftTime >= 0) {
            // day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            hour = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            minute = Math.floor(leftTime / 1000 / 60 % 60);
            second = Math.floor(leftTime / 1000 % 60);
        }
        //将倒计时赋值到div中
        // document.getElementById("_d").innerHTML = day ;
        document.getElementById("_hour").innerHTML = hour;
        document.getElementById("_minute").innerHTML = minute;
        document.getElementById("_second").innerHTML = second;
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(countDown, 1000);

    }
    countDown();
    // 检验是否账号存在
    //在加载页面检查有没有登录的账号admin项，如果为空返回登录页
    // var admin1  = document.getElementById('admin')
    if (!sessionStorage.getItem('admin')) {
        // location.assign('login.html')
    } else {
        admin.innerHTML = sessionStorage.getItem('admin')
    }

}