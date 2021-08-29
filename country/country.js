const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));

};

cosnt = displayCountry = (data) => {
    const showCountry = document.getElementById('countryId');

    data.forEach(country => {

        console.log(country);

        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        <h3> Country: ${country.name} </h3>
        <p> Capital: ${country.capital}</p>
        
        <button onclick="counterDetails('${country.name}')"> Details </button>

        `
        showCountry.appendChild(div);

    });


}

const counterDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]));

}

const displayDetails = (data) => {
    console.log(data.name);

    const details = document.getElementById('details-Id');

    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Name:${data.name}</h3>
    <p>Name:${data.population}</p>
    <p>Name:${data.borders}</p>
    <img src="${data.flag}">

    `
    details.appendChild(div);



}