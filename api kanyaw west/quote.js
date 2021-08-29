function showQuote() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data));

}

function displayQuote(data) {

    const quoteShow = document.getElementById('quoteText');
    quoteShow.innerText = data.quote;
}