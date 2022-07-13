// Exercise 1

const ex1 = (data, k) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[i] + data[j] === k && data[i] !== data[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log("*****************************************");
console.log("Exercice 1 : deux boucles");
console.log(ex1([10, 15, 3, 7], 25));
console.log(ex1([1, 8, 10, 21], 19));