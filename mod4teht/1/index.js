document.querySelector('#form').addEventListener('submit', async function(evt) {
    evt.preventDefault();

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=girls`);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (error){

    }
});