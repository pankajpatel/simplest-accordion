/**
* jQuery simplestAccordion Plugin 0.1
*
* http://www.pankaj.pro/
*
* Copyright (c) 2013 Pankaj Patel
*/

var style = '<style>.container{display:block;width: 500px;height : auto ;margin: 0 auto;}.item{display : block;width : inherit ;height : 40px;line-height : 40px;background : #555 ;border: 1px solid #000 ;cursor: pointer;color: #fff;}.item-data{display : none ; width : inherit ;height : auto ;border: 1px solid #ccc;}.active {background : #eee ;color : #000 ;}.item-data div{margin: 30px;}</style>';

(function($){
	$.fn.simplestAccordion = function(){
		//Link background colors 
		return this.each(function(i,obj){
		$this = $(this);
		$anchors = $(obj).find(".item").get();
		$($this).prepend(style);
		$.each($anchors, function(j,ele){
			$(ele).click(function (e){
				if($(ele).next('.item-data').css('display') != 'block'){
					$('.active').slideUp('fast').removeClass('active');
					$(ele).next('.item-data').addClass('active').slideDown('slow');
				} else {
					$('.active').slideUp('fast').removeClass('active');
				}
			});
		});
		});
	};
})(jQuery);