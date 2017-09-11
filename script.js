var url = 'http://api.icndb.com/jokes/random'
        button = document.getElementById('get-joke');
        paragraf = document.getElementById('joke');

button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraf.innerHTML = response.value.joke;
    });
    xhr.send();
}