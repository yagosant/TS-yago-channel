var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//pegar os dados do htlm
import { API_ROUTES } from "../constants/api.js";
import { env } from "../env.js";
let filmes = [];
function getFilmes() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch(API_ROUTES.baseUrl(env.api_key));
        const response = yield request.json();
        renderizarCards(response.results);
        console.log(response);
    });
}
function getImageFilmes() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch(API_ROUTES.imageUrl(env.api_key));
        const response = yield request.json();
        renderizarCards(response.results);
        console.log(response);
    });
}
const listaDeFilmes = [
    { id: 1, nome: "Gohan", nota: 8.0, poster: "https://image.tmdb.org/t/p/w400/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg" },
    { id: 2, nome: "Sayaman", nota: 8.0, poster: "https://image.tmdb.org/t/p/w400/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg" },
];
//função de render para pegar os poster de acordo com a API
function renderizarCards(filmes) {
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
        if (containerGridFilmes)
            containerGridFilmes.innerHTML += card;
    }
}
//renderizarCards(listaDeFilmes);
//toda requisição são baseadas em promisses
getFilmes();
