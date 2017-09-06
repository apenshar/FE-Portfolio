$(document).ready(function() {
	var container = "";
	var templ = "";
	$("button").on("click", function() {
		$cities = $("#cities").val();
		templ = $(".wrap").html();
		$(".wrap").html(""); //$('.wrap').empty(); 其他remove detach 均不可

		var section = $("<section>", { class: "hide" });
		$(".wrap").append(section);

		$(".hide").css({ display: "block" });

		$.get(
			"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid=" +
				$cities +
				"&format=json",
			function(data, status) {
				//创造节点
				$weadata = data.query.results.channel;
				$("#title").html($weadata.title);
				// $("#city").html($weadata.location.city + "," + $weadata.location.region);
				// $("#time").html($weadata.item.pubDate);
				// $("#weather").html($weadata.item.condition.text);
				//var reg=new RegExp('(http://l.yimg.*?gif)');
				//有括号   :  第一个元素为整个的匹配字符串，从第二个元素开始返回模式中每一个()所定义的分组所匹配的字符串
				//所以要加$url=reg.exec($weadata.item.description)[0]
				// 	var reg = new RegExp("http://l.yimg.*?gif");//
				// 	$url = reg.exec($weadata.item.description);
				// $("#img").html("<img src='" + $url + "'>");
				// $("#temp").html((($weadata.item.condition.temp - 32) / 1.8).toFixed(1) + "	&#8451");
				// $("#humidity").html("<span>Humidity:</span> " + $weadata.atmosphere.humidity + "%");
				// $("#wind").html("<span>Wind:</span>" +$weadata.wind.speed +"mph   " +$weadata.wind.direction +"°");
				// $("#sunrise").html("<span>Sunrise: </span>" + $weadata.astronomy.sunrise);
				// $("#sunset").html("<span>Sunset: </span>" + $weadata.astronomy.sunset);

				// var section=$('<section>',{'class':'hide'});
				// $('.wrap').append(section);
				var weathernow = $("<div>", { id: "weather-now" });
				$(".hide").append(weathernow);

				var city = $("<p>", { id: "city" });
				city.html($weadata.location.city + "," + $weadata.location.region);
				$("#weather-now").append(city);

				var time = $("<p>", { id: "time" });
				time.html($weadata.item.pubDate);
				$("#weather-now").append(time);

				var weather = $("<p>", { id: "weather" });
				weather.html($weadata.item.condition.text);
				$("#weather-now").append(weather);

				var img = $("<p>", { id: "img" });
				var reg = new RegExp("http://l.yimg.*?gif");
				$url = reg.exec($weadata.item.description);
				img.html("<img src='" + $url + "'>");

				$("#weather-now").append(img);
				var temp = $("<p>", { id: "temp" });
				temp.html(
					(($weadata.item.condition.temp - 32) / 1.8).toFixed(1) + "	&#8451"
				);
				$("#weather-now").append(temp);

				var divwnd = $("<div>", { class: "weather-now-data" });
				$("#weather-now").append(divwnd);
				var humidity = $("<p>", { id: "humidity" });
				humidity.html(
					"<span>Humidity:</span> " + $weadata.atmosphere.humidity + "%"
				);
				$(".weather-now-data").append(humidity);
				var wind = $("<p>", { id: "wind" });
				wind.html(
					"<span>Wind:</span>" +
						$weadata.wind.speed +
						"mph   " +
						$weadata.wind.direction +
						"°"
				);
				$(".weather-now-data").append(wind);
				var sunrise = $("<p>", { id: "sunrise" });
				sunrise.html("<span>Sunrise: </span>" + $weadata.astronomy.sunrise);
				$(".weather-now-data").append(sunrise);
				var sunset = $("<p>", { id: "sunset" });
				sunset.html("<span>Sunset: </span>" + $weadata.astronomy.sunset);
				$(".weather-now-data").append(sunset);

				// console.log($weadata.item.description);
				var precast = $("<div>", { id: "precast" });
				$("#weather-now").append(precast);
				// var article = $('<article>')
				// artcle.html('<p><img></img></p>')

				//  $fore.push(new Array(x.day,x.text)
				$forecast = $weadata.item.forecast;
				var htmltext = "";
				for (var x in $forecast) {
					if (x < 7) {
						html =
							"<article>" +
							"<p>" +
							$forecast[x].day +
							"</p>" +
							"<img src='http://l.yimg.com/a/i/us/we/52/" +
							$forecast[x].code +
							".gif'>" +
							"</article>";// htmltext += html;
						$("#precast").append(html);
					} //if
					// $("#precast").append(htmltext);
				} //for
				container = $(".wrap").html();
				$(".wrap").empty();
				$(".wrap").html(container + templ);
			} //function(data,status)
		); //.get method
	}); //click
});