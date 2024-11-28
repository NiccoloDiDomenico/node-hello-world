const number = parseInt(process.pid)
console.log(number);

if (number % 2 === 0) {
    console.log(`Il numero ${number} è pari`);
} else {
    console.log(`Il numero ${number} è dispari`);
}