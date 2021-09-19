// ES5 class StringBuilder
function StringBuilder(string) {
    this.string = string;
  }
  
  let stringChanger = ' ';
  StringBuilder.prototype.plus = function (...str) {
      stringChanger = this.string;
      stringChanger = stringChanger.concat(...str)
      return stringChanger;
  }
  
  StringBuilder.prototype.minus = function (n) {
    stringChanger = stringChanger.slice(0, -n);
    return stringChanger;
  }
  
  StringBuilder.prototype.multiply = function (number) {
    stringChanger = stringChanger.repeat(number);
    return stringChanger;
  }
  
  StringBuilder.prototype.devide = function (n) {
    const k = Math.floor(stringChanger.length / n);
    stringChanger = stringChanger.slice(0, k)
    return stringChanger;
  }
  
  StringBuilder.prototype.remove = function (str) {
    stringChanger = stringChanger.replaceAll(str, ""); // Use latest version of chrome browser and Node js(v16.9.1)
    return stringChanger;
  }
  
  StringBuilder.prototype.sub = function (index, n) {
      stringChanger = stringChanger.substring(index, n + 1);
      return stringChanger;
  }
  
  StringBuilder.prototype.get = function () {
    return stringChanger;
  }
  
  const strBuilder = new StringBuilder("Hello");
  
  
  console.log(
    'results:',
    '.plus:',
    strBuilder.plus(' all', '!'),
    '.minus:',
    strBuilder.minus(4),
    '.multiply:',
    strBuilder.multiply(3),
    '.devide:',
    strBuilder.devide(4),
    '.remove:',
    strBuilder.remove('l'),
    '.sub',
    strBuilder.sub(1, 1),
    'get',
    strBuilder.get(),
  )