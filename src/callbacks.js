setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})
console.log(shortNames)

const geocode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }

    return data
}

const data = geocode('Philadelphia')
console.log(data)

const geocode2 = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 10,
            longitude: 10
        }
    
        callback(data)
    }, 2000);    
}

geocode2('Philadelphia', (data) => {
    console.log(data)
})

// https://gist.github.com/andrewjmead/9d35b2a9f98455902ec9aa97097028d7
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (number1, number2, callback) => {
    setTimeout(() => {
        const sum = number1 + number2
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})