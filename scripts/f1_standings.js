const f1_api_url = 'https://ergast.com/api/f1/current/driverStandings.json'
var Arr = new Array();
var test;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function myDisplayer(data) {
    test = data[3];
    for (let i = 0; i < data.length; i++) {
        data[i] = capitalizeFirstLetter(data[i]);
        data[i] = `${i+1}.\t\t` + data[i];
    }

    document.getElementById("demo").innerHTML = data.join("<br>");
  }

async function getData() {
    const response = await fetch(f1_api_url);
    const data = await response.json();
    const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    for (let i = 0; i < drivers.length; i++) {
        Arr.push(drivers[i].Driver.driverId)
    }
    return Arr;
}

getData().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);



