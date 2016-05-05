var re = null,
    i;
for (var i = 0; i < 10; i++) {
  var re = /cat/g;
  re.test('catsdrafasdfa');
}
for (var i = 0; i < 10; i++) {
  var re = new RegExp('cat', 'g');
  re.test('catsdrafasdfa');
}

console.log('hello world!');