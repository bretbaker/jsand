function hackerSpeak(str) {
  str = str.replace(/a/gi, '4');
  str = str.replace(/e/gi, '3');
  str = str.replace(/i/gi, '1');
  str = str.replace(/o/gi, '0');
  str = str.replace(/s/gi, '5');
  return console.log(str);
}

hackerSpeak('javascript is cool');
