let fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
if (error) {
console.log(error);
return;
}
console.log(data); //Le contenu du fichier est présent dans data
data = data.split(" ").map((data) => Number(data));

const mergeSort = (data) => {
let run = 0;
const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]) {
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
    }
    while (left.length) {
    result.push(left.shift());
    }
    while (right.length) {
    result.push(right.shift());
    }
    return result;
};

const sort = (data) => {
    run++;
    if (data.length < 2) {
    return data;
    }
    let middle = Math.floor(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, data.length);
    return merge(sort(left), sort(right));
};
data = sort(data);
console.log(`Tri fusion : ${run} comparaisons`);
console.log("-------------------------------------");
return data;
};

// Run
console.log("=====================================");
copy = data.slice();
console.log(mergeSort(copy));

});