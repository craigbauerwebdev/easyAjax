/* 
Jquery Plugin
Plugin Name: Easy Ajax
Author: Craig Bauer
Ver: 1.0
License: MIT
*/
(function($) {

	$.fn.easyAjax = function(options) {

		// Default Settings
		var settings = $.extend({

			//Default file to load if no href is set
			href : 'default.html',
			linkColor : 'red',
			slideSpeed : 100,
			timeOut : 20000,
			cursor : 'pointer',

		}, options );

		return this.each(function(){

			$(this)
			.css('color', settings.linkColor)
			.css('cursor', settings.cursor);

			var object = $(this);
			
			var content = $('<div id="wrap"><div id="content"></div></div>');
			content.prependTo('body');

			object.on('click', loadEasyAjax);

			function loadEasyAjax(event){

				event.preventDefault();		

				$.ajax('jquery.easyAjax/ajaxPages/' + settings.href, {
					success: function(response) {
						$('#wrap').fadeIn(200);
						$('#content').html(response).slideDown( settings.slideSpeed );
					},
					error : function(request, errorType, errorMessage){
						alert('Error: ' + errorType + ' with message: ' + errorMessage);
					},
					timeout : settings.timeOut,
					//beforeSend : function() { alert('Wait');},
					complete : function() { 
						var closeBtn = $('<div class="closeBtn">x</div>');
						var wrap = $('#wrap');
						closeBtn.appendTo('#content');
						closeBtn.on('click', function() {

							$('#content').slideUp( settings.slideSpeed, function(){
								$('#wrap').fadeOut(200);
							});
							
						})
					},
		
				}); //close .ajax

			} // close loadEasyAjax Function
			
		}); //close return

	}

} (jQuery) );//close wrapped function