(function($, document, window){
	
	$(document).ready(function(){

		function setCountDown(){

            // set the date we're counting down to
            var target_date = new Date($(".counter-wrap").data("date-target")).getTime();
             
            // variables for time units
            var days, hours, minutes, seconds;
             
            // update the tag with id "countdown" every 1 second
            setInterval(function () {
             
                // find the amount of "seconds" between now and target
                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;
             	
             	if(current_date < target_date ){
	                // do some time calculations
	                days = ( parseInt(seconds_left / 86400) < 10 ) ? "0"+ parseInt(seconds_left / 86400) : parseInt(seconds_left / 86400);
	                seconds_left = seconds_left % 86400;
	                 
	                hours = (parseInt(seconds_left / 3600) < 10)? "0"+ parseInt(seconds_left / 86400) : parseInt(seconds_left / 86400);
	                seconds_left = seconds_left % 3600;
	                 
	                minutes = (parseInt(seconds_left / 60)<10)?"0"+parseInt(seconds_left / 60):parseInt(seconds_left / 60);
	                seconds = (parseInt(seconds_left % 60)<10)?"0"+parseInt(seconds_left % 60):parseInt(seconds_left % 60);
	            }else{
	            	days = '00';
					hours = '00';
					minutes = '00';
					seconds = '00';
	            }
                // format countdown string + set tag value

                $(".days .number").html(days);
                $(".hours .number").html(hours);
                $(".minutes .number").html(minutes);
                $(".seconds .number").html(seconds);
             
            }, 1000);

		}

		setCountDown();

		new WOW().init();
	});

	$(window).load(function(){

	});

})(jQuery, document, window);