$(function(){

	console.log("hej");


	var waypoints = $('.Top').waypoint({
	  handler: function(direction) {
	    if(direction == "down"){
	    	$( "nav" ).animate({
			    top: "+=150",
			  }, 1000);
	    }
	  }
	});

});