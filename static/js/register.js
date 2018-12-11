$(function () {

    var email=false
    $(".add_user_text").blur(function () {
       if ($(this).val() == '') return
        var reg =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (reg.test( $(this).val() )){ // 符合要求
            console.log("123456")
            $.get('/checkemail',{'email':$(this).val()},function (re) {
                if (re.statu){
                    $('#help1').removeClass('red').addClass('green')
                     $('#help1').html('该邮箱可用')
                    email=true
                }
               else {$('#help1').removeClass('green').addClass('red')
                      $('#help1').html('该邮箱已注册')}

            })

        } else {    // 不符合要求
           $('#help1').removeClass('green').addClass('red')
             $('#help1').html('邮箱格式输入错误')
        }
         if(email && name && pass){
        $('.add_new').removeAttr('disabled')}
    })
    //验证名字

    var name = false
    $('.add_user_use').blur(function () {
        if ($(this).val() == '') return

        if ($(this).val().length >=3 && $(this).val().length <=10){ // 符合要求
            $('#help2').removeClass('red').addClass('green')
            name = true
        } else {    // 不符合要求
           $('#help2').removeClass('green').addClass('red')

        }
         if(email && name && pass){
        $('.add_new').removeAttr('disabled')}
    })
     //验证密码
    var pass =false
   $('.add_user_paw').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z\d_]{6,12}$/
        if (reg.test($(this).val())){   // 符合
             $('#help3').removeClass('red').addClass('green')
            pass = true
        } else {   // 不符合
             $('#help3').removeClass('green').addClass('red')
        }
        if(email && name && pass){
        $('.add_new').removeAttr('disabled')}
    })

    //判断是否可以提交注册
    // if(email && name && pass){
    //     $('.add_new').removeAttr('disabled')
    // }




})