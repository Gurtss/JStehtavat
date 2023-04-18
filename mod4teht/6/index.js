const form = document.querySelector('#form');
const resultsContainer = document.querySelector('#results');

		form.addEventListener('submit', async function(evt) {
			evt.preventDefault();
			const query = document.querySelector('#query').value;
			try {
				const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
				const jsonData = await response.json();
				resultsContainer.innerHTML = ''; // clear old results before appending new ones
				for (const joke of jsonData.result) {
					const article = document.createElement('article');
					const p = document.createElement('p');
					p.textContent = joke.value;
					article.appendChild(p);
					resultsContainer.appendChild(article);
				}
			} catch (error) {
				console.error(error);
			}
		});