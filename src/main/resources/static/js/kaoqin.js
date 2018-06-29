function nothing() {
    //fill para
}

//for test
function test() {
    var url = service + "/kq/test";
    sendHttpRequest(url, parseTest);
}
function parseTest(text) {
    document.getElementById("msg").innerHTML=text;
}

//check user whether right, the page will be visible for the right user
function checkUser() {
    var info = document.getElementById('info');
    var user = getCookie("user");
    var url_user = getQueryVariable("user");
    alert("user = " + user + " url_user=" + url_user)

    if (user != url_user) {
        window.location.href=service + "/login";
    } else {
        var url = service + "/kq/getUserInfo?user=" + user;
        sendHttpRequest(url,parseUser);
    }

}
function parseUser(text) {
    if (text.length > 0) {
        var user_json = eval('(' + text + ')');
        document.getElementById("user_id").innerHTML +=user_json.userId;
        document.getElementById("name").innerHTML+=user_json.name;
        document.getElementById("email").innerHTML+=user_json.email;
        document.getElementById("phone").innerHTML+=user_json.phone;
        info.style.visibility = "visible";
    }
}
//get param from url
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function getCookie(cname)
{
    var ss = document.cookie;
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
            return c.substring(name.length,c.length);
    }
    return "";
}

//for daka
function daka() {
    var user_id = document.getElementById("user_id").innerHTML;
    var url = service + "/sign/signin?user_id=" + user_id;
    sendHttpRequest(url,parseDaka);
}
function parseDaka(response) {
    if (response == "sign_success") {
        alert('打卡成功！')
    } else {
        //alert('打卡失败！')
    }
}

/**
 * get kaoqin info from service
 */
function getKaoQinInfo() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var user_id = document.getElementById("user_id").innerHTML;
    if (from == "" || to == "") {
        alert('请选择时间')
        return;
    }
    if (from >= to) {
        alert('截至时间必须大于起始时间！')
        return;
    }
    var userId = document.getElementById('user_id').value;
    var url = service + "/kq/getKaoQinInfo?userId=" + user_id + "&from=" + from + "&to=" + to;//帐号密码不安全，待改进
    sendHttpRequest(url,parseKaoQin);
}
function parseKaoQin(response) {
    var table = document.getElementById('qk-result');
    if (response.length > 0) {
        var datas = eval(response);
        var kqTable = '';
        for(var i=0;i<datas.length;i++){
            kqTable +="<tr>" +
                "<td>" + datas[i].date + "</td>" +
                "<td>" + datas[i].signin + "</td>" +
                "<td>" + datas[i].signout + "</td>" +
                "<td>" + datas[i].workTime + "</td>" +
                "<td>" + datas[i].leaveOrNot + "</td>" +
                "<td>" + datas[i].leaveRange + "</td>" +
                "<td>" + datas[i].state + "</td>" +
                "</tr>";
        }
        table.innerHTML = kqTable;
        document.getElementById('kqInfoTable').style.visibility = "visible";
        alert('查询成功！')
    }
}

function switchArea(showId) {
    var areas = document.getElementsByClassName('showarea');
    for (var i=0; i<areas.length; i++) {
        if (showId != "kqInfo") document.getElementById('kqInfoTable').style.visibility = "hidden";
        if(areas[i].id == showId) {
            //areas[i].style.visibility = "visible";
            areas[i].style.display = "block";
        } else {
            //areas[i].style.visibility = "hidden";
            areas[i].style.display = "none";
        }
    }
}