const add = (p1, p2, callback) => {
    setTimeout(() => {
        callback(p1 + p2)
    }, 2000);
}

add (1, 4, (sum) => {
    console.log(sum)
})

