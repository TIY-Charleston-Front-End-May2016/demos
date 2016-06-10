// random color generator.

//make sure it gets put on the page



$(document).ready(function() {
  clockPage.init();
})

var clockPage = {

  init: function() {
    setInterval(function() {
      clockPage.timing()
      var backgroundColor = randomHex();

      $('*').css('background-color',backgroundColor);
    },1000)
  },

  timing: function() {
    var $hour = $('#hours');
    var $minute = $('#minutes');
    var $seconds = $('#seconds');
    var actualTime = clockPage.getTime();
    $hour.html(actualTime[0] + ":")
    $minute.html(actualTime[1] + ":")
    $seconds.html(actualTime[2])
  },
  getTime: function() {

    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    minutes = minutes.toString().length > 1 ? minutes :  '0'+minutes;

    if(seconds.toString().length > 1){

    }else {
      seconds = '0'+seconds;
    }
    return [hours, minutes, seconds];
  }
}
