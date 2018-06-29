{
    document.write("<script language='javascript' src='httpUtil.js'></script>");

    function checkLogin(){
        //testHttp();
        if(user.name.value==""){
            alert('用户名不能为空！');
            user.name.focus();
            return false;
        }

        if(user.password.value==""){
            alert('密码不能为空！');
            user.password.focus();
            return false;
        }
        checkUserAndPassword(user.name.value, user.password.value);
        return true;
    }

    function checkUserAndPassword(user, password) {
        var url = service + "/sign/checkUserAndPassword?user=" + user + "&password=" + password;//帐号密码不安全，待改进
        //alert(url);
        sendHttpRequest(url, parseCheckResponse);
    }

    function parseCheckResponse(text) {
        if (text == "kqSystem") {
            setCookie(user.name.value, password);
            //alert('login success');
            window.location.href=service + "/kqSystem?user=" + user.name.value;
        } else {
            //alert(text)
        }
    }

    function setCookie(user,password){

        document.cookie = "user="+user;
        //document.cookie = "password="+password;
    }

}

