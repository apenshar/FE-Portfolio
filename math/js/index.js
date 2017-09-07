$(document).ready(function() {
	$("button").click(function() {
		console.log("ok");
		$exp = $("#expression").val();
		$expf = $exp.replace(/(\/)|÷/,"(over)").replace(/∧/g,"^");
		$ope = $(".operation").children('select').val();
		$req = "https://newton.now.sh/"+$ope+'/'+$expf;
			console.log($req);
			
		$.get($req, function(data) {
			// console.log(data)
				$("#result").css("display",'inline-block')
			$("#result").children(':last').val(data.result);
			// $("#result").css("visibility",'visible')
			
		});
	});
});