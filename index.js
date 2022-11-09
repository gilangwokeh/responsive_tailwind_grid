function rot13(input) {
  const alphabet = ["A","B","C","D","E","F","H"];
  let str = input.toUpperCase();
  let accumulator = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isAletter = alphabet.includes(char);
    if (isAletter === false) {
      accumulator += char;
    } else {
      const chartIndex = alphabet.findIndex((character) => character === char);
      accumulator += chartIndex + 1;
    }
  }
  return accumulator;
}

let hasil = rot13('abcd efh');
console.log(hasil);

