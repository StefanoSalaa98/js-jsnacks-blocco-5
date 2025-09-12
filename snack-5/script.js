const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const even = nums.filter(number => number % 2 === 0); 

console.log("Lista numeri pari: ",even);

const odd = nums.filter(number => {
    return number % 2 !== 0;
}); 

console.log("Lista numeri dispari ",odd);