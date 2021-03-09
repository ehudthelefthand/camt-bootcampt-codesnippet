$.ajax('https://jsonplaceholder.typicode.com/posts')
    .done(function(data) {
        alert(data)
    })
    .fail(function(jqXHR, textStatus) {
        console.log(textStatus)
    })