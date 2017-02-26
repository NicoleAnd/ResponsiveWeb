// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel({
// 		// 修改配置项
// 		// items: 1,
// 		// loop: true,
// 		// autoplay: true,
// 		// autoplayTimeout: 3000,
// 		// autoplayHoverPause: true,
// 		// autoWidth:true
// 	});

// });
$(document).ready(function() {
  
  $("#owl-demo").owlCarousel({
		items : 1, 
		loop: true,       
        singleItem : true,
        rewindSpeed : 2,
        autoPlay : 3000,
        stopOnHover : true,
        responsive : true,
        responsiveRefreshRate : 1,
        responsiveBaseWidth : window,        
  });
  
});
