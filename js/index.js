/**
 * Created by tutumissed on 2016/12/31.
 */
(function () {
    $(document).ready(function () {
        //获取图片的宽度，然后初始化父盒子的值
        $("#carousel-example-generic2").css('height',$('#img_mobile').css("height"));
        //获取图片的宽度，然后动态改变父盒子的值，解决浮动的影响
        $(window).resize(function() {
            $("#carousel-example-generic2").css('height',$('#img_mobile').css("height"));
        });
    });
})();
