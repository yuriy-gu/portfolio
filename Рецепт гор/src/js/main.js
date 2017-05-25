$(document).ready(function () {

  //timer
  function get_timer() {

    var date_t = new Date;
    date_t.setHours(24,0,0);
    var date = new Date();
    var timer = date_t - date;
    
    if(date_t > date) {
      var hour = parseInt(timer/(60*60*1000))%24;
      if(hour < 10) {
        hour = '0' + hour;
      }
      hour = hour.toString();

      var min = parseInt(timer/(1000*60))%60;
      if(min < 10) {
        min = '0' + min;
      }
      min = min.toString();
      
      var sec = parseInt(timer/1000)%60;
      if(sec < 10) {
        sec = '0' + sec;
      }
      sec = sec.toString();

      if(hour[1] == 3 && 
        min[0] == 5 && 
        min[1] == 9 && 
        sec[0] == 5 && 
        sec[1] == 9) {
        animation($(".hour0"),hour[0]);
      }
      else { 
        $(".hour0").html(hour[0]);
      }
      
      if(min[0] == 5 && 
        min[1] == 9 && 
        sec[0] == 5 && 
        sec[1] == 9) {
        animation($(".hour1"),hour[1]);
    }
    else { 
      $(".hour1").html(hour[1]);
    }

    if(min[1] == 9 && 
      sec[0] == 5 && 
      sec[1] == 9) {
      animation($(".min0"),min[0]);
  }
  else { 
    $(".min0").html(min[0]);
  }

  if(sec[0] == 5 && sec[1] == 9) {
    animation($(".min1"),min[1]);
  }
  else {
    $(".min1").html(min[1]);
  } 

  if(sec[1] == 9) {
    animation($(".sec0"),sec[0]);
  }
  else {
    $(".sec0").html(sec[0]);
  }

  animation($(".sec1"),sec[1]); 

  setTimeout(get_timer,1000);
  }
  else {
    // $(".clock").html("<span class='stop'>акция закончилась!!!</span>");
    $(".clock").css('display', 'none');
  }

  }

  function animation(vibor,param) {
    vibor.html(param)
    .css({'marginTop':'-20px','opacity':'0'})
    .animate({'marginTop':'0px','opacity':'1'});
  }

  get_timer();


  //clikc button
  $('.orderCall').on('click', function() {
    $('.overlay, .pop-up').css('display', 'block');
  })
  $('.overlay, .glyphicon-remove').on('click', function() {
    $('.overlay, .pop-up').css('display', 'none');
  })

  //right pop-up 
  $('.pop-up__info_close').on('click', function(e) {
     $(e.target).closest('div').css('display', 'none');
  })


var popUpShow = setInterval(function() {
  var popUp = [$('.pop-up__visitor'), $('.pop-up__recall'), $('.pop-up__purchase')];
  var randPopUp = Math.floor(Math.random() * popUp.length);
  var res = popUp[randPopUp];
  res.css('display', 'block');
}, 5000);

var popUpHide = setInterval(function() {
  $('.pop-up__info').css('display', 'none');
}, 10000);
    
                



});