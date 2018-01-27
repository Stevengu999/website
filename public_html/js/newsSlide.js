/**
 * Created by lenovo on 2018/1/26.
 */
$(function () {
    var step = 40;
    var current = 0;
    var tid;
    var index = 0;
    var domL;

    var _breakingnews = $('#breakingnews');
    domL = _breakingnews.children().length;

    _breakingnews.children().eq(0).clone().appendTo(_breakingnews);

    function next(dom) {
        index += 1;
        current = - step * index;
        dom.animate({ top: current }, 500, function () {
            if( index == domL ) {
                _breakingnews.css({top: 0});
                index = 0;
            }
        });
    }

    function initSlide(delay) {
        var delay = delay || 3000;
        clearInterval(tid);
        tid = setInterval(function () {
            next(_breakingnews);
        }, delay)
    }

    _breakingnews.hover(function () {
        clearInterval(tid);
    }, function () {
        initSlide();
    })

    initSlide();

});