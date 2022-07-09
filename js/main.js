const header = document.querySelector(".header");

window.addEventListener("scroll", function(e) {
   let scrollPos = window.scrollY;
   if(header){
			if(scrollPos > 0) {
            header.classList.add("active");
			} else {
            header.classList.remove("active")
			}
   }
});

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
   const headerMenu = document.querySelector('.header-block__fixed');
   menuBurger.addEventListener("click", function (e) {
			menuBurger.classList.toggle('_active');
			headerMenu.classList.toggle('_active');
			document.body.classList.toggle('_actived')
   });
	document.addEventListener('click', function (event) {
		if (event.target.classList.contains('header-block__fixed')) {
			menuBurger.classList.remove('_active');
			headerMenu.classList.remove('_active');
			document.body.classList.remove('_actived')
		}
	})

// const menuBurger = document.querySelector('.menu__burger');
// if (menuBurger) {
//    const headerMenu = document.querySelector('.header-block__fixed');
// 	const headerMenuClose = document.querySelector('.header-block__close');
// 	headerMenuClose.addEventListener('click', function () {
// 		menuBurger.classList.remove('_active');
//       headerMenu.classList.remove('_active');
// 		document.body.classList.remove('_actived')
// 	});
//    menuBurger.addEventListener("click", function (e) {
// 			menuBurger.classList.toggle('_active');
// 			headerMenu.classList.toggle('_active');
// 			document.body.classList.toggle('_actived')
//    });
// 	document.addEventListener('click', function (event) {
// 		if (event.target.classList.contains('header-block__fixed')) {
// 			menuBurger.classList.remove('_active');
// 			headerMenu.classList.remove('_active');
// 			document.body.classList.remove('_actived')
// 		}
// 	})
}

$(document).on("click", function(event){
   var target = event.target;
   if( !$(target).hasClass('menu__link') ){
      $('.menu-two').slideUp();
      $('.list-icon').removeClass('active');
   }
});
$('.menu__link').on("click", function(){
   $(this).siblings('.menu-two').slideToggle();
   $(this).parent('.list-icon').toggleClass('active');
});

$(document).on("click", function(event){
   var target = event.target;
   if( !$(target).hasClass('lang_choice') ){
      $('.other_lang').slideUp();
      $('.lang_block').removeClass('active');
   }
});
$('.lang_choice').on("click", function(){
   $(this).siblings('.other_lang').slideToggle();
   $(this).parent('.lang_block').toggleClass('active');
});

const tabsBtn = document.querySelectorAll('.tabs-btn');
const tabItems = document.querySelectorAll('.tabs__row');
tabsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {

			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
		// } else {
		// 	tabsBtn.forEach(function (item) {
		// 		item.classList.remove('active');
		// 	});
		// 	tabItems.forEach(function (item) {
		// 		item.classList.remove('active');
		// 	});
		// }
	});
});


// const time = 2000;
// const step = 1;
// let blockCounter = document.getElementById('counter')
// let mainBlockCounter = document.querySelectorAll('.main-block__counter');
// mainBlockCounter.forEach((elem) => {
//     let blockCounterData = elem.getAttribute('data-number');
//     function outNum(num, element) {
//         let i = element;
//         n = 0;
//         let t = Math.round(time / (num / step));
//         let interval = setInterval(() => {
//             n = n + step;
//             if (n == num) {
//                 clearInterval(interval);
//             }
//             i.innerHTML = n;
//         }, t);
//     }
//     outNum(blockCounterData, elem)
// });

var time = 1;

$('#counter').each(function() {
    $('div').each(function () {
        let i = 1;
        let num = $(this).data('number');
        let step = Math.round(1000 * (time / num));
        let that = $(this);
        let int = setInterval(function () {
            if(i <= num) {
                that.html(i);
            } else {
                clearInterval(int)
            }
            i = i + 3;
        }, step);
    });
});

$('.acting-right__item').each(function () {
    $(this).click(() => {
		if(!$(this).next().hasClass('active')) {
				$(this).next().addClass('active');
				$(this).addClass('active');
				$(this).next().slideDown( "ease", function() {});
		} else {
			$(this).next().removeClass('active');
			$(this).removeClass('active');
			$(this).next().slideUp( "ease", function() {});
		}
     
      //   } else {
      //       $(this).next().removeClass('active');
      //       $(this).next().slideUp( "ease", function() {
      //       });
		// }
	});
});

