fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
            return response.json()
    })
    .then(function(json) {
        return console.log(json)
    })
    .catch(function(error) {
        console.error(error)
    });