var table = document.getElementById('shopping');
var checkAll = document.getElementById('checkAll');
var opt = document.getElementsByName('option');

function init() {
  
    var productData = localStorage.getItem('product');
    var data = JSON.parse(productData);
    for (var i = 0; i < data.length; i++) {
        var table = document.getElementById('shopping');
        var checkAll = document.getElementById('checkAll');
        var opt = document.getElementsByName('option');
        var tr1 = table.insertRow(-1);
        tr1.insertCell(-1).colspan = '7';
        let tr2 = table.insertRow(-1);
        tr2.insertCell(-1).innerHTML = '<input type="checkbox" name="option">'
        tr2.insertCell(-1).innerHTML = '<dl><dt><img src=' + data[i].img + ' width="40px" height="40px"></dt><dd><p><a href="#">' + data[i].name + '</a></p></dd></dl>'
        tr2.insertCell(-1).innerHTML = data[i].price
        tr2.insertCell(-1).innerHTML = '<input type="button" value="-" onclick="sub(this)"> <input type="text" name="count" value=" '+ data[i].numb +' " size="10" > <input type="button" value="+" onclick="add(this)">'
        tr2.insertCell(-1).innerHTML = '<span>' + data[i].price * data[i].numb + '</span>'
        tr2.insertCell(-1).innerHTML = '<input type="button" value="删除">'
    }
    //全选
    checkAll.onclick = allCheck;
    //反选
    for (let i = 0; i < opt.length; i++) {
        opt[i].onclick = reCheck;
    }
    priceSelf();
    priceAll();
    deleteSelf();
}
//全选
function allCheck() {
    for (let i = 2; i < table.rows.length; i += 2) {
        var option = table.rows[i].cells[0].children[0]
        option.checked = checkAll.checked
    }
    priceAll();
}
//反选
function reCheck() {
    var checkAll = document.getElementById('checkAll');
    var flag = true;
    for (let i = 0; i < opt.length; i++) {
        if (!opt[i].checked) {
            flag = false;
            break;
        }
    }
    if (flag) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }
    priceAll()
}
//加减按钮
function sub(btn) {
    var num = btn.nextElementSibling;
    num.value--;
    if (num.value < 1) {
        num.value = 1
    }
    priceSelf();
    priceAll();

}

function add(btn) {
    var num = btn.previousElementSibling;
    num.value++;
    priceSelf();
    priceAll()
}
//小计与单项积分
function priceSelf() {
    var table = document.getElementById('shopping');
    for (let i = 2; i < table.rows.length; i += 2) {
        var table = document.getElementById('shopping');
        table.rows[i].cells[4].children[0].innerHTML = (table.rows[i].cells[2].innerHTML * table.rows[i].cells[3].children[1].value).toFixed(2);
       
    }

}
//总价与总积分
function priceAll() {
    var total = document.getElementById('total');
    var integral = document.getElementById('integral');
    var sum = 0;
    var sum1 = 0;
    var table = document.getElementById('shopping');
    for (let i = 2; i < table.rows.length; i += 2) {
        var table = document.getElementById('shopping');
        var option = table.rows[i].cells[0].children[0]
        if (option.checked) {
            sum += Number(table.rows[i].cells[4].children[0].innerHTML)
            
        }
    }
    total.innerHTML = sum;
}
//删除单行
function deleteSelf() {
    var table = document.getElementById('shopping');
    for (let i = 2; i < table.rows.length; i += 2) {
        let delBtn = table.rows[i].cells[5].children[0];
        delBtn.onclick = function () {
            let tr = delBtn.parentNode.parentNode;
            tr.parentNode.removeChild(tr.previousElementSibling)
            tr.parentNode.removeChild(tr)
            priceAll();
            reCheck();
        }
    }

}
//删除全部
function deleteAll() {
    var table = document.getElementById('shopping');
    for (let i = table.rows.length - 1; i >= 0; i -= 2) {
        let option = table.rows[i].cells[0].children[0];
        if (option.checked) {
            let tr = option.parentNode.parentNode;
            tr.parentNode.removeChild(tr.previousElementSibling)
            tr.parentNode.removeChild(tr)
            priceAll();
            reCheck();
        }

    }
}

// 结算
function buyAll(){
    //清除购物车
        // localStorage.clear('data')
        location.href('login.html');
}