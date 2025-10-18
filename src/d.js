/* Przykład wykorzystania funkcji konstruktora do tworzenia obiektów  — obiekty powinny mieć przynajmniej 3 pola
    różnych typów i 1 metodę robiącą coś */
function Person (firstName, age, isEmployed) {
    this.firstName = firstName
    this.age = age
    this.isEmployed = isEmployed

    this.whoAmI = function () {
        console.log(`Cześć, jestem ${this.firstName}, mam ${this.age} lat i ${this.isEmployed ? 'mam pracę' : 'jestem bezrbotny'}.`)    }
}

const person1 = new Person('Adam', 21, true)
person1.whoAmI()

const person2 = new Person('Kuba', 33, false)
person2.whoAmI()