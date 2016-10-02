/**
* jQuery simplestAccordion Plugin 0.1
*
* http://www.pankaj.pro/
*
* Copyright (c) 2013 Pankaj Patel
*/

var style = '<style>.container{display:block;width: 500px;height : auto ;margin: 0 auto;}.item{display : block;width : inherit ;height : 40px;line-height : 40px;background : #555 ;border: 1px solid #000 ;cursor: pointer;color: #fff;}.item-data{display : none ; width : inherit ;height : auto ;border: 1px solid #ccc;}.active {background : #eee ;color : #000 ;}.item-data div{margin: 30px;}</style>';

(function($){
	$.fn.simplestAccordion = function(anchor, target, active, styles){
		styles != undefined ? styles : style;

    var anchorSelector = anchor != undefined ? anchor : '.item';
    var activeClassName = active != undefined ? active.match('.') ? active.replce('.', '') : active : 'active';
    var targetSelector = target != undefined ? target : '.item-data';

    return this.each(function(i, obj){
			$this = $(this);
			$anchors = $(obj).find(anchorSelector);
			$this.prepend(style);

      $.each($anchors, function(j, element){
				$(element).click(function (e){
					if($(element).next(targetSelector).css('display') != 'block'){
						$('.' + activeClassName).slideUp('fast').removeClass(activeClassName);
						$(element).next(targetSelector).addClass(activeClassName).slideDown('slow');
					} else {
						$('.' + activeClassName).slideUp('fast').removeClass(activeClassName);
					}
				});
			});
		});
	};
})(jQuery);