const tabsTwoBtn = document.querySelectorAll('.courses-bottom__list');
const tabTwoItems = document.querySelectorAll('.courses-bottom__row');
tabsTwoBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-courses');
		let currentTab = document.querySelector(tabId);
		if (!currentBtn.classList.contains('active')) {
			tabTwoItems.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsTwoBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
});

$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-4.673e-05 8.49996C-4.673e-05 8.69759 0.0732651 8.89541 0.219703 9.04628L7.7197 16.7735C8.01277 17.0755 8.48733 17.0755 8.7802 16.7735C9.07308 16.4716 9.07327 15.9827 8.7802 15.6809L1.81045 8.49996L8.7802 1.31902C9.07327 1.01708 9.07327 0.528135 8.7802 0.226385C8.48714 -0.0753651 8.01258 -0.0755577 7.7197 0.226385L0.219703 7.95365C0.0732651 8.10452 -4.673e-05 8.30234 -4.673e-05 8.49996Z" fill="#FF335A"/></svg></span></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00005 8.49996C9.00005 8.69759 8.92673 8.89541 8.7803 9.04628L1.2803 16.7735C0.987234 17.0755 0.512672 17.0755 0.219797 16.7735C-0.0730781 16.4716 -0.0732656 15.9827 0.219797 15.6809L7.18955 8.49996L0.219797 1.31902C-0.0732656 1.01708 -0.0732656 0.528135 0.219797 0.226385C0.512859 -0.0753644 0.987421 -0.0755576 1.2803 0.226385L8.7803 7.95365C8.92673 8.10452 9.00005 8.30234 9.00005 8.49996Z" fill="#FF335A"/></svg></span></button>',
		// autoplay: true,
		// autoplaySpeed: 800,
	});
});

$(document).ready(function () {
	$('.slider-two').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L1 13L13 25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L13 13L1 25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		// autoplay: true,
		// autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
});

$(document).ready(function () {
	$('.news__slider').slick({
		autoplay: true,
		arrows: true,
		fade: true,
		Infinity: true,
		dots: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L1 9.5L10 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 9.5L1 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		// autoplay: true,
		// autoplaySpeed: 800,
	});
});

