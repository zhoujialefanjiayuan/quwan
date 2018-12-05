$(function() {

	var goodsList = $.cookie("obj")
	//console.log(goodsList)
		
	if(goodsList) {

		goodsList = JSON.parse(goodsList);
		//console.log(goodsList);

		for(var i = 0; i < goodsList.length; i++) {
			var goods = goodsList[i]; //每个商品

			
//			$(".commodity").html(goods.explain);
//			$(".price").html(goods.price);
//			$(".total").html(goods.num);
			var total = parseInt(goods.single * goods.num);
			console.log(total)
			var p1= $("<p>" + goods.explain + "</p>");
			var p2 = $("<p>"+ goods.price +"</p>")
			var p3 = $("<p>"+ goods.num +"</p>")
			var p4 = $("<p class='single'>"+"￥"+ total +"</p>")
			p1.appendTo( $(".commodity") );
			p2.appendTo( $(".price") );
			p3.appendTo( $(".total") );
			p4.appendTo( $(".dele") );
		
		}

	}

	$("._dele").click(function(){
		$.cookie("obj", "", {expires:-1, path:"/"});
		$(".commodity").html(status);
			$(".price").html(status);
			$(".total").html(status);
			$(".dele").html(status);
				console.log( "删除后: " + $.cookie("obj") ); //undefined

	})
	


})