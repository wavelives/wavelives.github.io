"use strict";$(function(){var t;t="animated pulse",$("article .article").hover(function(){$(this).addClass(t)},function(){$(this).removeClass(t)}),$(".sidenav").sidenav();function e(t,e){var i=$("#"+t);if(0!==i.length){var n=i.width();n+=450<=n?21:350<=n&&n<450?18:300<=n&&n<350?16:14,$("#"+e).width(n)}}function i(){e("navContainer","articles"),e("artDetail","prenext-posts"),$(".content").css("min-height",window.innerHeight-165)}i(),$(window).resize(function(){i()}),$("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});!function(){$("#articleContent a").attr("target","_blank"),$("#articleContent img").not("img.emoji").each(function(){var t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>'),$(this).addClass("img-shadow img-margin");var e=$(this).attr("alt"),i=$(this).attr("title"),n="";if(void 0===e||""===e?void 0!==i&&""!==i&&(n=i):n=e,""!==n){var a=document.createElement("div");a.className="caption";var s=document.createElement("b");s.className="center-caption",s.innerText=n,a.appendChild(s),this.insertAdjacentElement("afterend",a)}}),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0,showThumbByDefault:!1}),$(document).find("img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))});var i=window.document.querySelector(".progress-bar");i&&new ScrollProgress(function(t,e){i.style.width=100*e+"%"})}(),$(".modal").modal(),$("#backTop").click(function(){return $("body,html").animate({scrollTop:0},400),!1});var n=$("#headNav"),a=$(".top-scroll");$(window).scroll(function(){$(window).scrollTop()<100?(n.addClass("nav-transparent"),a.slideUp(300)):(n.removeClass("nav-transparent"),a.slideDown(300))}),$(".nav-menu>li").hover(function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")}),$(".m-nav-item>a").on("click",function(){"none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(300),$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")):($(this).next("ul").slideUp(300),$(".m-nav-item.m-nav-show").removeClass("m-nav-show"))})});