const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// call api when going to localhost:3000
app.get('/', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita') // don't forget https
        .then(resp => {
            console.log(resp.data.drinks.slice(0, 2))
        })
        .catch(err => console.log(err))
    res.send('testing!')
})

// save api json data in a variable and call it
const textExample = async () => {
    const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    return result.data.drinks
}

;(async() => {
    const data = await textExample();
    console.log(data)
})()

app.listen(port, () => console.log(`Listening to port ${port}`))