const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '25c4922b9bmsh7c2a00d08b662fdp1f86a4jsn04fbd6d35306',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
    }
};

var fromCurrency;
var toCurrency;
var amount;

document.getElementById("convert").addEventListener("click", function () {

    fromCurrency = document.getElementById("fromCurrencyID").value;
    toCurrency = document.getElementById("toCurrencyID").value;
    amountToBeConverted = document.getElementById("amountID").value;
    var API_STRING = String('https://currency-converter18.p.rapidapi.com/api/v1/convert?from=' + fromCurrency + '&to=' + toCurrency + '&amount=' + amountToBeConverted);

    console.log(API_STRING)

    fetch(API_STRING, options)
        .then(response => response.json())
        .then(response => {
            if(response.success == false) {
                document.getElementById("result").innerHTML = response.validationMessage;
            }
            else {
                document.getElementById("result").innerHTML = response.result.convertedAmount;
            }
        })
        .catch(err => console.error(err));
});

