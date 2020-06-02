(function(){
    // 限时抢购倒计时
    function countDown() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = new Date("2030-12-29 24:00:00");
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
})()