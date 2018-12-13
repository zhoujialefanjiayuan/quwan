$(function() {

// 	var goodsList = $.cookie("obj")
// 	//console.log(goodsList)
//
// 	if(goodsList) {
//
// 		goodsList = JSON.parse(goodsList);
// 		//console.log(goodsList);
//
// 		for(var i = 0; i < goodsList.length; i++) {
// 			var goods = goodsList[i]; //每个商品
//
//
// //			$(".commodity").html(goods.explain);
// //			$(".price").html(goods.price);
// //			$(".total").html(goods.num);
// 			var total = parseInt(goods.single * goods.num);
// 			console.log(total)
// 			var p1= $("<p>" + goods.explain + "</p>");
// 			var p2 = $("<p>"+ goods.price +"</p>")
// 			var p3 = $("<p>"+ goods.num +"</p>")
// 			var p4 = $("<p class='single'>"+"￥"+ total +"</p>")
// 			p1.appendTo( $(".commodity") );
// 			p2.appendTo( $(".price") );
// 			p3.appendTo( $(".total") );
// 			p4.appendTo( $(".dele") );
//
// 		}
//
// 	}
//
// 	$("._dele").click(function(){
// 		$.cookie("obj", "", {expires:-1, path:"/"});
// 		$(".commodity").html(status);
// 			$(".price").html(status);
// 			$(".total").html(status);
// 			$(".dele").html(status);
// 				console.log( "删除后: " + $.cookie("obj") ); //undefined
//
// 	})
//    选中是否高亮
    $('.confirm-wrapper').click(function () {
        var $this = $(this)
        $.get('/changeisselect/',{'cartid':$(this).attr('cartid')},function (re) {
            console.log(re.isselect)

            if(re.isselect){
                $this.find('span').removeClass("no").addClass("glyphicon glyphicon-ok");
                total()


            }else{
                $this.find('span').removeClass("glyphicon glyphicon-ok").addClass("no");
                total()

            }

        })

    })

//    是否全选
    $('.all').click(function () {
        var $this = $(this)
        $.get('/selectall/',{"isall" : $this.attr('isall')},function (re) {
            console.log(re.selectall)
            if (re.selectall == "True"){
                $this.attr('isall','true')
            $this.find('span').removeClass("no").addClass("glyphicon glyphicon-ok")
                $('.confirm-wrapper span').removeClass("no").addClass("glyphicon glyphicon-ok")
                total()

                }else{
                $this.attr('isall','false')
                 $this.find('span').removeClass("glyphicon glyphicon-ok").addClass("no")
                $('.confirm-wrapper span').removeClass("glyphicon glyphicon-ok").addClass("no")
                total()
            }
        })

    })

//    商品加减
    $('.num  .glyphicon-minus').click(function () {
        $this = $(this)
        $this.parent()
        console.log(11)
        $.get('/dowmnum/',{'cartid':$this.parent().attr('cartid')},function (re) {
           if (re.num){
               $this.next().html(re.num);total()
           } else{$this.hide();$this.next().html(re.num);total()
           }
        })
    })

    $('.num .glyphicon-plus').click(function () {
        $this = $(this)
        console.log(11)
        $.get('/addnum/',{'cartid':$this.parent().attr('cartid')},function (re) {
           $this.prev().html(re.num);
            $this.prevAll().eq(1).show()
            total()
        })
    })

//    计算总价
    total()
    function total() {
         $.get('/sumprice/',function (re) {
        $('.total b').html(re.sum)
        })
    }

    // $('#generateorder').click(function () {
    //   var $this=$(this)
    //     var paymoney = $('.total b').html()
    //     $.get('/sureorder/',{'paymoney':paymoney},function (re) {
    //         window.open()
    //     })
    // //
    // })

        $.get('/orderstatu/',function (re) {
            $('#waitpay').html(re.waitpay)
            $('#payed').html(re.payed)
            $('#waitget').html(re.waitget)
            console.log(re)
        })
})