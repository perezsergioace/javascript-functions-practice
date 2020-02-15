let favoriteBooks = [];

function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName)
    }
}

// using array methods
// function printFavoriteBooks() {
//     console.log(`Favorite Books: ${favoriteBooks.length}`)
//     favoriteBooks.map(book => {
//         console.log(book)
//     })
// }

// using a for loop
function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`)
    for (let i = 0; i < favoriteBooks.length; i++) {
        console.log(favoriteBooks[i])
    }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Dont't Know JS");
// console.log(favoriteBooks)

printFavoriteBooks();-
