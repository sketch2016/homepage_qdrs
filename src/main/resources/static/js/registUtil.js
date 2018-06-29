function test(){
    alert('已提交！');
    return false;
}

function startSubmit() {

    if(user.user_id.value ==""){
        //document.getElementById('error_msg').innerHTML="工号不能为空";
        alert('工号不能为空！');
        user.user_id.focus();
        return false;
    }
    if(!user.user_id.value.match(/^[0-9]{4}$/)){
        alert('工号必须为4位数字！');
        user.user_id.focus();
        return false;
    }


    if(user.name.value==""){
        alert('用户名不能为空！');
        user.name.focus();
        return false;
    }
    if(!(user.name.value.match(/^[a-zA-Z0-9_][a-zA-Z0-9_]{3,19}$/))){
        alert('用户名长度为4~19，且只能包含数字,字母和下划线！');
        user.name.focus();
        return false;
    }

    if(user.password.value==""){
        alert('密码不能为空！');
        user.password.focus();
        return false;
    }
    if(user.password.value.length < 6){
        alert('密码至少需要6位！');
        user.password.focus();
        return false;
    }

    checkUserWhetherExist(user.user_id.value, user.name.value);
}



function checkUserWhetherExist(user_id, name) {
    var url = service + "/regist/checkConflict";
    var data = "user_id=" + user.user_id.value + "&name=" + user.name.value;
    //alert(url)
    postHttpRequest(url,data,parseCheckUserWhetherExist);
}

function parseCheckUserWhetherExist(text) {
        var user_login = document.getElementById('user');
        if (text == "regist_success") {
            user_login.submit();
            //alert('login success');
        }
}
