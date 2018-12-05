$(function() {
	$("body").css("background", "#f3ebde")

	//头部开始
	$(".nav_list li").mouseenter(function() {
		$(this).children(".active").show().parent().siblings().children(".active").hide()
	})

	$(".nav_list li").mouseleave(function() {
		$(this).children(".active").hide()
	})

	//div
	$(".active").mouseenter(function() {
		$(this).css({
			"display": "block"
		})
	})
	$(".active").mouseleave(function() {
		$(this).css("display", "none")
	})

	var headTop = 50;
	//console.log("top =" +headTop)

	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		//console.log(scrollTop)
		if(scrollTop >= headTop) {
			$("#head").css({
				"position": "fixed",
				"top": 0,
				"z-index": "2"
				
			})
			$(".nava").css({
				"position": "fixed",
				"top": 50,
				"z-index": "2"
				
			})
		} else {
			$("#head").css({
				"position": "static"
			})
			$(".nava").css({
				"position": "static"
			})
		}

	})

	//登录部分
	$(".load").click(function() {
		$(".loading").css({"display": "block"})
	})
	$(".load_close").click(function() {
		$(".loading").css({"display": "none"})
	})



	// $(".load_enter").click(function() {
    //
	// 	var users = $.cookie("users");
	// 	if(users) {
    //
	// 		users = JSON.parse(users); //cookie中的所有注册过的用户
    //
	// 		var isExists = false; //表示是否存在该用户
	// 		for(var i = 0; i < users.length; i++) {
	// 			if(users[i].name == $(".load_user_text").val() && users[i].pwd == $(".load_user_paw").val()) {
	// 				console.log(" 登录成功! ");
	// 				alert("登录成功")
	// 				isExists = true;
	// 			}
	// 		}
    //
	// 		if(!isExists) {
	// 			alert("用户名或密码错误, 请重新输入!");
    //
	// 		}
    //
	// 	} else {
	// 		alert("不存在用户, 请先注册!");
	// 	}
	// })

	//登录部分end

	//注册
		 
	$(".cookie").click(function() {
		$(".add").css({"display":"block"})
		$("._add").css({"opacity":1})
	})
	$(".add_close").click(function() {
		$(".add").css("display", "none")
	})


	$.idcode.setCode(); 
//	var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
//	    if(IsBy){
//	            console.log("验证码输入正确")
//	        }else {
//	            $("#Txtidcode").val("输入错误")
//	    }
	
	// $(".add_new").click(function() {
    //
	// 	//注册(cookie存储)
	// 	var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
	// 	//先判断是否存在该用户
	// 	for(var i = 0; i < users.length; i++) {
	// 		if(users[i].name == $(".add_user_text").val()) {
	// 			console.log("用户名已存在! 不能注册相同的用户");
	// 			alert("用户名已存在! 不能注册相同的用户")
	// 			return;
	// 		}
	// 	}
    //
	// 	var username = $(".add_user_text").val();
	// 	var reg = /^[a-zA-Z_][a-zA-z0-9_]{5,14}/;
	// 	var result = reg.test(username)
	//
	//
	//     var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
	//     if(IsBy){
	//             console.log("验证码输入正确")
	//         }else {
	//             $("#Txtidcode").val("输入错误")
	//     }
	//     var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
	// 	if(result == true && IsBy == true) {
	// 		var user = {
	// 			name: $(".add_user_text").val(),
	// 			pwd: $(".add_user_paw").val()
	// 		}
	// 		users.push(user);
    //
	// 		$.cookie("users", JSON.stringify(users), {
	// 			expires: 22,
	// 			path: "/"
	// 		});
	// 		console.log($.cookie("users"));
	// 		alert("注册成功")
	// 	}else {
	// 		$(".add_user_text").val("请重新输入")
	// 	}
    //
	// })
    //
	// //注册end

	//UPDOWN

	//var up = $("<div>下班了，给我们留言把</div>")
	$(".add").after($("<div class='up'>下</br>班</br>了</br>，</br>给</br>我</br>们</br>留</br>言</br>把</div>"))

	$(".up").css({
		"position": "fixed",
		"right": 0,
		"top": 100,
		"z-index": "2",
		"width": "40",
		"height": "200",
		"background": "red",
		"text-align": "center",
		"padding-top": "20px",
		"color": "white"
	})
	

	//头部结束

})