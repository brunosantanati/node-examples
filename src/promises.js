//callback ############################################

const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})

//promise ##############################################
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('This went wrong!')
        resolve([7, 4, 1])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
}) 

//States of a Promise ###################################
//
//                                       fulfilled
//                                      /
// Promise      -->     pending     ->
//                                      \
//                                       rejected
//