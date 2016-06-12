function filterTemperatures(response) {
    return response.data.map(element => element.temperature);
}

function calculateAverage(numbers) {
    return numbers.reduce((a, b) =>  a + b) / numbers.length;
}

$http
    .get('/weatherService')
    .then(filterTemperatures)
    .then(calculateAverage)
    .then(result => console.log(`Average is: ${result}`));