let array = [];
for (let i = 0; i < 5; i++) {
    array.push(i);
}
console.log("Sử dụng phương thức push()", array);

let a = 10;
array.unshift(a);
console.log("Sử dụng phương thức unshift()", array);
array.pop();
console.log("Sử dụng phương thức pop()", array);
array.shift()
console.log("Sử dụng phương thức shift()", array);
array.splice(1, 2)
console.log("Sử dụng phương thức splice()", array);