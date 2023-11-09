/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/
let url = 'http://www.omdbapi.com/?apikey=c5de1655&s=batman';

document.getElementById('search').addEventListener('click', fetchMovies);

async function fetchMovies() {
    let searchResult = document.getElementById('search-result');
    searchResult.innerHTML = "";
    let template = document.getElementById('search-item');
    
    const response = await fetch (url);
    const movies = await response.json();

    for (let index = 0; index < movies.Search.length; index++) {
        const listItem =  template.content.cloneNode(true)
        let searchItem = movies.Search[index];

        let poster = listItem.querySelector('img');
        poster.src = searchItem.Poster;

        let title = listItem.querySelector('h2');
        title.innerHTML = searchItem.Title;

        let year = listItem.querySelector('h4');
        year.innerHTML = 'Release year: ' + searchItem.Year;
        
        let imdbID = listItem.querySelector('a');
        imdbID.href = "https://imdb.com/title/" + searchItem.imdbID;

        let type = listItem.querySelector('h5');
        type.innerHTML = "Type: " + searchItem.Type;
        
        searchResult.append(listItem);
    }
}
