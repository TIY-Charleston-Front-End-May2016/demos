// this will be our random color generator
function randomHex() {
  var hexVal = 'abcedf0123456789';
  var hexValArr = hexVal.split('');
  var color = '#';

  for(var i = 1; i<=6;i++) {
    color += hexValArr[Math.floor(Math.random() * (hexValArr.length - 1))]
  }

  return color
}
