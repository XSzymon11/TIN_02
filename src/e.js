/* Przykład wykorzystania klas do tworzenia obiektów — obiekty powinny mieć przynajmniej 3 pola różnych typów,
    konstruktor i 1 metodę robiącą coś */
class Car {
    constructor(brand, mileage, isDamaged) {
        this.brand = brand
        this.mileage = mileage
        this.isDamaged = isDamaged
    }

    description() {
        console.log(`Samochód marki ${this.brand}, o przebiegu równym ${this.mileage}, a dodatkowo ${this.isDamaged ? 'uszkodzony' : 'nieuszkodzony'}`)
    }
}

const samochod01 = new Car('BMW', 133767, false)
samochod01.description()

const samochod02 = new Car('AUDI', 98760, true)
samochod02.description()