const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
const displayTime = document.getElementById('currentTime');
console.log("Current time in New York:", newYorkTime);

function searchItem() {
    const inputSearch = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('results');
    
    resultDiv.innerHTML = '';

    fetch('./assets/JSON/data.json')
    .then(response => response.json())
    .then(data => {

        if (inputSearch === 'countries') {
            displayTime.style = "display: block";
            displayTime.innerHTML = "Current Location Time (America/New York): " + newYorkTime;
            data.countries.forEach(country => {
                for (let i = 0; i < country.cities.length; i++) {
                    const cityName = country.cities[i].name;
                    const cityImg  = country.cities[i].imageUrl;
                    const cityDesc = country.cities[i].description;

                    resultDiv.innerHTML += `<div class = "resultJs">
                                                <img src="${cityImg}" alt="city image">
                                                <h3>${cityName}</h3>
                                                <p>${cityDesc}</p>
                                                <button>Visit</button>
                                            </div>` ;
                }
                
            });
        } else if (inputSearch === 'beaches') {
            displayTime.style = "display: block";
            displayTime.innerHTML = "Current Location Time (America/New York): " + newYorkTime;
            data.beaches.forEach(beach => {
                    const beachName = beach.name;
                    const beachImg  = beach.imageUrl;
                    const beachDesc = beach.description;

                    resultDiv.innerHTML += `<div class = "resultJs">
                                                <img src="${beachImg}" alt="city image">
                                                <h3>${beachName}</h3>
                                                <p>${beachDesc}</p>
                                                <button>Visit</button>
                                            </div>` ;
            });
        } else if (inputSearch === 'temples') {
            displayTime.style = "display: block";
            displayTime.innerHTML = "Current Location Time (America/New York): " + newYorkTime;
            data.temples.forEach(temple => {
                    const templeName = temple.name;
                    const templeImg  = temple.imageUrl;
                    const templeDesc = temple.description;

                    resultDiv.innerHTML += `<div class = "resultJs">
                                                <img src="${templeImg}" alt="city image">
                                                <h3>${templeName}</h3>
                                                <p>${templeDesc}</p>
                                                <button>Visit</button>
                                            </div>` ;
            });
        } else {
            document.getElementById('currentTime').style.display = "none";
            resultDiv.innerHTML = `<p class="errorText" >Ohh Sorry, No result found</p>`;
        }
    });
}

function clearItem(){
    document.getElementById('results').innerHTML = "";
    document.getElementById('searchInput').value = "";
    document.getElementById('currentTime').style.display = "none";
}

function thankyou(){
    if ((document.getElementById('name').value !== "") && (document.getElementById('email').value !== "") && document.getElementById('message').value !== "") {
        alert('Thank you for contacting us!');
      } else {
        alert ('Please enter all information !!!');
      }
}