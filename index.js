//1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function calculateAverage(arr) {
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            amount++;
    } 
}
if (amount === 0) {
    return null;
}
return sum / amount;
}
// Example 
const array =['hi', 5, 903, 'apartment', underfined, 55, '33'];
const example = calculateAverage(array);
console.log(example); // console will show 321


/*2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;
          case '-':
            result = x - y;
            break;
          case '*':
            result = x * y;
            break;
          case '/':
            result = x / y;
            break;
          case '%':
            result = x % y;
            break;
          case '^':
            result = Math.pow(x, y);
            break;
          default:
            console.log('Invalid operator');
            return;
    }
    console.log(`Result: ${result}`);
}
//Examples 
const x = parseFloat(prompt('Enter the first number:'));
const znak = prompt('Enter the operator (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Enter the second number:'));
doMath(x, znak, y);


/*3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.*/

function fill2DArray() {
    const rows = parseInt(prompt('Enter the number of rows in the 2D array:'));
    const cols = parseInt(prompt('Enter the number of columns in each row:'));
    const arr = [];

    for (let i = 0; i < rows; i++) {
        const subArr = [];
        for (let j = 0; j < cols; j++) {
            const values = parseFloat(prompt(`Enter your data for [${i}][${j}]:`));
            subArr.push(value);
        }
        arr.push(subArr);
      }
    
      return arr;
    }
    const result = fill2DArray();
    console.log(result); 

/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.*/

function removeCharacters(string, charactersToRemove) {
  const charactersToRemove = new Set(charactersToRemove);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!charactersToRemoveSet.has(str[i])) {
      result += string[i];
    }
}
return result;
}
// Example 
const inputString = prompt('Enter the input string:');
const enteredCharactersToRemove = prompt('Enter characters to remove:').split(',');
const resultString = removeCharacters(inputString, enteredCharactersToRemove);
console.log(resultString);