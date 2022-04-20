const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

async function test() {
    const response = await fetch(url);
    const data = await response.json();

    return data
}

(async() => {
    const data = await test();
    const drinks = data.drinks;

    const filtered = drinks.sort((a, b) => b.idDrink - a.idDrink)
    console.log(filtered)
})()