$(document).ready(function () {
	$('.players-bottom__slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L1 13L13 25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L13 13L1 25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
});

$(document).ready(function () {
	$('.reviews__slider').slick({
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-4.673e-05 8.49996C-4.673e-05 8.69759 0.0732651 8.89541 0.219703 9.04628L7.7197 16.7735C8.01277 17.0755 8.48733 17.0755 8.7802 16.7735C9.07308 16.4716 9.07327 15.9827 8.7802 15.6809L1.81045 8.49996L8.7802 1.31902C9.07327 1.01708 9.07327 0.528135 8.7802 0.226385C8.48714 -0.0753651 8.01258 -0.0755577 7.7197 0.226385L0.219703 7.95365C0.0732651 8.10452 -4.673e-05 8.30234 -4.673e-05 8.49996Z" fill="#FF335A"/></svg></span></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00005 8.49996C9.00005 8.69759 8.92673 8.89541 8.7803 9.04628L1.2803 16.7735C0.987234 17.0755 0.512672 17.0755 0.219797 16.7735C-0.0730781 16.4716 -0.0732656 15.9827 0.219797 15.6809L7.18955 8.49996L0.219797 1.31902C-0.0732656 1.01708 -0.0732656 0.528135 0.219797 0.226385C0.512859 -0.0753644 0.987421 -0.0755576 1.2803 0.226385L8.7803 7.95365C8.92673 8.10452 9.00005 8.30234 9.00005 8.49996Z" fill="#FF335A"/></svg></span></button>',
		// autoplay: true,
		// autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});

$(document).ready(function () {
	$('.search-mentor__slider').slick({
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick_arrow slick_prev"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-4.673e-05 8.49996C-4.673e-05 8.69759 0.0732651 8.89541 0.219703 9.04628L7.7197 16.7735C8.01277 17.0755 8.48733 17.0755 8.7802 16.7735C9.07308 16.4716 9.07327 15.9827 8.7802 15.6809L1.81045 8.49996L8.7802 1.31902C9.07327 1.01708 9.07327 0.528135 8.7802 0.226385C8.48714 -0.0753651 8.01258 -0.0755577 7.7197 0.226385L0.219703 7.95365C0.0732651 8.10452 -4.673e-05 8.30234 -4.673e-05 8.49996Z" fill="#FF335A"/></svg></span></button>',
		nextArrow: '<button type="button" class="slick_arrow slick_next"><span><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00005 8.49996C9.00005 8.69759 8.92673 8.89541 8.7803 9.04628L1.2803 16.7735C0.987234 17.0755 0.512672 17.0755 0.219797 16.7735C-0.0730781 16.4716 -0.0732656 15.9827 0.219797 15.6809L7.18955 8.49996L0.219797 1.31902C-0.0732656 1.01708 -0.0732656 0.528135 0.219797 0.226385C0.512859 -0.0753644 0.987421 -0.0755576 1.2803 0.226385L8.7803 7.95365C8.92673 8.10452 9.00005 8.30234 9.00005 8.49996Z" fill="#FF335A"/></svg></span></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 1,
				},
			},
			// {
			// 	breakpoint: 500,
			// 	settings: {
			// 		slidesToShow: 2,
			// 	},
			// },
		],
	});
});

let cardAnimatinon = document.querySelectorAll('.prompt-row__column');

cardAnimatinon.forEach((elem) => {
	elem.addEventListener('click', function(event) {
		elem.classList.add('active')
		if(event.target.classList.contains('prompt-row__link')) {
			elem.classList.remove('active')	
		}
	});
})

let sliderOne = document.querySelector('.swiper-container');
let sliderTwo = document.querySelector('.swiper-container2');
let sliderThree = document.querySelector('.swiper-container3');
let sliderFour = document.querySelector('.swiper-container4');


let swiperOne = new Swiper(sliderOne, {
	effect: 'coverflow',
	speed: 800,
	grabCursor: true, 
	slidesPerView: 2.24,
	spaceBetween: -150,
	centeredSlides: true,
	loop: true,
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		stretch: 0,
		depth: 200,
		modifier: 2.5,
		// slideShadows: true,
	},
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		1590: {
			slidesPerView: 2.24,
			spaceBetween: -150,
			coverflowEffect: {
				depth: 200,
				modifier: 2.5,
			},
		},
		1440: {
			slidesPerView: 2,
			spaceBetween: -100,
			coverflowEffect: {
				modifier: 2.3,
				depth: 300,
			},
		},
		1199: {
			slidesPerView: 2.21,
			spaceBetween: -100,
			coverflowEffect: {
				modifier: 2,
				depth: 250,
			},
		},
		500: {
			slidesPerView: 2.2,
			spaceBetween: -100,
			coverflowEffect: {
				modifier: 2,
				depth: 250,
			},
		},
		300: {
			slidesPerView: 3,
			spaceBetween: -100,
			coverflowEffect: {
				modifier: 3,
				depth: 300,
			},
		},
	},
});

let swiperTwo = new Swiper(sliderTwo, {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: false,
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		992: {
			spaceBetween: 20,
		},
		720: {
			spaceBetween: 15,
			slidesPerView: 3,
		},
		400: {
			spaceBetween: 15,
			slidesPerView: 2,
		},
		100: {
			spaceBetween: 15,
			slidesPerView: 1,
		},
	},
});	

let swiperThree = new Swiper(sliderThree, {
	slidesPerView: 1.8,
	spaceBetween: 200,
	speed: 800,
	loop: true,
	freeMode: false,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		1000: {
			slidesPerView: 1.8,
			spaceBetween: 200,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 150,
		},
		575: {
			slidesPerView: 1.6,
			spaceBetween: 100,
		}, 
		300: {
			slidesPerView: 1,
			spaceBetween: 100,
		}, 
	},
});	
var swiper = new Swiper(sliderFour, {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 5,
	freeMode: false,
	watchSlidesProgress: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 5,
		},
		768.98: {
			slidesPerView: 4,
		},
		570: {
			slidesPerView: 5,
		},
		450: {
			slidesPerView: 4,
		},
		300: {
			slidesPerView: 3,
		}
	},
});
var swiper2 = new Swiper(".swiper-container5", {
	loop: true,
	spaceBetween: 10,
	speed: 1200,
	thumbs: {
		swiper: swiper,
	},
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
});

