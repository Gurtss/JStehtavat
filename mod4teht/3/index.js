document.querySelector('#form').addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();
        const resultsContainer = document.querySelector('#results');
        resultsContainer.innerHTML = ''; // clear old results before appending new ones
        for (const tvShow of jsonData) {
            const article = document.createElement('article');

            // add name
            const name = document.createElement('h2');
            name.textContent = tvShow.show.name;
            article.appendChild(name);

            // add url
            const url = document.createElement('a');
            url.href = tvShow.show.url;
            url.target = '_blank';
            url.textContent = 'Details';
            article.appendChild(url);

            // add image
            const image = document.createElement('img');
            image.src = tvShow.show.image?.medium;
            image.alt = tvShow.show.name;
            article.appendChild(image);

            // add summary
            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary;
            article.appendChild(summary);

            // append article to results container
            resultsContainer.appendChild(article);
        }
    } catch (error) {
        console.error(error);
    }
});
