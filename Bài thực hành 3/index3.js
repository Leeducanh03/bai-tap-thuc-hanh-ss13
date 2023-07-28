let value = prompt("Mời bạn nhập 1 số: ");
let numbers = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
        alert("Value " + numbers[i] + "found at " + i);
    }
}
