var base_url = 'https://ergast.com/api/f1/'

$(document).ready(() => {
    $.ajax({
        url: `${base_url}current/driverStandings.json`,
        type: "GET",
        success: (res) => {
            console.log(res);
        } 
    })
})