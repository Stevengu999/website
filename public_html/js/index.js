$(function () {
    $('.navbar-nav li').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active')
    })
    if(location.hash) {
        $('.navbar-nav li a').each(function (i, item) {
            $($(item).parent()).removeClass('active');
            if( $(item).attr('href') == location.hash ) {
                $($(item).parent()).addClass('active');
            }
        })
    }
});


$(function () {

    // 核心团队
    var teamLjp = '';
    // var people=new Array("img","name","text");
    for (var i = 0; i < people.length; i++) {
        teamLjp += '<div class="item team-project wow fadeIn item-ljp">';
        teamLjp += '<div class="ljp-header clearfix">';
        teamLjp += '<div class="header-pic"><img src="' + people[i][0] + '"></div>';
        teamLjp += '<div class="header-name">' + people[i][1] + '</div>';
        teamLjp += '</div>';
        teamLjp += '<div class="ljp-text">' + people[i][2] + '</div>';
        teamLjp += '</div>';
    }
    $('.team-ljp').empty().append(teamLjp);

    var future_wrap = '';
    for( var j = 0; j < future_arr.length; j++ ) {
        future_wrap += '<div class="future_item">'+
            '<div class="future_header">'+
            '<div class="img_box">'+
            '<img src="'+ future_arr[j].img +'"></div>'+
            '</div>'+
            '<div class="future_des">'+
            '<h3>'+ future_arr[j].title +'</h3>'+
            '<p>'+ future_arr[j].des +'</p>'+
            '</div>'+
            '</div>';
    }
    $('#future_wrap').empty().append(future_wrap);

    setTimeout(function () {
        StranBody();
    },StranIt_Delay);

    var JF_cn = "ft" + self.location.hostname.toString().replace(/\./g, "")
    var BodyIsFt = getCookie(JF_cn) || Default_isFT;

    if( BodyIsFt == '1' ) {

    }
    if( BodyIsFt == '2') {
        setCookie(JF_cn, BodyIsFt, 7);
        window.location.href = 'index_en.html';
    }

    var _toggle_language = $('#toggle_language');
    if( _toggle_language ) {
        _toggle_language.click(function () {
            BodyIsFt = '2';
            setCookie(JF_cn, BodyIsFt, 7);
            window.location.href = 'index_en.html';
        });
    }

});
