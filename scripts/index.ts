//pegar os dados do htlm
import {API_ROUTES} from "../constants/api.js";
import { env } from "../env.js"

type Filme = {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string
}

let filmes = [];

async function getFilmes(){
    const request = await fetch(API_ROUTES.baseUrl(env.api_key));
    const response = await request.json();
    renderizarCards(response.results);
    console.log(response);
    
}

async function getImageFilmes() {
    const request = await fetch(API_ROUTES.imageUrl(env.api_key));
    const response = await request.json();
    renderizarCards(response.results);
    console.log(response);
}

const listaDeFilmes =[
    { id: 1, nome:"Gohan", nota:8.0, poster: "https://image.tmdb.org/t/p/w400/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"},
    { id: 2, nome:"Sayaman", nota:8.0, poster: "https://image.tmdb.org/t/p/w400/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"},


];

//função de render para pegar os poster de acordo com a API
function renderizarCards(filmes:Filme[]) {
    const containerGridFilmes = document.getElementById("container-grid-filmes");

    for (let index = 0; index < filmes.length; index++) {

        const card = ` <div class="card-filmes">
                    <img src="https://image.tmdb.org/t/p/w400${filmes[index].poster_path}" alt="" class="card-filmes-poster" id="card-filmes-poster--${filmes[index].id}">
                    <div class="card-filmes-info-container">
                     <div class="card-filmes-info-container-header">
                        <h2 class="card-filmes-info-title" id="card-filmes-title-${filmes[index].id}"> ${filmes[index].title} &nbsp;
                        <span class="card-filmes-info-notes" id="card-filmes-nota-${filmes[index].id}">${filmes[index].vote_average} </span></h2>
                     </div>
                     </div>
                    </div>`;
        if(containerGridFilmes) containerGridFilmes.innerHTML += card;
    }
}


//renderizarCards(listaDeFilmes);

//toda requisição são baseadas em promisses
getFilmes();