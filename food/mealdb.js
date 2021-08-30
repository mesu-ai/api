
// get input
const search = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    if (inputField.value == '') {
        console.log('Enter Meal Name !');

    } else {

        inputField.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => searchData(data.meals));



    }

}

const searchData = (meals) => {
    // if (meals.length == 0) {
    //     console.log('ok');

    // }
    const mealShow = document.getElementById('meal-show');
    mealShow.textContent = '';


    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
           <div onclick="mealDetails(${meal.idMeal})" class="card h-100 shadow">
                <img class="card-img-top p-3" src=" ${meal.strMealThumb} " alt="">
                <div class="card-body">
                    <h4 class="card-title">${meal.strMeal} </h4>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `;

        mealShow.appendChild(div);
        console.log(meal);

    });

}

const mealDetails = (mealId) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.meals[0]));


}

const showDetails = (meal) => {
    const details = document.getElementById('details-show');
    details.textContent = '';

    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `
    <hr>
    <h3 class="text-black text-center my-3 fw-bold">Meal Details</h3>
           <div class="card shadow">
                <img src="${meal.strMealThumb}" class="card-img-top p-3" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                </div>
            </div>
            <hr>
    
    `;

    details.appendChild(div);
}