let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
			let text = this.innerText,
				select = this.closest('.select'),
				currentText = select.querySelector('.select__current');
			currentText.innerText = text;
			select.classList.remove('is-active');

	}

};
select();


let formBlock = document.getElementById('form');
let formTwo = document.getElementById('form__two');
if (formBlock) {
	$('#form').validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			name: {
				required: true,
				minlength: 3,
			},
			// checked: {
			// 	required: true,
			// }
			password: {
				required: true,
				minlength: 5,
			},
			password_again: {
				required: true,
				equalTo: "#password"
			}
		},
		messages: {
			email: {
				required: 'Поле email обязательно для заполнения',
				email: 'Поле email не корректно заполнено'
			},
			name: {
				required: 'Имя обьязательно должно быт заполнено',
				minlength: 'Длина имени должно быть более 3-х символов',
			},
			password_again: {
				required: 'Введите пароль',
				equalTo: "Пожалуйста, введите то же значение еще раз"
			},
			password: {
				required: 'Введите пароль',
				minlength: 'Не надежный пароль, введите минимум 5 символов',
			},
		}
	});
	$(document).ready(function () {
		$("#inputPhone").mask("8 (999) 999-99-99");
		$("#phone").mask("8 (999) 999-99-99");
	});
}
if (formTwo) {
	$('#form__two').validate({
		rules: {
			name: {
				required: true,
				minlength: 3,
			},
			text: {
				required: true,
				minlength: 3,
			},
			nomer: {
				required: true,
				minlength: 11,
			},
			password: {
				required: true,
				minlength: 5,
			},
			passwor1: {
				required: true,
				minlength: 5,
			},
			password_again: {
				required: true,
				equalTo: "#password"
			}
		},
		messages: {
			name: {
				required: 'Имя обьязательно должно быт заполнено',
				minlength: 'Длина имени должно быть более 3-х символов',
			},
			nomer: {
				required: 'Соц сеть обьязательно должно быт заполнено',
				minlength: 'Длина номера должно быть более 11-х цифров',
			},
			text: {
				required: 'Форма обьязательно должно быт заполнено',
				minlength: 'Длина имени должно быть более 3-х символов',
			},
			password_again: {
				required: 'Введите пароль',
				equalTo: "Пожалуйста, введите то же значение еще раз"
			},
			password: {
				required: 'Введите пароль',
				minlength: 'Не надежный пароль, введите минимум 5 символов',
			},
			password1: {
				required: 'Введите старый пароль',
				minlength: 'Не надежный пароль, введите минимум 5 символов',
			},
		}
	});
	$(document).ready(function () {
		$("#phone").mask("8 (999) 999-99-99");
	});
}

let clickPassword = document.querySelectorAll('.registration-form__password');
clickPassword.forEach((elem) => {
	let passClick = elem.querySelector('.registration__input');
	let passBtn = elem.querySelector('.password-control')
	passBtn.addEventListener('click', function() {
		if(!passBtn.classList.contains('active')) {
			passBtn.classList.add('active');
			passClick.type = "text";
		} else {
			passBtn.classList.remove('active');
			passClick.type = "password";
		}
	});
});

const imgDiv = document.querySelector('.profile-image');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

