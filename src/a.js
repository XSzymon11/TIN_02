/* Funkcja przyjmująca dwa (lub więcej) parametry, sprawdzająca czy są one liczbami lub mogą być skonwertowane
    na wartości liczbowe i wykonująca na nich obliczenia lub (jeśli to niemożliwe) zwracająca błąd */
function sum(x, y) {
    const num1 = Number(x)
    const num2 = Number(y)

    if (isNaN(num1) || isNaN(num2)) {
        return 'BLĄD: Przynajmniej jedna z wartości nie jest liczbą \n'
    }

    const result = num1 + num2
    return 'wynik dodawania liczb ' + num1
        + ' + ' + num2 + ' = ' + result + '\n'
}

console.log(sum(1,3))
console.log(sum(1,'3'))
console.log(sum("xyz",3)) // to zwraca nam błąd

