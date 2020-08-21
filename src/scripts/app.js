$(document).ready(function() {


    function getTimeRemaining(endtime){
        var total = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (total/1000) % 60 );
        var minutes = Math.floor( (total/1000/60) % 60 );
        var hours = Math.floor( (total/(1000*60*60)) % 24 );
        var days = Math.floor( total/(1000*60*60*24) );
      
        return {
          totle: total,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
    }
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining("20 Jan 2021 00:00:00 GMT");
        $('#days').html(t.days);
        $('#hours').html(t.hours);
        $('#minutes').html(t.minutes);
        $('#seconds').html(t.seconds);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
    },1000);


    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-menu').slideToggle(250);
    });
    AOS.init();
});