// imgDiv.addEventListener('mouseenter', function(){
//    uploadBtn.style.display = "block";
// });
// imgDiv.addEventListener('mouseleave', function(){
//    uploadBtn.style.display = "none";
// });
if(imgDiv) {
	file.addEventListener('change', function(){
		const choosedFile = this.files[0];
		if (choosedFile) {
			const reader = new FileReader();
			reader.addEventListener('load', function(){
				if(!img.classList.contains('active')) {
					img.classList.add('active');
				}
				img.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(choosedFile);
		}
	});
}


let editBlock = document.querySelectorAll('.profile-bottom__item')
if (editBlock) {
	editBlock.forEach((elem) => {
		let editBtn = elem.querySelector('.profile-bottom__edit');
			editBtn.addEventListener('click', function () {
				let editInput = elem.querySelectorAll('.input');
				if (!editBtn.classList.contains('active')) {
					editBtn.classList.add('active');
					console.log(editInput)
					editInput.forEach((el) => {
						el.classList.add('active');
						el.removeAttribute('readonly')
					});
				} else {
					editBtn.classList.remove('active')
					editInput.forEach((el) => {
						el.classList.remove('active');
						el.setAttribute('readonly', 'true')
					});
				}
			});
	})
}

const profileTabsBtn = document.querySelectorAll('.profile-right__tab');
const profileTabItems = document.querySelectorAll('.profile-right__item');
profileTabsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-click');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {

			profileTabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			profileTabItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
		// } else {
		// 	profileTabsBtn.forEach(function (item) {
		// 		item.classList.remove('active');
		// 	});
		// 	tabItems.forEach(function (item) {
		// 		item.classList.remove('active');
		// 	});
		// }
	});
});
let audioBlock = document.querySelectorAll('.meditation-audio__item');
audioBlock.forEach((elem) => {
	let audioBtn = elem.querySelector('.meditation-audio__link');
	let audio = elem.querySelector('.audio');
	let audioTime = elem.querySelector('.audio-time');
	audioTime.innerHTML = `${Math.floor((audio.duration)/60)}:${Math.floor((audio.duration)%60)}`;
	audioBtn.addEventListener('click', function () {
			if (!audioBtn.classList.contains('active')) {
				// let audioSearch = confirm("вы точно хотите воспроизвести аудиозапись?");
				// if (audioSearch) {
					audioBtn.classList.add('active');
					audio.play()
				// }
			} else {
				audioBtn.classList.remove('active');
				audio.pause()
		}
	});
});



$(document).ready(function() {
	$('.item').on('click', function(e) {
	e.preventDefault();
		var nameLink = e.target;
		var val = e.target.hash.slice(1);
		$('#rate option').each(function() {
			// по умолчанию устанавливаем у всех selected: false
			$(this).attr('selected', false);
			// Эта строка позволяет обновлять отображение выбранного элемента select
			$('#rate').val(val).trigger('change');
			if (val == $(this).attr('value')) {
				$(this).attr('selected', true);
			}
		});
	});
});
// const selectGorod = document.querySelector('.select-gorod');
// selectGorod.addEventListener('change', function () {
// 	tabs.querySelector('.active').classList.remove('active');
// 	tabs.querySelectorAll('.tab')[select.options.selectedIndex].classList.add('active');
// });

const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const totalPriceWrapper = document.getElementById('total-price');
const subScale = document.getElementById('sub-price');
const getSubTotalPrice = (input) => Number(input.value) * (Number(input.dataset.price));
const totalPriceOrders = document.getElementById('total-price-orders');
const blockDelivery = document.getElementById('delivery');
const methodDelivery = document.querySelectorAll('#delivery option');
const priceDelivery = document.getElementById('delivery-price')
const totalSummaWrapper = document.getElementById('total-summa');
// const ACTION = {
// 	MINUS: 'minus',
// 	PLUS: 'plus',
// }

if (blockDelivery) {
	blockDelivery.addEventListener('change', function () {
		if(blockDelivery.value == 'methodDelivery2') {
			priceDelivery.dataset.dev = 3600;
			priceDelivery.textContent = `${priceDelivery.dataset.dev} ₸`;
			priceDelivery.nextElementSibling.textContent = ' (доставка курьером)';
			totalSummaWrapper.textContent = formatNumber(Number(totalSummaWrapper.dataset.summa) + Number(priceDelivery.dataset.dev)) + ' ₸';
		} else {
			priceDelivery.dataset.dev = 0;
			priceDelivery.textContent = `${priceDelivery.dataset.dev} ₸`;
			priceDelivery.nextElementSibling.textContent = '';
			totalSummaWrapper.textContent = formatNumber(Number(totalSummaWrapper.dataset.summa) + Number(priceDelivery.dataset.dev)) + ' ₸';
		}
	});
}

