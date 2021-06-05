class Country{
    constructor(name,capital,flag,currencies,region , alpha2Code) {
        this.name = name,
            this.capital = capital,
            this.flag = flag,
            this.currencies = currencies,
            this.region = region,
            this.alpha2Code = alpha2Code
    }
}

let contr = []
function addCountry(countries) {
    let country = contr[i]
    let createDiv = document.createElement('div')
    createDiv.innerHTML=
        `<h1>${countries.name}</h1>
        <p>Capital: ${countries.capital}</p>
        <p>${countries.flag}</p>
        <p>Currencies: ${countries.currencies}</p>
        <p>Region: ${countries.region}</p> 
         <a href="https://www.google.com/search?q=${countries.name}" target="_blank">More</a>   `
 }

 async function getCont(countries) {
    await fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for (let i = 0; i < 100; i++) {
                contr.push(new Country(json[i].name,json[i].capital,json[i].flag,json[i].currencies,json[i].region))
            }
        })
 }