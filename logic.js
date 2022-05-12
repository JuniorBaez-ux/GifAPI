const img = document.querySelector('img');
let stringToSearch = document.getElementById('search').value; 
const API_KEY = 'DObRD9EoCneCObFAd57k5S7P9mptjYeE';
const searchString = 'api_key=' + API_KEY;

//Function to fetch GIFS from the website
function fetchImage(searchParam) {

    let stringToSearch = document.getElementById('search').value; 
    searchParam = stringToSearch !== "" ? stringToSearch.toLowerCase() : 'dogs';

    fetch('https://api.giphy.com/v1/gifs/translate?' + searchString + '&s=' + searchParam, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    }).catch(e => {
        alert("The process could not be completed. Please try again later.");
        console.log(e)
});
}

document.onload = fetchImage();