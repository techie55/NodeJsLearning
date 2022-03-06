// Object property shorthand

const name = 'Johnson'
const userAge = 46

const user = {
    name,
    age: userAge,
    location: 'Fremont'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: 200.00
}

const {label: productLabel, price, rating = 5, salePrice} = product

console.log(productLabel, price, rating, salePrice)

const transaction = (type, { label, stock} ) => {
    console.log(type, label, stock)
}

transaction('order', product)
