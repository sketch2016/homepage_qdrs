
    /**
     * core method, send http request with @url and call @func
     * @param url
     * @param func
     */
    function sendHttpRequest(url, func) {
        //alert('sendHttpRequest receive request: url = ' + url)
        var xmlhttp;
        /*first step: instance XMLHttpRequest*/
        if(window.XMLHttpRequest){
            //  IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }else{
            // IE6, IE5
            xmlhttp =  new ActiveXObject("Microsoft.XMLHTTP");
        }
        /*second step: call open and set params，@true means async task,  false means sync task*/
        xmlhttp.open("GET",url,true);
        //xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');//for post
        xmlhttp.send();
        /*third step: listen to the response*/
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4 & xmlhttp.status==200){
                var text = xmlhttp.responseText;
                func(text);
            }else {
                //alert('url=' + xmlhttp.url)
                //alert('no response xmlhttp.readyState=' + xmlhttp.readyState + ' xmlhttp.status=' + xmlhttp.status);
            }
        }
    }

    function testHttp(a, b) {
        alert('hehe' + a)
    }

    function postHttpRequest(url,data,func) {
        alert('postHttpRequest receive request: url = ' + url)
        var xmlhttp;
        /*first step: instance XMLHttpRequest*/
        if(window.XMLHttpRequest){
            //  IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }else{
            // IE6, IE5
            xmlhttp =  new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("post",url,true);
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send(data);

        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4 & xmlhttp.status==200){
                var text = xmlhttp.responseText; //用户已存在
                func(text);
            }else {
                //alert('url=' + xmlhttp.url)
                //alert('no response xmlhttp.readyState=' + xmlhttp.readyState + ' xmlhttp.status=' + xmlhttp.status);
            }
        }
    }
