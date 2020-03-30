const https = require('https')

const url = 'https://api.darksky.net/forecast/70ff7c58595674b62c6cb99468310588/40,-75?units=si&lang=pt'

const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()

