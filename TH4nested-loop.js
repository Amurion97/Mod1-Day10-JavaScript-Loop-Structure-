let result = '<table>';
for (let i = 1; i <= 10; i++){
    result += '<tr>';
    for (let j = 1; j <=10; j++){
        result += '<td>'+ i * j + '</td>';
    }
    result += '</tr>';
}
result += '</table>';
document.getElementById("result").innerHTML = result;
let count = 0;
while (count++ < 10) {
    count++;
    console.log(count);
}

count = 0;
do {
    count++;
    console.log(count);
} while (count++ < 10);
console.log(count);
count = 9;
console.log(count);
console.log(++count);
console.log(++count);
