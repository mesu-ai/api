const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));

};

cosnt = displayCountry = (data) => {
    const showCountry = document.getElementById('countryId');

    data.forEach(country => {

        // console.log(country);

        const div = document.createElement('div');
        div.classList.add('country');

        const h3 = document.createElement('h3');
        h3.innerText = country.name;

        const p = document.createElement('p');
        p.innerHTML = ` Capital: ${country.capital}, Border: ${country.borders}`;


        div.appendChild(h3);
        div.appendChild(p);

        showCountry.appendChild(div);


    });



}