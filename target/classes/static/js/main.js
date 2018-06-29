window.onload = function () {
    var serviceBaseURL = localStorage.getItem('serviceBaseURL');
    var page = 1;
    var size = 10;
    var total;
    var pages;

    // 鎻愪氦鐣欒█
    $('#submitBtn').on('click',function(){
        $('#submitBtn').attr("disabled", true);
        var name = $('#name').val();
        var phone = $('#phone').val();
        var city = $('#city').val();
        if (!name) {
            $('#submitBtn').attr("disabled", false);
            alert('璇疯緭鍏ュ鍚�!');
        } else if (!phone) {
            $('#submitBtn').attr("disabled", false);
            alert('璇疯緭鍏ユ墜鏈哄彿鐮�!');
        } else if (!city) {
            $('#submitBtn').attr("disabled", false);
            alert('璇疯緭鍏ユ剰鍚戝煄甯�!');
        } else {
            var params = {
                "name": name,
                "phone": phone,
                "intentionalCity": city
            };
            $.ajax({
                url: serviceBaseURL + "/messageBoard",
                type: 'POST',
                data: JSON.stringify(params),
                dataType: "json",
                contentType: "application/json",
                success: function (response) {
                    if (response.code == '1') {
                        alert('淇℃伅鎻愪氦鎴愬姛');
                    } else {
                        $('#submitBtn').attr("disabled", false);
                        alert(response.message);
                    }
                },
                error: function (response) {
                    $('#submitBtn').attr("disabled", false);
                    alert(response.message);
                }
            });

        }
    });


    getTradeNews();
    getCompanyNews(page);

    // 涓婁竴椤�
    $("#previous").on('click',function(){
        if(page > 1){
            page --;
            getCompanyNews(page);
            changePage();
        }else{
            alert('宸茬粡鏄涓€椤典簡锛�')
        }
    });

    // 涓嬩竴椤�
    $("#next").on('click',function(){
        if(page < pages){
            page ++;
            getCompanyNews(page);
            changePage();
        }else{
            alert('宸茬粡鏄渶鍚庝竴椤典簡锛�')
        }

    });

    // 琛屼笟鏂伴椈-1
    function getTradeNews() {
        $.ajax({
            url: serviceBaseURL + "/news",
            type: 'GET',
            data: {
                page:1,
                size:4,
                newsType:1,
                category:1 //0-甯傚満閮� 1-鍟嗗浜嬩笟閮�
            },
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                if (response.code == '1') {
                    var trandeNewsData = response.data.dataList;
                    var trandeNewsHtml ='';
                    if(trandeNewsData.length > 0 ){
                        $.each(trandeNewsData,function(index,item){
                            var ele =
                                '<a class="col-lg-3 col-sm-6 col-xs-12 nnnew" href="'+ item.newsLinks +'">'+
                                '<div class="font">'+
                                '<img src="'+ item.url +'" height=""width="100%"/ >'+
                                '<div class="font-s">'+
                                '<h1 title="'+ item.newsTitle +'">'+ item.newsTitle +'</h1>'+
                                '<p title="'+ item.newsBrief +'">'+ item.newsBrief +'</p>'+
                                '<h2>'+ item.updateTimeToString +'</h2>'+
                                '</div>'+
                                '</div>'+
                                '</a>';
                            trandeNewsHtml = trandeNewsHtml + ele;
                        });
                        $('#trandeNews').append(trandeNewsHtml);
                    }else{
                        $("#trandeNewsBox").css({"display":"none"})
                    }
                } else {
                    alert(response.message);
                }
            },
            error: function (response) {
                alert(response.message);
            }
        });
    }
    //鍏徃鏂伴椈-0
    function getCompanyNews(page) {
        $('#companyNews').empty();
        $.ajax({
            url: serviceBaseURL + "/news",
            type: 'GET',
            data: {
                page:page,
                size:size,
                newsType:0,
                category:1 //0-甯傚満閮� 1-鍟嗗浜嬩笟閮�
            },
            dataType: "json",
            contentType: "application/json",
            success: function (response,status,request) {
                if (response.code == '1') {
                    var companyNewsData = response.data.dataList;
                    var companyNewsHtml ='';
                    if(companyNewsData.length > 0){
                        $.each(companyNewsData,function(index,item){
                            var ele =
                                '<a class="col-lg-6 col-md-12 col-sm-12 col-xs-12" href="'+ item.newsLinks +'" style="cursor: pointer;">'+
                                '<div class="imgbox">'+
                                '<img src="'+ item.url +'" height="117 "width="176"/ >'+
                                '</div>'+
                                '<div class="txtbox">'+
                                '<h1 title="'+ item.newsTitle +'">'+ item.newsTitle +'</h1>'+
                                '<h2 title="'+ item.newsBrief +'">'+ item.newsBrief +'</h2>'+
                                '<p>'+ item.updateTimeToString +'</p>'+
                                '</div>'+
                                '</a>';
                            companyNewsHtml = companyNewsHtml + ele;
                        });
                        $('#companyNews').append(companyNewsHtml);
                    }else{
                        $("#companyNewsBox").css({"display":"none"});
                    }
                    total = request.getResponseHeader('x-total-count');
                    pages = response.data.pages;
                    changePage();
                } else {
                    alert(response.message);
                }
            },
            error: function (response) {
                alert(response.message);
            }
        });
    }

    function changePage(){
        var ele = '绗�' + page + '椤�/鍏�' + pages +'椤�';
        $("#pageContent").html(ele);
    }
};