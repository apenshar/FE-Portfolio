"use strict";

$(document).ready(function () {

    Date.prototype.Format = function (fmt) {
        //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return fmt;
    };

    function newtime() {
        var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
        $("#time").html(time + " GMT+0800"); //+"  GMT+0800 (中国标准时间)"
    };

    function counttime() {
        var time = new Date();
        var dead = new Date(2017, 11, 25, 0, 0, 0);
        var delta = dead.getTime() - time.getTime();
        var da = Math.floor(delta / 1000 / 60 / 60 / 24);
        var ho = Math.floor(delta / 1000 / 60 / 60 % 24);
        var mi = Math.floor(delta / 1000 / 60 % 60);
        var se = Math.floor(delta / 1000 % 60);
        // console.log('ok1');
        // console.log(da, ho, mi, se)
        $('#count').html([da, ' Day ', ho, ' Hour ', mi, ' Min ', se, ' Sec ']);
    }
    setInterval(counttime, 1000);
    setInterval(newtime, 1000);
});