const allprice = () => {
	// const discountProduct = document.querySelector('.discount');
	let totalCost = 0;
	[...document.querySelectorAll('.item-price')].forEach((basketItem) => {
		totalCost += getSubTotalPrice(basketItem.querySelector('.counter__value'));
	});
	if (totalPriceWrapper) {
		totalPriceWrapper.textContent = formatNumber(totalCost) + ' ₸';
		totalPriceWrapper.dataset.value = totalCost;
	}
	if (totalPriceOrders) {
		totalPriceOrders.textContent = formatNumber(totalCost) + ' ₸'
	}
	if (priceDelivery) {
		let priceDostavka = priceDelivery.dataset.dev;
		// subPriceWrapper.textContent = formatNumber(totalCost);
		// subPriceWrapper.dataset.value = totalCost;
		totalSummaWrapper.textContent = formatNumber(totalCost + Number(priceDostavka)) + ' ₸';
		totalSummaWrapper.dataset.summa = totalCost + Number(priceDostavka);
	}
}

const counter = function () {
	const btns = document.querySelectorAll('.counter__btn');
	btns.forEach((btn) => {
		btn.addEventListener('click', function () {
			const direction = this.dataset.direction;
			const input = this.parentElement.querySelector('.counter__value');
			const currentValue = +input.value;
			let newValue;
			if (direction === 'plus') {
				newValue = currentValue + 1;
				totalPriceWrapper.textContent = `${formatNumber(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price))} ₸`;
				totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price);
				totalSummaWrapper.textContent = totalPriceWrapper.textContent;
				totalSummaWrapper.dataset.summa = totalPriceWrapper.dataset.value;
			} else {
				if (currentValue - 1 > 0) {
					newValue = currentValue - 1;
					totalPriceWrapper.textContent = `${formatNumber(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price))} ₸`;
					totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price);
					totalSummaWrapper.textContent = totalPriceWrapper.textContent;
					totalSummaWrapper.dataset.summa = totalPriceWrapper.dataset.value;
					// totalSummaWrapper.textContent =`${formatNumber(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price))} ₸`;
					// totalSummaWrapper.dataset.summa = Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price);
				} else {
					newValue = 1;
				}
				// newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
			}
			input.value = newValue;
			const itemMain = btn.closest('.item-price');
			itemMain.querySelector('.all-price').textContent = `${formatNumber(getSubTotalPrice(input))} ₸`;
		})
	});
}

const cardCatalog = document.querySelectorAll('.js-product');
const button = document.querySelector('.js-buy');
const sectionButtonCount = document.querySelector('.section__button__count') 

cardCatalog.forEach((elem) => {
	elem.addEventListener('click', function (event) {
		// let itemHref = elem.querySelector('.card__link').href
		// console.log(elem.querySelector('.card__link').href)
		if (event.target.classList.contains('js-buy')) {
				addToCart(elem);
			// console.log(elem.querySelector('.card__link').href)
		}
		return false;
	});
});

function getCartData() {
	return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}

// const sectionSumma = document.querySelector('.section-summa');
// const sectionButtons = document.querySelector('.section-bottom__buttons');
// const sectionBodyRow = document.querySelector('.section-body__row');
// const basketBlockTop = document.querySelector('.basket-block__top');
// const basketBlockButtons = document.querySelector('.basket-block__buttons');
// const basketBlockPrice = document.querySelector('.basket-block__price');
// const textareaId = document.getElementById('textarea_id');

const cardBasket = document.getElementById('cart-content');

