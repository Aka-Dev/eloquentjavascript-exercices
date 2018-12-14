for(let i = 1; i <= 100; i++) {
    let $displayResult = document.getElementById('display-result');
    $displayResult.innerHTML += (i % 3 == 0 && i % 5 == 0) ? 'FizzBuzz <br>' : (i % 3 == 0) ? 'Fizz <br>' : (i % 5 == 0 && i % 3 != 0) ? 'Buzz <br>' : `${i} <br>`;
}