function fib(num) {
    let fibArr = '0 1';
    let fibIndexOne = 0;
    let fibIndexTwo = 2;
    if (typeof(num) !== 'number' || num === 0) {
        fibArr = '';
        return fibArr;
    } else if (num % 1 !== 0) {
        return 'вызов функции с дробным аргументом не возвращает пустую строку';
    } 
    else if (num === 1) {
        return '0';
    } else {
        while (fibArr.length != num * 2 - 1) {
            fibArr += ' ' + (parseInt(fibArr[fibIndexOne]) + parseInt(fibArr[fibIndexTwo]));
            fibIndexOne += 2;
            fibIndexTwo += 2;
        }
        return fibArr;  
    }


}

console.log(fib()); // ENTER YOUR NUMBER!