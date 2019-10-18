const talkingCalendar = function(string) {
  let array = string.split('/'); //splits string at '/'
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //creates an array of months names
  let day = array[2]; //extracts value of day
  let month = array[1]; //extracs value of month
  if (month.charAt(0) === '0') { // if month starts with 0 remove 0 convert to number
    month = (Number(month.charAt(1)) - 1);
  } else {
    month = (Number(month)) - 1;
  }

  if (day.charAt(0) === '0') { // if day starts with 0 remove 0 convert to number
    day = day.charAt(1);
  }
  if (day.length === 2) { //if day length is 2 characters
    if (day === '11') { //exception for 11
      day = (day + 'th');
    } else if (day.charAt(1) === '1') { //go to second character and if it starts with 1 add 'st'
      day = (day + 'st');
    } else if (day.charAt(1) === '2') {
      day = (day + 'nd');
    } else if (day.charAt(1) === '3') {
      day = (day + 'rd');
    } else {
      day = (day + 'th');
    }
  } else {
    switch (day.charAt(0)) {
    case '1':
      day = (day + 'st');
      break;
    case '2':
      day = (day + 'nd');
      break;
    case '3':
      day = (day + 'rd');
      break;
    default:
      day = (day + 'th');
      break;
    }
  }
  let year = array[0];
  let finalMonth = months[month];
  return `${finalMonth} ${day} ${year}`;
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));