const img = document.querySelector('img');
let stringToSearch = document.getElementById('search').value; 
const API_KEY = 'DObRD9EoCneCObFAd57k5S7P9mptjYeE';
const searchString = 'api_key=' + API_KEY;

//Function to fetch GIFS from the website
async function fetchImage(searchParam) {
    let stringToSearch = document.getElementById('search').value; 
    searchParam = stringToSearch !== "" ? stringToSearch.toLowerCase() : 'dogs';

    const response = await fetch('https://api.giphy.com/v1/gifs/translate?' + searchString + '&s=' + searchParam, {mode: 'cors'});
    const dogData = await response.json();
    img.src = response.data.images.original.url;
}

document.onload = fetchImage();