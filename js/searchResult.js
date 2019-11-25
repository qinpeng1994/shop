 //在加载页面检查有没有登录的账号admin项，如果为空返回登录页
 window.onload = function () {
     if (!sessionStorage.getItem('admin')) {
         location.assign('login.html')
     } else {
         admin.innerHTML = sessionStorage.getItem('admin')
     }
 }
 //  定义一个空数组
 var productArr
 if (!localStorage.getItem('product')) {
     productArr = [];
 } else {
     productArr = JSON.parse(localStorage.getItem('product'))
     addCart()
 }
 addCart()
 function addCart() {
     var button = document.getElementsByTagName('button');
     for (let i = 0; i < button.length; i++) {
         button[i].onclick = function () {
             var productName = button[i].parentElement.children[0].nextElementSibling.nextElementSibling.innerHTML
             var imgSrc = button[i].parentElement.children[0].children[0].src
             var price = button[i].parentElement.children[1].children[0].children[1].innerHTML
             var pro = new Object()
             pro.name = productName;
             pro.img = imgSrc;
             pro.price = price;
             pro.numb = "1";
             pro = JSON.stringify(pro)
             pro = JSON.parse(pro)
             productArr.push(pro)
             localStorage.setItem('product', JSON.stringify(productArr))
         }
     }

    
 }
 
 //product为选购的商品参数，如果loacl里没有存储，就创建一个新的数组，如果有存储，则读取后在上面输出