$(document).ready(function() {
	$("#new-quote").click(function() {
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var color = Math.floor(Math.random() * colors.length);

 $("html,.container,h1,#new-quote:hover").css({
      backgroundColor: colors[color],
       //color: colors[color]
       });
      $("i,#text,#author").css({
         //backgroundColor: colors[color]
             color: colors[color]
     }); 
		$.ajax({
			headers: {
				"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
			success: function(data) {
				$('#text').html(data.quote);
				$("#author").html('---'+data.author);
			}
		});
	});
});