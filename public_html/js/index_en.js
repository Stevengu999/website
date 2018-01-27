$(function () {
    $('.navbar-nav li').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active')
    })
});

$(function () {

    $('.services-item').mouseover(function () {
        $(this).find('i').addClass('ljg-iconactive');
    }).mouseout(function () {
        $(this).find('i').removeClass('ljg-iconactive');
    })
    // 核心团队
    var teamLjp = '';
    // var people=new Array("img","name","text");
    for (var i = 0; i < people_en.length; i++) {
        teamLjp += '<div class="item team-project wow fadeIn item-ljp" style="height:470px;">';
        teamLjp += '<div class="ljp-header clearfix">';
        teamLjp += '<div class="header-pic"><img src="' + people_en[i][0] + '"></div>';
        teamLjp += '<div class="header-name" style="text-align:left;">' + people_en[i][1] + '</div>';
        teamLjp += '</div>';
        teamLjp += '<div class="ljp-text english_text">' + people_en[i][2] + '</div>';
        teamLjp += '</div>';
    }
    $('.team-ljp').empty().append(teamLjp);


    var future_wrap = '';
    for( var j = 0; j < future_arr_en.length; j++ ) {
        future_wrap += '<div class="future_item future_item_en">'+
            '<div class="future_header">'+
            '<div class="img_box">'+
            '<img src="'+ future_arr_en[j].img +'"></div>'+
            '</div>'+
            '<div class="future_des">'+
            '<h3>'+ future_arr_en[j].title +'</h3>'+
            '<p>'+ future_arr_en[j].des +'</p>'+
            '</div>'+
            '</div>';
    }
    $('#future_wrap').empty().append(future_wrap);


    var JF_cn = "ft" + self.location.hostname.toString().replace(/\./g, "")
    var BodyIsFt = getCookie(JF_cn) || '2';
    setCookie(JF_cn, BodyIsFt, 7);

    if( BodyIsFt == '1' ) {
        setCookie(JF_cn, BodyIsFt, 7);
        window.location.href = 'index.html';
    }
    if( BodyIsFt == '2') {

    }
    var _toggle_language = $('#toggle_language');
    if( _toggle_language ) {
        _toggle_language.click(function () {
            BodyIsFt = '1';
            setCookie(JF_cn, BodyIsFt, 7);
            window.location.href = 'index.html';
        });
    }

});

