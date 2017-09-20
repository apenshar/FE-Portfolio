$(document).ready(function(){
  setInterval(time);
 
  function time() {
    var end =new  Date(2017,11,25,0,0,0)
    var start = new Date()
    var endTime=end.getTime();
    var startTime=start.getTime();
    var countdown = endTime - startTime
    var day = Math.floor((countdown)/1000/60/60/24)
    var hour = Math.floor((countdown)/1000/60/60%24)
    var min = Math.floor((countdown)/1000/60%60)
    var sec = Math.floor((countdown)/1000%60)
    
        if (day < 100) {
      $('.num1').text("0");
      $('.num2').text(day.toString()[0]);
     $('.num3').text(day.toString()[1]);
    } else {
      $('.num1').text(day.toString()[0]);
      $('.num2').text(day.toString()[1]);
     $('.num3').text(day.toString()[2]);
    }
   
    if ( hour < 10) {
      $('.num4').text("0");
      $('.num5').text(hour.toString()[0]);
    } else {
      $('.num4').text(hour.toString()[0]);
      $('.num5').text(hour.toString()[1]);
    }
    
        if (min < 10) {
      $('.num6').text("0");
      $('.num7').text(min.toString()[0]);
    } else {
      $('.num6').text(min.toString()[0]);
      $('.num7').text(min.toString()[1]);
    }
    
    
     if ( sec< 10) {
      $('.num8').text("0");
      $('.num9').text(sec.toString()[0]);
    } else {
      $('.num8').text(sec.toString()[0]);
      $('.num9').text(sec.toString()[1]);
    }
    // if (date.getHours() < 10) {
    //   $('.num1').text("0");
    //   $('.num2').text(date.getHours());
    // } else {
    //   $('.num1').text(date.getHours().toString()[0]);
    //   $('.num2').text(date.getHours().toString()[1]);
    // }
    // if (date.getMinutes() < 10) {
    //   $('.num3').text("0");
    //   $('.num4').text(date.getMinutes());
    // } else {
    //   $('.num3').text(date.getMinutes().toString()[0]);
    //   $('.num4').text(date.getMinutes().toString()[1]);
    // }
  }
});