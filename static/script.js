class Country {
    constructor(name, capital, flag, region, currency, alpha2Code) {
        this.name = name;
        this.capital = capital;
        this.flag = flag;
        this.currency = currency;
        this.region = region;
        this.alpha2Code = alpha2Code;
    }
}

let countries = [];
function display(i) {
    const country = countries[i];
    let div = document.createElement('div');
    div.classList.add('border', 'mt-2', 'w-75')
    div.innerHTML = `<h1>${country.name}</h1><h3>Столица: ${country.capital}</h3><p><img src="${country.flag}"></p><p>Регион: ${country.currency}</p><p>Волюта: ${country.region}</p>
                    <p>Ссылка на информацию об этой стране: <a href="https://www.google.com/search?q=${country.name}" target="_blank">Information</a></p>
                    <p>Ссылка на вивипедию: <a href="https://ru.m.wikipedia.org/wiki/${country.name}" target="_blank"> Wikipedia</a></p>`;
    document.getElementsByClassName('cities')[0].prepend(div);
}


async function getCountry() {
    await fetch('https://restcountries.eu/rest/v2/all')
        .then(r => r.json()).then(j => {
            for (let i = 0; i < 250; i++) {
                countries.push(new Country(j[i].name, j[i].capital, j[i].flag, j[i].currencies[0].name, j[i].region, j[i].alpha2Code));
            }
        });
}

getCountry().then(r => {
    Warnings();
    console.log(r);
});

function Warnings() {
    const submit = document.getElementsByClassName('submit')[0];
    submit.addEventListener('click', function (event) {
        const form = document.getElementsByClassName('inline')[0];
        const form2 = form.elements;
        if (form2['country-name-form'].value === "") {
            alert("Пожалуйста, напишите название страны");
        } else if (form2['country-name-form'].value.length < 2) {
            alert("Пожалуйста, напишите название страны более чем на 2 символа");
        } else {
            сharacters(form2['country-name-form'].value);
        }
        form2['country-name-form'].value = '';
        form2['country-name-form'].focus();
        event.preventDefault();
    });
}

function сharacters(t) {
    let e = t;
    let f = false;
    for (let i = 0; i < countries.length; i++) {
        if (e.length > 0) {
            if (countries[i].name === e) {display(i);f = true;}
        }if (e.length === 2) {
            if (countries[i].alpha2Code === e) {display(i);f = true;}
        }}if (!f) {alert("Мы не нашли такой страны.");}
}