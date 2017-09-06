feather.replace();
var searchResult = [];
var html = "";
// function Result(title, snippet) {
//   this.title = title;
//   this.snippet = snippet;
// } 改用new Array 无须构造函数 替换24行

function search() {
	$.ajax({
		url:
			"https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" +
				$("#search").val(),
		dataType: "jsonp",
		type: "POST",
		headers: {
			// "Api-User-Agent": "Example/1.0"
		},
		success: function(data) {
			// console.log(data.query.search)
			$(".result").empty();
			searchResult.length = 0;
			var resArr = data.query.search;
			//For each result, generate the html data.
			for (var result in resArr) {
				// var content =new Result(resArr[result].title, resArr[result].snippet);
				var content = new Array(resArr[result].title, resArr[result].snippet);
				searchResult.push(content);
				// html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resArr[result].title + '"target="_blank"><h3>' + resArr[result].title + '</h3></a><p>' + resArr[result].snippet + '</p></div>';          $('.result').append(html);
			} //for
			searchResult.forEach(x => {
				html =
					'<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' +
					x[0] +
					'"target="_blank"><h3>' +
					x[0] +
					"</h3></a><p>" +
					x[1] +
					"</p></div>";
				$(".result").append(html);
			});
		} //success
	}); //ajax

	if ($("#search").val().length > 0) {
		$(".articles").css("display", "none");
	} else if ($("#search").val().length < 1) {
		$(".articles").css("display", "block");
	}

	// This make thigns tick with each key stroke
	$("#search").unbind("keyup");
	$("#search").keyup(function() {
		search();
	});
} //search

$("#search").keyup(function() {
	search();
});