//在加载页面检查有没有登录的账号admin项，如果为空返回登录页
window.onload=function(){
    // var admin1  = document.getElementById('admin')
    if(!sessionStorage.getItem('admin')){
        // location.assign('login.html')
    }else{
        admin.innerHTML=sessionStorage.getItem('admin')
      
    }
   
}