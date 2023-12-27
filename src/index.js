
import CatsApiService from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import loading from './loading';
import Notiflix from 'notiflix';

const catAPI = new CatsApiService();
const load = new loading();

const refs = {
    select: document.querySelector('.breed-select'),
    infoBox: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
}
load.visible(refs.loader);


catAPI.fetchBreeds().then((catsBreed) => {
    catAPI.breeds = catsBreed;
    const catsSelectMarkup = catsBreed.map(({id, name}) => {
        return `<option value="${id}">${name}</option>`;
    });
    load.hidden(refs.loader);
    load.visible(refs.select);
    addOptionsToSelect(catsSelectMarkup);
    new SlimSelect({ select: '.breed-select' });
}).catch(()=>{load.visible(Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))})

function addOptionsToSelect(optionsArray) {
    return refs.select.insertAdjacentHTML('beforeend',optionsArray.join(''));
}
refs.select.addEventListener('change', (e) => {
    e.preventDefault();
    load.hidden(refs.infoBox);
    load.visible(refs.loader);
    catAPI.query = e.currentTarget.value;
    const currentCat = catAPI.breeds.filter((cat)=>{return cat.id===catAPI.searchQuery})
    catAPI.fetchCatByBreed(catAPI.query).then((cat) => {
        load.visible(refs.infoBox);
        refs.infoBox.innerHTML = `<img src="${cat[0].url}" width=350><div><h2>${currentCat[0].name}</h2><p>${currentCat[0].description}</p><p><strong>Temperament:</strong> ${currentCat[0].temperament}</p></div>`;
        load.hidden(refs.loader);
    }).catch(()=>{load.visible(Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))})
})