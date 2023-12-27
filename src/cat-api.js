import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_RSqy4kQ96G7wl3ALNkQ5xctIMEcoQJJTbL6AEpjpVxt515kdUK4tOsmHG2SMXMBv";
const BASE_URL = 'https://api.thecatapi.com/v1/';
export default class CatsApiService {
    constructor() {
        this.searchQuery = '';
        this.breeds = [];
    }

    fetchBreeds() {
        return fetch(`${BASE_URL}breeds?limit=100`).then((result) => {
            return result.json();
        }).catch((error)=>{console.log(error)});
    }

    fetchCatByBreed(breedId) {
        return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`).then((result) => {
            return result.json();
        }).catch((error)=>{console.log(error)});
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}