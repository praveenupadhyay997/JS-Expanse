const url = 'https://jsonplaceholder.typicode.com/posts'
const url2 = 'https://httpdump.app/inspect/53503122-8bd7-48e9-bc34-61b5c88a1289'
const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.length)
}

fetch(url2, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "Marcel", "password": "supersecret", "this is a": "test"
    })
})

getData()