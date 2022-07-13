// Exercice 1
const ex1 = (data, k) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[i] + data[j] === k) {
                return true;
            }
        }
    }
    return false;
};
console.log("*****************************************");
console.log("Exercice 1 (Sujet1) : 2 boucles");
console.log(ex1([10, 15, 3, 7], 25));
console.log(ex1([1, 8, 10, 21], 19));

// Exercice 2
const ex2 = (data) => {
    let sunsetView = 0;
    for (let i = 0; i < data.length; i++) {
        let hasView = 1;
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] <= data[j]) {
                hasView = 0;
            }
        }
        sunsetView += hasView;
    }
    return sunsetView;
};
console.log("*****************************************");
console.log("Exercice 2 (Sujet2) : 2 boucles");
console.log(ex2([3, 7, 8, 3, 6, 1]));
console.log(ex2([1, 4, 5, 8]));

// Exercice 3
const ex3 = (data, k) => {
    for (let i = 0; i < data.length; i++) {
            if (data[i] + data[i + 1] === k) {
                return true;
            }
    }
    return false;
};
console.log("*****************************************");
console.log("Exercice 3 (Sujet1) : 1 boucle");
console.log(ex3([3, 10, 15, 7], 25));
console.log(ex3([1, 8, 10, 21], 19));

// Exercice 4
const ex4 = (data) => {
    let sunsetView = 0;
    let max = data[data.length - 1];
    for (let j = data.length - 2; j >= 0; j--) {
        if (data[j] > max) {
            sunsetView++;
        }
    }
    return sunsetView;
};
console.log("*****************************************");
console.log("Exercice 4 (Sujet2) : 1 boucle");
console.log(ex2([3, 7, 8, 3, 6, 1]));
console.log(ex2([1, 4, 5, 8]));

// Exercice 5
const ex5 = (k, data) => {
    return data.some((element) => data.includes(k-element))
};
console.log("*****************************************");
console.log("Exercice 5 (Sujet1) : 1 passage");
console.log(ex5(25, [3, 10, 15, 7]));
console.log(ex5(19, [1, 8, 10, 21]));

// Exercice 6
console.log("*****************************************");
console.log("Exercice 5 (Sujet1) : 1 passage");
console.log("???????");