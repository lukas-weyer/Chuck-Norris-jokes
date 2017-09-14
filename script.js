var url = 'http://api.icndb.com/jokes/random';
var $button = $('#get-joke').click(function() {
    getJoke();
});
var $paragraf = $('#joke');

document.addEventListener("DOMContentLoaded", function() {
    getJoke();
});

function getJoke() {
    $.ajax({
        method: 'GET',
        url: url,
        success: function(res) {
            $paragraf.text(res.value.joke);
        }
    });
}