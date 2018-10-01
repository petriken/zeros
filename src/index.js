module.exports = function getZerosCount(number) {
  let a = number;
    let res = 0;
      while (a) {
      a = Math.floor(a/5);
      res += a
    }
    return res;
 }
