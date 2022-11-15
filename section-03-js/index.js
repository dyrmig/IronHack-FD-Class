
let myBio = {
    firstName: "Dmitri",
    lastName: "Sidorov Manko",
    citiesIlIvedIn: ["Vologda","Buenos Aires","Barcelona"],
    age: 34,
    dob: "26/10/1988",
    drinkAlcohol: true
}

const books = [
    {
        bookName: "El Hobbit",
        genre: "Fantasía",
        author: "J.R.R. Tolkien",
        year: 1937,
        ISBN: "9788445000656"
    },
    {
        bookName: "Dune",
        genre: "Ciencia Ficción",
        author: "Frank Herbert",
        year: 1965,
        ISBN: "9788497596824"
    },
    {
        bookName: "Crimen y Castigo",
        genre: "Realismo Ruso",
        author: "Fiódor Dostoyevski",
        year: 1866,
        ISBN: "9788420741468"
    },
    
]


console.log(`User drinks alcohol: ${myBio.drinkAlcohol}`);

console.log(`My favorite book is: ${books[2].bookName}`)

