$(document).ready(function(){
  $('.slick-carousel').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  autoplaySpeed:5000,
  slidesToShow: 1,
  fade:true,
  arrows:false,
  pauseOnHover:true
  // nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
  // prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',

	});

  $('.event-carousel').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slideToScroll:1,
  arrows:false,
  autoplay:true,
  pauseOnHover:true
  // nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
  // prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',

	});

  $('.team-carousel').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  autoplaySpeed:5000,
  slidesToShow: 1,
  fade:true,
  arrows:false,
  pauseOnHover:true
  // nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
  // prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',

  });


  $('.gallery-carousel').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slideToScroll:1,
  arrows:false,
  autoplay:true,
  pauseOnHover:true,
  // nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
  // prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',
  responsive: [
  {
  	breakpoint:900,
  	settings:{
  		slidesToShow: 3,
  		slideToScroll:1
  	}
  },
  {
  	breakpoint:700,
  	settings:{
  		slidesToShow: 2,
  		slideToScroll:1,
  		centerMode:true,
  		centerPadding:'10px',
  		initialSlide:1
  	}
  },
  {
  	breakpoint:600,
  	settings:{
  		slidesToShow: 1,
  		slideToScroll:1,
  		centerMode:true,
  		centerPadding:'70px',
  		initialSlide:1
  	}
  },
  {
  	breakpoint:480,
  	settings:{
  		slidesToShow: 1,
  		slideToScroll:1,
  		centerMode:true,
  		centerPadding:'20px',
  		initialSlide:1
  	}
  },
  {
  	breakpoint:400,
  	settings:{
  		slidesToShow: 1,
  		slideToScroll:1,
  		centerMode:true,
  		centerPadding:'40px'
  	}
  },
  {
  	breakpoint:340,
  	settings:{
  		slidesToShow: 1,
  		slideToScroll:1,
  		centerMode:true,
  		centerPadding:'30px'
  	}
  }
  ]

	});
});