function addToCart(e) {
	let cartData = JSON.parse(localStorage.getItem('cart')) || {};
	e.querySelector('.js-buy').disabled = true;
	e.querySelector('.js-buy').classList.add('active');
	e.querySelector('.js-buy').innerHTML = 'В корзине';
	// получаем данные корзины или создаём новый объект, если данных еще нет
	let parentBox = e.closest('.js-product');
		itemDataId = parentBox.getAttribute('data-id'), // родительский элемент кнопки "Добавить в корзину"
		itemId = e.closest('.js-product').getAttribute('data-id'),
		itemSrc = e.closest('.js-product').getAttribute('data-product-img'),
		itemTitle = e.closest('.js-product').getAttribute('data-product-title'), // название товара
		itemPrice = Number(e.closest('.js-product').getAttribute('data-product-price')), // стоимость товара
		// itemOne = Number(e.closest('.js-product').querySelector('.counter__value').value);
		itemCount = Number(e.closest('.js-product').getAttribute('data-product-count')),
		itemSumma = itemPrice * itemCount,
		itemTotalSumma = itemSumma;
		// itemTotal = totalPriceWrapper.dataset.value;
		// itemTitle = parentBox.getAttribute('card__link'), // название товара
		// itemPrice = parentBox.getAttribute('.card__price'); // стоимость товара
		cartData[itemDataId];
	if (cartData.hasOwnProperty(itemDataId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
		e.querySelector('.js-buy').disabled = true;
		e.querySelector('.js-buy').classList.add('active');
		e.querySelector('.js-buy').innerHTML = 'В корзине';
	} else { // если товара в корзине еще нет, то добавляем в объект
		cartData[itemDataId] = {itemId, itemSrc, itemTitle, itemPrice, itemCount, itemSumma, itemTotalSumma};
	}
	setCartData(cartData);
	return false;
}

function openCart(){
	var cartData = getCartData(), // вытаскиваем все данные корзины
		totalItems = '';
	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if(cartData !== null){
		for(var items in cartData){
			totalItems += '<div class="basket-product item-price" data-id="' + cartData[items].itemId + '">';
			for(var i = 0; i < 1; i++){
				totalItems += '<div class="basket-product__image"><img src="' + cartData[items].itemSrc +'" alt=""></div>';
				totalItems += '<div class="basket-product__block"><div class="basket-product__top"><div class="basket-product__title">' + cartData[items].itemTitle +'</div></div>';
				totalItems += '<div class="basket-product__bottom"><div class="basket-product__count"><div class="basket-product__subtitle">Количество</div><div class="counter_block big_basket"><button type="button" data-direction="minus" class="counter__btn counter__minus">-</button><input value="' + cartData[items].itemCount + '" type="text" data-price="' + cartData[items].itemPrice + '" class="counter__value" readonly="true"><button type="button" data-direction="plus" class="counter__btn counter__plus">+</button></div></div>';
				// totalItems += '<div class="product-bottom__four"><div class="section-bottom__range"><form action=""><div class="counter_block big_basket" ><input type="button"  value="-" class="counter__btn btn-minus"><input value="' + cartData[items].itemCount +'" type="text" data-price="' + cartData[items][3] + '" class="input"><input type="button" value="+" class="counter__btn btn-plus"></div></form></div></div>';
				totalItems += '<div class="basket-product__price"><div class="basket-product__subtitle">Цена за единицу:</div><div class="basket-product__price price">'+ formatNumber(cartData[items].itemPrice) +'₸</div></div>';
				totalItems += '<div class="basket-product__allprice"><div class="basket-product__subtitle">Итоговая стоимоть</div><div class="basket-product__price all-price">' + formatNumber(cartData[items].itemSumma) + ' ₸</div></div></div>';
			}
			totalItems += '</div></div>'
		}
		if(cardBasket) {
			cardBasket.innerHTML = totalItems;
		}
	}
		const updateQuantityTotalPrice = (id, quantity) => {
			cartData[id].itemCount = quantity;
			cartData[id].itemSumma = cartData[id].itemPrice * cartData[id].itemCount; 
			setCartData(cartData);
		}
		const increaseQuantity = (id) => {
			const newQuantity = cartData[id].itemCount + 1;
			updateQuantityTotalPrice(id, newQuantity);
		}
		const decreaseQuantity = (id, cartDOM) => {
			const newQuantity = cartData[id].itemCount - 1;
			if (newQuantity >= 1) {
				updateQuantityTotalPrice(id, newQuantity);
			}
			if (newQuantity === 0) {
				cartDOM.style.display = 'none';
				deleteCartItem(id);
			}
		}


		const deleteCartItem = (id) => {	
			// const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
			// cartDOMElement.removeChild(cartItemDOMElement);
			delete cartData[id];
			setCartData(cartData);
			disabledButton();
			allprice();
			openCart();
			if (Object.keys(cartData).length == 0) {
				localStorage.removeItem('cart');
			}
			// if(cartData[id] == undefined) {
			// 	localStorage.clear();
				// openCart();
			// }
		}

		const btns = document.querySelectorAll('.counter__btn');
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				const direction = this.dataset.direction;
				const cartDOMElement = btn.closest('.item-price')
				const productID = cartDOMElement.getAttribute('data-id');
				if (direction === 'plus') {
					increaseQuantity(productID);
				} else {
					decreaseQuantity(productID, cartDOMElement);
				}
			});
		});

		const disabledButton = () => {
			// console.log(cart)
			const test = document.querySelectorAll('.js-product');
			const button = document.querySelector('.js-buy');;
			if(cartData) {
				for (let i = 0; i < test.length; i++) {
					const attr = test[i].getAttribute('data-id');
					const parent = test[i].querySelector('.js-buy')
						// console.log(parent)
						// console.log(cart.hasOwnProperty(attr))
					if (cartData.hasOwnProperty(attr)) {
						parent.disabled = true;
						parent.classList.add('active');
						if(button) {
							button.innerHTML = 'В корзине';
						}
					} else {
						parent.disabled = false;
						parent.classList.remove('active');
						if(button) {
							button.innerHTML = 'В корзину';
						}
					}
				}
			}
		}
	// if(textareaId) {
	// 	textareaId.innerHTML = localStorage.getItem('cart');
	// }
	allprice();
	disabledButton();
	counter();
	return false;
}

