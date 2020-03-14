module.exports = function getSeason(date) {

  if(date === undefined){
    return 'Unable to determine the time of year!';
  }

  let month = date.toLocaleString('en-us', {month: 'long'});
  
    switch (month) {
      case 'January':
      case 'February':
      case 'December':
        return 'winter';
      case 'March':
      case 'April':
      case 'May':
        return 'spring';
      case 'June':
      case 'July':
      case 'August':
        return 'summer';
      case 'September':
      case 'October':
      case 'November':
        return 'autumn';
      default:
        throw 'Error'; 
    }
};
