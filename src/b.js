// Funkcja przyjmująca zmienną liczbę parametrów i robiąca z nimi coś
function sumAllNumbers(...args) {
    const nums = args.map(Number)
    if (nums.some(isNaN)) {
        return 'Błąd - wszystkie argumenty muszą być liczbami'
    }
    return nums.reduce((sum, num) => sum +num, 0)
}

console.log(sumAllNumbers(3,2,3,4,6))
console.log(sumAllNumbers(9,1,7,3,6))
console.log(sumAllNumbers('4',1,7,3,6))
console.log(sumAllNumbers('z',1,7,3,6)) // bąd