$(document).ready(function(){

	if ( $('.slider-hero').length ) {
		$(".slider-hero").slick({
			dots: true,
			arrows: false
		});
	}

	$(".testimonials-slider").slick({
		dots: true,
		arrows: true
	});

	$('.tabs li').on('click', function() {
		let childId = $(this).attr('tab');
		let selectedChild = $(`#${childId}`);

		console.log(selectedChild);

		$(this).addClass('active').siblings().removeClass('active');
		selectedChild.addClass('show').siblings().removeClass('show');
	});
	$(".sonic-btn").on("click", function(e){
		e.preventDefault();
		let sonicProduct = $(".sonic");
		let allProducts = $(".our-products .product");
		allProducts.addClass("none")
		sonicProduct.removeClass("none")
	})
	$(".batman-btn").on("click", function(e){
		e.preventDefault();
		let batmanProduct = $(".batman");
		let allProducts = $(".our-products .product");
		allProducts.addClass("none")
		batmanProduct.removeClass("none")
	})
	$(".halo-btn").on("click", function(e){
		e.preventDefault();
		let haloProduct = $(".halo");
		let allProducts = $(".our-products .product");
		allProducts.addClass("none")
		haloProduct.removeClass("none")
	})
	$(".all-btn").on("click", function(e){
		e.preventDefault();
		let allProducts = $(".our-products .product");
		allProducts.removeClass("none")
	})
});