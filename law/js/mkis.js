/* String prototype ================================================== */
/* 문자열에 찾는 문자가 있는지 판별 */
String.prototype.hasString =  function(find) {
	var str = this.toString();
	
	if (str.indexOf(find) > -1) {
		return true;
	} else {
		return false;
	}
}

/* 문자열에서 해당 문자와 그 뒤에있는 문자열을 리턴 */
String.prototype.backString =  function(find) {
	var str = this.toString();
	
	return str.substring(str.indexOf(find));
}

/* util ================================================== */
util = {
	/* body에 height값을 명시하여 percent height가 먹도록 한다. */
	setBodyHeight: function() {
		var bodyHeight = $("body").outerHeight(true);
		$("body").outerHeight(bodyHeight);
	},
	/* IE9 이하 placeholder 사용가능하게 */
	patchPlaceholder: function() {
		if (util.IE9 || util.IE8 || util.IE7 || util.IE6 || util.IEQ) {
			var target = 'input[placeholder], textarea[placeholder]'; 
			$(target).each(function(i) {				
				//Set HTML
				var $el = $(this);
				var $el_w;
				var $el_place;
				
				$el.wrap('<div class="js-patchPlaceholder-w"></div>');
				$el_w = $el.closest(".js-patchPlaceholder-w");
				
				$el_w.append('<div class="js-place-holder"></div>');
				$el_place = $el_w.find(".js-place-holder");
				$el_place.text($el.attr("placeholder"));
					
				//Set CSS
				$el_w.css({position: "relative"});
				
				if ($el.getPercentWidth() == "100%" || $el.getPercentWidth() == "NaN%") {
					$el_w.css({display: "block"});
				} else {
					$el_w.css({display: "inline-block"});
				}
				
				$el_place.css({
					position: "absolute",
					top: "0.2em",
					left: "0.2em"
				});
				
				//Set Event
				$el.on("focus", function() {
					var $el = $(this);
					var $el_w = $el.closest(".js-patchPlaceholder-w");
					var $el_place = $el_w.find(".js-place-holder");
					
					$el_place.hide();
				});
				
				$el.on("blur", function() {
					var $el = $(this);
					var $el_w = $el.closest(".js-patchPlaceholder-w");
					var $el_place = $el_w.find(".js-place-holder");
						
					if ($el.val() == "") {
						$el_place.show();
					}
				});
				
				$el_place.on("focus", function() {
					$el.trigger("focus");
				});
			});
		}
	}
	,
	/* IE8 이하 youtube 지원종료안내 */
	infoYoutube: function() {
		if (util.IE8 || util.IE7 || util.IE6 || util.IEQ) {
			var target = 'iframe';
			$(target).each(function(i) {
				$iframe = $(this);
				
				if ($iframe.attr("src").hasString("youtube")) {
				
					//Set HTML
					var $el = $(this);
					var $el_w;
					var $el_place;
					
					$el.wrap('<div class="js-youtube-w"></div>');
					$el_w = $el.closest(".js-youtube-w");
					
					$el_w.append('<div class="js-youtube-info"></div>')
					$el_place = $el_w.find(".js-youtube-info");
					$el_place.text($el.attr("patchPlaceholder"));
						
					//Set CSS
					$el_w.css({
						"position": "relative",
						"display": "inline-block"
					});
					
					$el_place.css({
						"position": "absolute",
						"top": "0.2em",
						"left": "0",
						"color": "white",
						"z-ndex": "100",
						"line-height": "1.5",
						"background": "black",
						"padding": "10px",
						"width": "100%",
						"box-sizing": "border-box"
					});
					
					$el_place.html("유튜브 서비스는 더이상 익스플로러8 이하 브라우저를 지원하지 않습니다. 동영상을 확인하시려면 익스플로러를 업데이트해 주시거나 다른 브라우저를 사용해 주시기 바랍니다.")
					//Set Event
				}
			});
		}
	}
	,
	/* WIN7 IE11 맑은 고딕 상하 정렬 문제 패치*/
	patchFont: function () {
		if (util.WIN7) {
			$("a > span, button > span").each(function () {
				var $el = $(this);
				
				if ($el.css("font-family").hasString("맑은 고딕")) {
					$el.css({
						"top": "-0.15em",
						"position": "relative"
					});
				}
			});
		}
	}
	,
	/* v.1.00 애니메이트된 해시로 이동
	 *  IE10 부터 pushState 사용
	 *  IE9 이하 hash 사용 깜박임 있음 home 갈때 주소에 #이 붙음  
	 *  home 갈때 href="#"
	 *  */
	goAnimatedHash: function(href) {
		var loc = window.location;
		var doc = window.document;
		var gotoScroll;
		
		if (href.length) {
			if (href == "#") { //home 일때
				gotoScroll = 0;
				
				if ("pushState" in history) {
					$("html, body").animate({scrollTop: gotoScroll});
					history.pushState(null, doc.title, loc.pathname + loc.search);				
				} else {
					$("html, body").animate({scrollTop: gotoScroll});
					location.hash = "";
				}
			} else { //sub 일때
				gotoScroll = $(href).offset().top;
				
				if ("pushState" in history) {
					$("html, body").animate({scrollTop: gotoScroll});
					history.pushState(null, doc.title, loc.pathname + loc.search + href);				
				} else {
					$("html, body").animate({scrollTop: gotoScroll});
					location.hash = href;
				}
			}
		}
	}
	,
	/* 해시 처리 */
	handleHash: function() {
		$("a, area").on("click", function () {
			var $a = $(this);
			var href = $a.attr("href");
			
			if (href.hasString("#")) {
				util.goAnimatedHash(href.backString("#"));
				return false;
			}
		});
	}
}

/* Browser 판별 */
if (navigator.userAgent.hasString("Trident") && navigator.userAgent.hasString("rv:11.0")) {util.IE11 = true;}
if (navigator.userAgent.hasString("MSIE 10")) {util.IE10 = true;}
if (navigator.userAgent.hasString("MSIE 9")) {util.IE9 = true;}
if (navigator.userAgent.hasString("MSIE 8")) {util.IE8 = true;}
if (navigator.userAgent.hasString("MSIE 7")) {util.IE7 = true;}
if (navigator.userAgent.hasString("MSIE 6")) {util.IE6 = true;}
if (navigator.userAgent.hasString("MSIE 5")) {util.IEQ = true;}
if (util.IE11 || util.IE10 || util.IE9 || util.IE8 || util.IE7 || util.IE6 || util.IEQ) {util.IE = true;}
if (navigator.userAgent.hasString("Chrome")) {util.CHROME = true;}
if (navigator.userAgent.hasString("Firefox")) {util.FF = true;}
if (navigator.userAgent.hasString("Windows NT 6.1")) {util.WIN7 = true;}
if (navigator.userAgent.hasString("iPhone") || navigator.userAgent.hasString("iPad")) {util.IOS = true;}

/* jQuery extention ================================================== */
(function ($) {
    $.fn.getPercentWidth = function () {
        var width = parseFloat($(this).css('width'))/parseFloat($(this).parent().css('width'));
        return Math.round(100*width)+'%';
    };
})(jQuery);

/* HTML extention ================================================== */
document.createElement("main");

/* document ready ================================================== */
$(document).ready(function () {
	$('img[usemap]').rwdImageMaps(); //반응형 이미지맵
	util.patchPlaceholder(); 
	util.infoYoutube();
	util.patchFont();
	util.handleHash();
});
/* window load ================================================== */
$(window).load(function () {
	//util.setBodyHeight();
});