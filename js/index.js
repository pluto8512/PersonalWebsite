/**
 * Created by tutumissed on 2016/12/31.
 */
(function () {
    $(document).ready(function () {
        //��ȡͼƬ�Ŀ�ȣ�Ȼ���ʼ�������ӵ�ֵ
        $("#carousel-example-generic2").css('height',$('#img_mobile').css("height"));
        //��ȡͼƬ�Ŀ�ȣ�Ȼ��̬�ı丸���ӵ�ֵ�����������Ӱ��
        $(window).resize(function() {
            $("#carousel-example-generic2").css('height',$('#img_mobile').css("height"));
        });
    });
})();
