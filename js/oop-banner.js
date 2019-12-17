/**
 * 以面向对象的形式，实现首页轮播图功能
 */
var banner = {
    // 初始化函数
    init: function () {
        this.nowIndex = 0;
        this.timer = null;
        this.arr = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg']
        this.bindEvent();
        this.slideAuto()
    },
    //  绑定事件
    bindEvent: function () {
        var self = this;
        var oPic = document.getElementById("pic")
        var item = document.getElementsByClassName("item");
        var len = item.length;
        for (var i = 0; i < len; i++) {
            item[i].setAttribute("data-index", i);
            item[i].onmouseover = function () {
                var index = this.getAttribute("data-index");
                self.nowIndex = index;
                self.changeStyle();
                oPic.src = self.arr[self.nowIndex];
                clearInterval(self.timer)
            };
            item[i].onmouseleave = function () {
                self.slideAuto()
            }
        }
    },
    // 自动轮播
    slideAuto: function () {
        var self = this;
        var oPic = document.getElementById("pic");
        clearInterval(self.timer)
        self.timer = setInterval(function () {
            oPic.src = self.arr[self.nowIndex];
            self.changeStyle()
            self.nowIndex++;
            if (self.nowIndex % 5 == 0) {
                self.nowIndex = 0
            }
        }, 1300)
    },
    // 改变小圈样式
    changeStyle: function () {
        var active = document.getElementsByClassName("active")[0];
        var item = document.getElementsByClassName("item");
        active.classList.remove("active");
        item[this.nowIndex].classList.add("active")
    }


}

banner.init();