/* Funkcja przyjmująca jako jeden z parametrów funkcję (i wykorzystująca ją w jakiś sposób) + 2 przykładowe funkcje,
    które można wykorzystać jako jej parametry */
function missionCalcultor(x, y, operation) {
    let num1 = Number(x)
    let num2 = Number(y)

    if (isNaN(num1) || isNaN(num2)) {
        return 'Błąd - nie liczba \n'
    }

    const result = operation(num1, num2)
    return 'Wynik operacji to: ' + result + '\n'
}

function subtraction(x, y) {
    return x - y
}

function addition(x, y) {
    return x + y
}

console.log(missionCalcultor(3, 'z', addition))
console.log(missionCalcultor(3, 5, addition))
console.log(missionCalcultor(10, 5, subtraction))
