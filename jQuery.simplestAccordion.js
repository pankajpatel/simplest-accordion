$(document).ready(function(e){
	var style = '<style>.container{display:block;width: 500px;height : auto ;margin: 0 auto;}.item{display : block;width : inherit ;height : 40px;line-height : 40px;background : #555 ;border: 1px solid #000 ;cursor: pointer;color: #fff;}.item-data{display : none ; width : inherit ;height : auto ;border: 1px solid #ccc;}.active {background : #eee ;color : #000 ;}.item-data div{margin: 30px;}</style>';
	$(body).prepend(style);
	$('.item').click(function (e){
		if($(this).next('.item-data').css('display') != 'block'){
			$('.active').slideUp('fast').removeClass('active');
			$(this).next('.item-data').addClass('active').slideDown('slow');
		} else {
			$('.active').slideUp('fast').removeClass('active');
		}
	});
});

/**
* jQuery LinkColor Plugin 1.0
*
* http://www.9lessons.info/
*
* Copyright (c) 2011 Arun Kumar Sekar 
*/
(function($){
$.fn.LinkColors = function(){
//Link background colors 
var colors = new Array('4AC7ED', 'FDC015', '9F78EC', 'F25C33');
return this.each(function(i,obj){
$this = $(this);
$anchors = $(obj).find("a").get();
$.each($anchors, function(j,ele){
var randColor = Math.floor ( Math.random() * colors.length ); 
$(ele).css({
'background-color':'#'+colors[randColor],
'text-decoration':'none',
'color':'#333333',
'padding':'0px 5px 0px 5px'
});
});
});
};
})(jQuery);