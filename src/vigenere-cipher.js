let matr = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

for (let i = 0; i < 25; i++) {
  matr.push(matr[i].slice(1) + matr[i][0])
}
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(phrase, key) {
    if (phrase === undefined || key === undefined) {
      throw new Error('Error')
    }

    phrase = phrase.toUpperCase();

    let res = '';

    key = key.repeat(Math.ceil(phrase.length / key.length)).toUpperCase();

    for (let i = 0; i < phrase.length; i++) {
      const k = matr.find(str => str[0] === key[i]);

      const j = matr.findIndex(str => str[0] === phrase[i]);

      res += k[j] || phrase[i];
      if (!k[j]) {
        key = ' ' + key;
      }
    }
    return this.direct ? res : [...res].reverse().join('');
  }

  decrypt(phrase, key) {
    if (phrase === undefined || key === undefined) {
      throw new Error('Error')
    }
    phrase = phrase.toUpperCase();
    let res = '';
    key = key.repeat(Math.ceil(phrase.length / key.length)).toUpperCase();
    for (let i = 0; i < phrase.length; i++) {
      const k = matr.find(str => str[0] === key[i]);
      const j = k.indexOf(phrase[i]);
      res += matr[0][j] || phrase[i];
      if (!matr[0][j]) {
        key = ' ' + key;
        //console.log("log1:");
      }
    }
    return this.direct ? res : [...res].reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;