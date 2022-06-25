module.exports = function toReadable (number) {
  
  let before19 = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let after20 = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  if (number === 0) {
    return 'zero';
  }
  if (number <= 19) {
    return before19[number];
  }
  if (number < 100) {
    return (after20[(number + '')[0]] + ' ' +before19[(number + '')[1]]).trim();
  }
  if ((number + '')[1] === '1') {
    return (before19[(number + '')[0]] + ' hundred ' + before19[(number + '')[1] + (number + '')[2]]);
  }
    return (before19[(number + '')[0]] + ' hundred ' + after20[(number + '')[1]] + ' ' + before19[(number + '')[2]]).replace(/  /g, ' ').trim();
  }
