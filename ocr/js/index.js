$(document).ready(function() {
	$("#file").on("change", function() {
		var fileList = this.files;
		console.log(fileList[0].name);
		// console.log(fileList[0].size);
		// console.log(fileList[0].type);
		function getObjectURL(file) {
			var url = null;
			if (window.createObjectURL != undefined) {
				// basic
				url = window.createObjectURL(file);
			} else if (window.URL != undefined) {
				// mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if (window.webkitURL != undefined) {
				// webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		}
		var objUrl = getObjectURL(this.files[0]);
		console.log("objUrl = " + objUrl);
		var html =
			'<div class="pic"><img id="myImage" src="' +
			objUrl +
			'" alt=""></div>';
		$(this).next().html(html);

		Tesseract.recognize(myImage.src)
			.progress(message => $("#result").html("<h2>The picture is progressing.....</h2>"))
			// 		console.log(message)
			.catch(err => console.error(err))
			.then(result =>
				$("#result").html("<h2>The result is : </h2><p> " +  result.text+"</p><button id='del'>删除</button>")
			)
			 .finally(resultOrError => console.log('1'));
		// resultOrError
	});

	$("#result").delegate('button','click',function() {
			$('.pic').empty();
		$('#result').empty();
	});
	
	// ERROR
	// $("button").live('click',function() {
	// 		$('.pic').empty();
	// 	$('#result').empty();
	// });
});