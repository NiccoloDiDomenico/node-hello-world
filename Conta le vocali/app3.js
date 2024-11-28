const vocali = `aeiouAEIOU`;
console.log(vocali);

const word = process.platform
console.log(process.platform);

let conteggio = 0;
for (let i = 0; i < word.length; i++) {
    const curLetter = word[i];
    console.log(curLetter);

    if (vocali.includes(curLetter)) {
        conteggio++;
    };
};
console.log(conteggio);

console.log(`La stringa contiene ${conteggio} vocali`);








