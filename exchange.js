const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");


const apiKey = "Lhem9n9uKtIOaw20SXH0mg==9S3eTyaFhtkcm7OK"
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

document.addEventListener('DOMContentLoaded', function() {
    convert.addEventListener('click', () => {
        console.log('Hi')
        const amountTotal = amount.value;
        console.log('Total',amountTotal)
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
        console.log('Url',url)
    
        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate',rate)
            const resultPrice = amountTotal * rate;
            console.log('Result', resultPrice)
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
        })
        .catch(error => {
            console.log("Request Failed: ", error);
            result.innerHTML = 'An error occured Please try Again'
        })
    })
})