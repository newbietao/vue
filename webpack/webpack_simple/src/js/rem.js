/**
 * Created by hantao on 2017/5/3.
 */
import Vue from 'vue';
(function(win) {

    let tid;
    function refreshRem() {
        let winHeight =  $(window).height();
        let count = parseInt(winHeight / 40);
        console.log(count);
    }
    win.addEventListener('resize',() => {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow',(e) => {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);