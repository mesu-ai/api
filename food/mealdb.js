
// get input
const search = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';


    // console.log(inputText);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchData(data.meals));

}

const searchData = (meals) => {

    meals.forEach(meal => {

        const mealShow = document.getElementById('meal-show');

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
           <div class="card h-100 shadow">
                <img class="card-img-top p-3" src=" ${meal.strMealThumb} " alt="">
                <div class="card-body">
                    <h4 class="card-title">${meal.strMeal} </h4>
                    <p class="card-text">${meal.strInstructions}</p>
                </div>
            </div>
        `;


        mealShow.appendChild(div);

        console.log(meal);

    });


}