openCart();


const orderBtn = document.querySelectorAll('.basket-tab__btn');
const basketRow = document.querySelectorAll('.basket-left__row');
let oneInput = document.querySelector('.one-input');
if (orderBtn) {
	orderBtn.forEach(function (item) {
		var form = document.querySelector('#main'),
		select = form.querySelectorAll('.select__two'),
		arr;
		// form.addEventListener('change', function() {
			item.addEventListener('click', function () {
				arr = [].map.call( select, function(sel) {
					return sel.value
			});
			let currentBtn = item;
			let tabId = currentBtn.getAttribute('data-regis');
			let currentTab = document.querySelector(tabId);
			for (let i = 0; i <= arr.length; i++) {
				if (arr[0] !== 'не выбрано' && arr[1] !== 'не выбрано' && arr[2] !== 'не выбрано' && oneInput.value !== '') {
					if (!currentBtn.classList.contains('active')) {
						orderBtn.forEach(function (item) {
							item.classList.remove('active');
						});
						basketRow.forEach(function (item) {
							item.classList.remove('active');
						});
						currentBtn.classList.add('active');
						currentTab.classList.add('active');
					}
					oneInput.style.borderColor = '#3E1A79';
					select.forEach((elem) => {
						elem.style.borderColor = '#3E1A79';
					})
				} else {
					oneInput.style.borderColor = 'red';
					select.forEach((elem) => {
						elem.style.borderColor = 'red';
					})
				}
			}
		});
	// });
});
}


let videoLink = document.querySelectorAll('.meditation__column');
let itsVideo = document.querySelector('.meditation__video');
videoLink.forEach((elem) => {
	elem.addEventListener('click', function () {
		itsVideo.href = elem.dataset.href;
		let videoLinkImage = elem.querySelector('img');
		let videoImage = itsVideo.querySelector('img');
		videoImage.src = videoLinkImage.src;
	})
})

// methodDelivery.	

// $('#delivery option').each(function(elem) {
// 	console.log(elem.value('methodDelivery2'))
// 	// $(this).attr('selected', false);
// 	// $('#rate').val(val).trigger('change');
// 	if (val == $(this).attr('value')) {
// 	$(this).attr('selected', true);
// 	}
// // });


// const orderBtn = document.querySelectorAll('.basket-tab__btn');
// const basketRow = document.querySelectorAll('.basket-left__row');
// const orderBtn = document.querySelectorAll('.basket-tab__btn');
// const basketRow = document.querySelectorAll('.basket-left__row');
// 			orderBtn.forEach(function (item) {
// 				item.addEventListener('click', function () {
// 					let currentBtn = item;
// 					let tabId = currentBtn.getAttribute('data-regis');
// 					let currentTab = document.querySelector(tabId);

// 					if (!currentBtn.classList.contains('active')) {

// 						orderBtn.forEach(function (item) {
// 							item.classList.remove('active');
// 						});
// 						basketRow.forEach(function (item) {
// 							item.classList.remove('active');
// 						});
// 						currentBtn.classList.add('active');
// 						currentTab.classList.add('active');
// 					}
// 				});
// 			});