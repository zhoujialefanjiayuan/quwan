
$(function() {

	$.getJSON("/static/json/lunbo.json", function(data) {
		//console.log(data)
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];

			var li = $("<li></li>");

			var img = $("<img>")
				//var src = obj.src;
			img.attr("src", " " + obj.src + " ")

			li.append(img)
				//tr.append(td1, td2, td3, td4, td5, td6);

			$(".move").append(li);
		}

	})

	var $box = $(".driving");
	var $pic = $(".move");

	var len = $pic.children("li").length;
	//console.log(len)
	//show()
	var timer = setInterval(animation, 2000);

	$box.on('mouseenter', function() {
		clearInterval(timer);
	}).on('mouseleave', function() {
		timer = setInterval(animation, 2000)
	})

	//上一页
	$("#left").click(function() {
		index--;
		if (index <0) {
			index = 3
		}
		show();
	})

	//下一页
	$("#right").click(function() {
		index++;
		show();
	})

	var index = 0;

	function animation() {
		index++;
		show()
	}

	function show() {
		if(index == 4) {
			index = 0
		}
		$pic.children("li").eq(index).animate({
			opacity: 1
		}).siblings("li").animate({
			opacity: 0
		})
	}

	$.getJSON("/static/json/mid.json", function(data) {
		//for(var i = 0; i < data.length; i++) {
		//	var obj = data[i];
		var a = $("<a href='shop.html"+"?"+data[0].id+"'></a>")
		var a1 = $("<a href='shop.html"+"?"+data[1].id+"'></a>")
		var a2 = $("<a href='shop.html"+"?"+data[2].id+"'></a>")

		var img = $("<img>");
		var img1 = $("<img>")
		var img2 = $("<img>")

		img.attr("src", " " + data[0].src + " ");
		img1.attr("src", " " + data[1].src + " ")
		img2.attr("src", " " + data[2].src + " ")

		a.append(img)
		a1.append(img1)
		a2.append(img2)

		var h4 = $("<h4>" + data[0].name + "</h4>");
		var h41 = $("<h4>" + data[1].explain + "</h4>");
		var h42 = $("<h4>" + data[2].explain + "</h4>");

		var p = $("<p>￥ 1888.00</p>");
		var p1 = $("<p>￥ 1888.00</p>");
		var p2 = $("<p>￥ 1888.00</p>");

		$(".right_pic2_1").append(a1, h41, p1);
		$(".right_pic2_2").append(a, h4, p);
		$(".right_pic2_3").append(a2, h42, p2);
		
		$(".right_pic2 img").mouseenter(function(){
			
			$(this).animate({top:-5},100)
		}).mouseleave(function(){
			$(this).animate({top:0},100)
		})
	

		//}

	})

	$.getJSON("/static/json/mid_right.json", function(data) {
			var a = $("<a href='#'></a>")

			var img = $("<img>");

			img.attr("src", " " + data[0].src + " ");

			a.append(img);

			var h4 = $("<h4>" + data[0].h4 + "</h4>");
			var p = $("<p>" + data[0].p + "</p>");
			$(".right_pic3_2").append(a, h4, p);
		})
		//location.href = "shop.html?id="+"1";
		
	

})