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
		// autoplay: true,
		// autoplaySpeed: 800,
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
		// autoplay: true,
		// autoplaySpeed: 800,
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

console.log(sliderOne);
console.log(sliderTwo);

let swiperOne = new Swiper(sliderOne, {
	slidesPerView: 2,
	effect: 'coverflow',
	speed: 800,
	grabCursor: true, 
	centeredSlides: true,
	loop: true,
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		stretch: 0,
		depth: 200,
		modifier: 3,
		// slideShadows: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
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


let editBlock = document.querySelectorAll('.profile-bottom__item')
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

// let swiperOne = document.querySelector('.swiperTwo');

// if (swiperOne) {
// 	new Swiper('.swiper-container', {
// 		slidesPerView: 'auto',
// 		spaceBetween: 30,
// 		loop: false,
// 		freeMode: true,
// 		scrollbar: {
// 		el: '.swiper-scrollbar',
// 			draggable: true,
// 		},
// 		breakpoints: {
// 			992: {
// 				spaceBetween: 20,
// 			},
// 			// 500: {
// 			// 	slidesPerView: 1,
// 			// 	loop: false,
// 			// 	// loopedSlides: 0,
// 			// 	freeMode: true,
// 			// },
// 		},
// 		// touchratio: 1,
// 	});	
// }

// let swiperTwo = document.querySelector('.swiper-container');

// if (swiperTwo) {
// 	new Swiper('.swiper-container', {
// 		// slidesPerView: 1,
// 		slidesPerView: 4,
// 		// slidesPerView: 3,
// 		spaceBetween: 30,
// 		// slidesPerGroup: 5,
// 		loop: false,
// 		// loopedSlides: 0,
// 		freeMode: true,
// 		// longSwipes: false,
// 		// loopedSlides: 3,
// 		// longSwipesMs: 300,
// 		scrollbar: {
// 		el: '.swiper-scrollbar',
// 			draggable: true,
// 		// dragSize: 100,
// 	// 		spaceBetween: 10,
// 	//   centeredSlides: true,
// 	//   slidesPerView: "auto",
// 	//   touchRatio: 0.2,
// 	//   slideToClickedSlide: true
// 	// 	//   snapOnRelease: true,
// 		//   dragSize: 4,
// 		//   hide: false,
// 		},
// 		breakpoints: {
// 			992: {
// 				slidesPerView: 4,
// 				freeMode: true,
// 			},
// 			500: {
// 				slidesPerView: 3,
// 				freeMode: true,
// 			},
// 			500: {
// 				slidesPerView: 3,
// 				freeMode: true,
// 			},
// 		},
// 	// touchratio: 1,
// });	
// }
// const time = 1000;
// const step = 1;
// let blockCounter = document.getElementById('counter')



// const rangeSliderTwo = document.getElementById('range-slider_two');
// const leftButtonSlider = document.querySelector('.noUi-handle-lower');
// const rightButtonSlider = document.querySelector('.noUi-handle-upper');
// const dataMinValue = document.getElementById('catalog-input');
// const dataMaxValue = document.getElementById('catalog-input');
// // const rangeSliderButton = document.querySelectorAll('.noUi-handle');

// const input0 = document.getElementById('rangetwo_1');
// const input1 = document.getElementById('rangetwo_2');
// const inputs = [input0, input1];
// var input0Value;
// var input1Value;
// if(rangeSliderTwo) {
// 	if (!input0.value == '') {
// 		input0Value = input0.value;
// 	} else {
// 		input0Value = 0;
// 	}
// 	if (!input1.value == '') {
// 		input1Value = input1.value;
// 	} else {
// 		input1Value = dataMaxValue.dataset.max;
// 	}
// }
// if (rangeSliderTwo) {
// 	noUiSlider.create(rangeSliderTwo, {
// 		// start: [0, Number(dataMaxValue.dataset.max)],
// 		start: [Number(input0Value), Number(input1Value)],
// 		connect: true,
// 		step: 1,
// 		limit: Number(dataMaxValue.dataset.max),
// 		pips: {
// 			mode: 'values',
// 			values: [Number(dataMinValue.dataset.min), Number(dataMaxValue.dataset.max)],
// 			density: 0,
// 			stepped: false
// 		},
// 		range: {
// 			'min': Number(dataMinValue.dataset.min),
// 			'max': Number(dataMaxValue.dataset.max)
// 			// 'min': 1200,
// 			// 'max': 1300
// 		},
// 	});

// 	// console.log(leftButtonSlider.getAttribute("aria-valuenow").textContent);

// 	rangeSliderTwo.noUiSlider.on('slide', function (values, handle) {
// 		inputs[handle].value = Math.round(values[handle]);
// 	});

	
	
// 	const setRangeSliderTwo = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSliderTwo.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSliderTwo(index, e.currentTarget.value);
// 		});
// 	});
// };




// const rangeSlider = document.getElementById('range-slider');
// if (rangeSlider) {
// 	noUiSlider.create(rangeSlider, {
// 		start: [0, 94700],
// 		connect: true,
// 		step: 1,
// 		limit: 94700,
// 		pips: {
// 			mode: 'values',
// 			values: [30000, 95000],
// 			density: 0,
// 			stepped: false
// 		},
// 		range: {
// 			'min': 30000,
// 			'max': 95000
// 		},
// 	});
// 	const input0 = document.getElementById('range_1');
// 	const input1 = document.getElementById('range_2');
// 	const inputs = [input0, input1];

// 	rangeSlider.noUiSlider.on('update', function (values, handle) {
// 		inputs[handle].value = Math.round(values[handle]);
// 		console.log(Math.round(values[handle]));
// 	});

// 	const setRangeSlider = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSlider.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSlider(index, e.currentTarget.value);
// 		});
// 	});
// };