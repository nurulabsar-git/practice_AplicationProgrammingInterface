fetch('https://restcountries.eu/rest/v2/all')
.then(convertJson => convertJson.json())
.then(gettingData => countriesData(gettingData));




const countriesData =(countries) =>{

    console.log(countries);
     const ul = document.getElementById('countries');

    for(let i = 0; i < countries.length; i++){
        const country = countries[i];
        console.log(country.name);
        const list = document.createElement('li');
        list.innerText = country.name;
        ul.appendChild(list);
    }
}