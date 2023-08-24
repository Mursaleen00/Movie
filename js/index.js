const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmFlMzE2ZDdlMzhkYTY5ODRkYTliMjg5OWU5NTAwNCIsInN1YiI6IjY0ZTY3Y2IzNTI1OGFlMDBjOTRiMzM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._CF9tPD5f4STNn01n5qoh_HyHPJtAi5dCZyCR0rM5mw'
    }
};



let nx = 1
function next() {
    let a = `&page=${nx++}`;
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US${a}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let card = document.getElementById('card');
            for (let i = 0; i < 20; i++) {
                card.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                        <div class="card-body border">
                        <h5 class="card-title">${response.results[i].title}</h5>
                          <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                          <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                          <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                        </div>
                      </div>`
                //     card.innerHTML += `<img src="https://image.tmdb.org/t/p/original">
                // <h1></h1>`
            }
        })
        .catch(err => console.error(err));


}


let tr = 1
function top_reated() {
    let a = `&page=${tr++}`;
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US${a}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let card = document.getElementById('tr');
            for (let i = 0; i < 20; i++) {
                card.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                        <div class="card-body border">
                        <h5 class="card-title">${response.results[i].title}</h5>
                          <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                          <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                          <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                        </div>
                      </div>`
                //     card.innerHTML += `<img src="https://image.tmdb.org/t/p/original">
                // <h1></h1>`
            }
        })
        .catch(err => console.error(err));
}

let po = 1
function popular() {
    let a = `&page=${po++}`;
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US${a}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let card = document.getElementById('po');
            for (let i = 0; i < 20; i++) {
                card.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                        <div class="card-body border">
                        <h5 class="card-title">${response.results[i].title}</h5>
                          <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                          <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                          <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                        </div>
                      </div>`
                //     card.innerHTML += `<img src="https://image.tmdb.org/t/p/original">
                // <h1></h1>`
            }
        })
        .catch(err => console.error(err));
}

let up = 1
function Upcoming() {
    let a = `&page=${up++}`;
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US${a}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let card = document.getElementById('up');
            for (let i = 0; i < 20; i++) {
                card.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                        <div class="card-body border">
                        <h5 class="card-title">${response.results[i].title}</h5>
                          <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                          <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                          <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                        </div>
                      </div>`
                //     card.innerHTML += `<img src="https://image.tmdb.org/t/p/original">
                // <h1></h1>`
            }
        })
        .catch(err => console.error(err));
}


fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
.then(response => response.json())
.then(response => {
    console.log(response);
    let up = document.getElementById('up');
    let po = document.getElementById('po');
    let tr = document.getElementById('tr');
    let card = document.getElementById('card');
    
    for (let i = 0; i < 4; i++) {
        card.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body border">
                <h5 class="card-title">${response.results[i].title}</h5>
                  <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                  <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                  <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                </div>
              </div>`
    }
    for (let i = 5; i < 9; i++) {
        up.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body border">
                <h5 class="card-title">${response.results[i].title}</h5>
                  <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                  <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                  <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                </div>
              </div>`
    }
    for (let i = 10; i < 14; i++) {
        po.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body border">
                <h5 class="card-title">${response.results[i].title}</h5>
                  <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                  <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                  <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                </div>
              </div>`
    }
    for (let i = 15; i < 19; i++) {
        tr.innerHTML += `<div class="card m-2 border" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body border">
                <h5 class="card-title">${response.results[i].title}</h5>
                  <p class="card-text">Vote Average: ${response.results[i].vote_average}</p>
                  <p class="card-text">Vote Count:   ${response.results[i].vote_count}</p>
                  <p class="card-text">Release Date: ${response.results[i].release_date}</p>
                </div>
              </div>`
    }
})
.catch(err => console.error(err));








    // response.results[0]

    // document.getElementById('a').innerHTML = `src="${response.results[0].backdrop_path}"`