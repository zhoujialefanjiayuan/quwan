$(function() {

	//放大镜
	//获取
	var _smallImg = $("#smallImg");
	var _smallArea = $("#smallArea");
	var _bigImg = $("#bigImg");
	var _bigArea = $("#bigArea");

	//小div最多能显示的宽高，不能显示出bigImg以外的部分

	_smallArea.width(_smallImg.width() / _bigImg.width() * _bigArea.width());
	_smallArea.height(_smallImg.height() / _bigImg.height() * _bigArea.height());

	//大小图片显示的比列

	var scale = _bigImg.width() / _smallImg.width();

	//事件

	_smallImg.mouseover(function(e) {

		_smallArea.show(); //显示
		_bigArea.show();

		//移动小区域, 跟随鼠标移动
		var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
		var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;

		//判断x不超出左边界,也不超出右边界
		if(x < 0) {
			x = 0;
		} else if(x > _smallImg.width() - _smallArea.width()) {
			x = _smallImg.width() - _smallArea.width();
		}

		//判断y不超出上边界,也不超出下边界
		if(y < 0) {
			y = 0;
		} else if(y > _smallImg.height() - _smallArea.height()) {
			y = _smallImg.height() - _smallArea.height();
		}

		_smallArea.css({
			left: x,
			top: y
		});

		//移动大图
		_bigImg.css({
			left: -x * scale,
			top: -y * scale
		});

	})

	//鼠标移出
	_smallImg.mouseleave(function() {
		_smallArea.hide(); //隐藏小区域
		_bigArea.hide()
	})

	//动态获取图片

	var id = location.search.substring(1);

	 $.getJSON("/static/json/mid.json", function(data) {

	for(var i = 0; i < data.length; i++) {
		if(data[i].id == id) {
		$(".show_list_ul li").eq(0).children("img").attr("src", data[i].bg);
			$(".show_list_ul li").eq(1).children("img").attr("src", data[i].bg1);

			$("#smallImg").css("background", "url(" + data[i].src);

			$("#bigImg").attr("src", data[i].src)
			$(".shop_single").html(data[i].single)
			$(".shop_price").html(data[i].price)
 			$(".shop_explain").html(data[i].explain)


		}
		}
	 })


	$(".show_list li img").mouseenter(function() {
			// index = $(this).index() + 1;
			// $(this).css("border", "1px solid red").siblings().css("border", "none");
			// $("#smallImg").css("background", "url(midpic/" + index + ".jpg)");
			// $("#bigImg").attr("src", "midpic/" + index + ".jpg")
            srcneed = $(this).attr("src")
		    console.log(srcneed)
			$(this).parent().css("border", "1px solid red").siblings().css("border", "none");
			$("#smallImg").css("background","url(" + srcneed +')');
			$("#bigImg").attr("src", srcneed)
		    $("#bigImg").show()

		})
		//放大镜end

	//购物车start
	text = $('.load').html()
	console.log(text)
	if(text=='登录'){$(".shop_shoping").click(function () {
		$(".loading").css({"display": "block"})
    })
	 	}
	else {
        $(".shop_shoping").click(function ( e) {

            //		var arr = [];
            //				//obj1
            //				var obj1 = {};
            //				obj1.name = $(".shop_name").html();
            //				obj1.explain = $(".shop_explain").html();
            //				obj1.price = $(".shop_price").html();
            //				obj1.num = 1;
            //				arr.push(obj1);
            //
            //				//$.cookie("obj", JSON.stringify(arr), {expires:7, path:"/"});
            //				$.cookie("obj",JSON.stringify(arr),{expires:10,path:"/"})
            //				console.log( $.cookie("obj") );

            var goodsList = $.cookie("obj") ? JSON.parse($.cookie("obj")) : [];
            var goodsName = $(".shop_explain").html();
            var isExists = false; //表示是否存在相同商品

            for (var i = 0; i < goodsList.length; i++) {
                //如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
                if (goodsName == goodsList[i].explain) {
                    goodsList[i].num++;
                    isExists = true; //表示存在相同商品
                }
            }

            //如果不存在相同商品, 则添加新商品
            if (!isExists) {
                //添加一个新商品到购物车
                var goods = {

                    single: $(".shop_single").html(),
                    price: $(".shop_price").html(),
                    explain: $(".shop_explain").html(),

                    num: 1
                }
                goodsList.push(goods);
            }

            $.cookie("obj", JSON.stringify(goodsList), {
                expires: 22,
                path: "/"
            });
            console.log($.cookie("obj"));

            var x = e.pageX;
            var y = e.pageY;
            var moveImg = new Move(x, y);
            moveImg.fly()
			//点击传参到服务器，存储cart数据
			var  instr = $(this).attr('id')
			$.get('/addcart/',{'instr':instr},function (re) {
				console.log(re)
            })

        })
        //end
        function Move(x, y) {
            //节点属性
            this.ele = $("<img class='moveImg'>");
            this.ele.attr("src", "/static/midpic/1.jpg"); //图片
            this.ele.css({
                "left": x,
                "top": y
            });
            $("body").append(this.ele);

            //飞的方法
            this.fly = function () {
                var self = this;
                //飞
                this.ele.animate({
                    left: 1230,
                    top: 30,
                    width: 10,
                    height: 10
                }, 1000, function () {

                    $(".moveImg").remove()
                    console.log("完成")
                });
            }

        }
    }

	//购物车end

})