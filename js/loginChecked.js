function save(btn){
    if(sessionStorage){
        //保存数据
        var admin=['guest1','guest2'];
        var userPwd=['123','456'];
        sessionStorage.setItem('acc',JSON.stringify(admin))
        sessionStorage.setItem('pwd',JSON.stringify(userPwd))
        //比对账号密码，如果一致，就提交，不一致，就提示注册或者密码错误
        for(let i=0;i<JSON.parse(sessionStorage.getItem('acc')).length;i++){
            if(acc.value==JSON.parse(sessionStorage.getItem('acc'))[i]&&pwd.value==JSON.parse(sessionStorage.getItem('pwd'))[i]){
                sessionStorage.setItem('admin',JSON.parse(sessionStorage.getItem('acc'))[i])
                btn.form.submit();
                return
            }
            if(i==JSON.parse(sessionStorage.getItem('acc')).length-1){
                if(acc.value!=JSON.parse(sessionStorage.getItem('acc'))[i]||pwd.value!=JSON.parse(sessionStorage.getItem('pwd'))[i]){
                    alert('请注册或检查密码有无错误')
                }
            }
        }
    }else{
        alert('请更新浏览器')
    }
    
}