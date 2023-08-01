module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let resultWorld = '';

  if (number === 0) {
    resultWorld = units[0];
  }

  if (number > 99) {
    resultWorld += units[Math.floor(number / 100)] + ' hundred';
    number %= 100;
    if (number) {
      resultWorld += ' ';
    }
  }

  if (number > 19) {
    resultWorld += tens[Math.floor(number / 10)];
    number %= 10;
    if (number) {
      resultWorld += ' ';
    }
  }

  if (number) {
    resultWorld += units[number];
  }

  return resultWorld;
}
