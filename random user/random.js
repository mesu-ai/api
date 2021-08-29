function randomUser() {

    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayData(data));

}
function displayData(data) {
    const div = document.getElementById('userdiv');
    const users = data.results;
    for (const user of users) {
        console.log(user);

        const p = document.createElement('p');
        p.innerHTML = `Name: ${user.name.title} ${user.name.first} ${user.name.last}, Phone: ${user.phone}, Email: ${user.email}, Address: ${user.location.city}, ${user.location.postcode}, ${user.location.state}, ${user.location.country}`;
        div.appendChild(p);

    }

}