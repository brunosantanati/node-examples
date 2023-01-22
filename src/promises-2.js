//Lesson 93 - Promise Chaining
//file name in the video: 8-promises.js
//folder in the video: playground
//command to run it: node promises-2.js

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//it's not the ideal solution, because we end up with nested, complex and duplicate code
/*add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})*/

//it works the same as code above, but using promise chaining
add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})