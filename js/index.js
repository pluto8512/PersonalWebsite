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

        // 获取按钮，linkme的数据交互
        $('#tumi_submit').on('click',function(){
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            console.log(name);
            console.log(email);
            console.log(message);
            $.ajax({
                url: './back/link.php',
                type:'post',
                data:{
                    name:name,
                    email:email,
                    message:message
                },
                success:function(data) {
                    if(data==1){
                        alert('提交成功')
                    }else{
                        alert('提交失败')
                    }
                },
                error:function(){
                    console.log('错误');
                }
            })
        })

        // 初始化tabs
        initTabs();
    });
})();

/*初始化tabs*/
function initTabs(){
    /*设置父容器的宽度  等于 所有的子容器的宽度 的和*/
    var ul = $('.tumi-demo .nav-tabs-tumi');
    var lis = ul.find('li');

    var width = 0;

    $.each(lis,function(i,o){
        /*通过width 只获取到了 内容的宽度*/
        /* innerWidth() 内容+内边距*/
        /* outerWidth() 内容+内边距+边框*/
        /* outerWidth(true) 内容+内边距+边框+外边距*/
        width += $(o).innerWidth();
    })
    ul.width(width);
    console.log(ul.width());


    /*实现在移动端的滑动*/
    console.log($('.tumi_product_tabsParent').get(0));
    tumi.iScroll({
        swipeDom:$('.tumi_product_tabsParent').get(0),
        swipeType:'x',
        swipeDistance:50
    });

}