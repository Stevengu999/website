$(function () {

    // var JF_cn = "ft" + self.location.hostname.toString().replace(/\./g, "")
    // var BodyIsFt = getCookie(JF_cn)
    //
    // if( BodyIsFt == '2') {
    //     setCookie(JF_cn, BodyIsFt, 7);
    //     window.location.href = 'index_en.html';
    // }
    // if( BodyIsFt == '1' || !BodyIsFt ) {
    //     setTimeout(function () {
    //         StranBody();
    //     },StranIt_Delay);
    // }

    setTimeout(function () {
        StranBody();
    }, StranIt_Delay);

    var JF_cn = "ft" + self.location.hostname.toString().replace(/\./g, "")
    var BodyIsFt = getCookie(JF_cn) || Default_isFT;

    if( BodyIsFt == '1' ) {

    }
    if( BodyIsFt == '2') {
        // setCookie(JF_cn, BodyIsFt, 7);
        // window.location.href = 'index_en.html';
    }

});
