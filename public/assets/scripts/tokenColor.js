var tokens = document.querySelectorAll(".background-color .token");

[].forEach.call(tokens, function(element) {
  var colorValue = element.firstElementChild.style.backgroundColor;
  var color = tinycolor(colorValue);
  var hexString = color.getAlpha() < 1 ? color.toHex8String() : color.toHexString();
  var codeElement = element.querySelector('code');
  codeElement.firstElementChild.textContent = hexString.toUpperCase();
  codeElement.insertAdjacentHTML('afterBegin', color.toRgbString());
});
