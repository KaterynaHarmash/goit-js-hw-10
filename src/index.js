
import CatsApiService from './cat-api';

const refs = {
    select: document.querySelector('.breed-select'),
}

const catAPI = new CatsApiService();

const myoption = catAPI.fetchBreeds().then((catsBreed) => {
    const catsSelectMarkup = catsBreed.map(({id, name}) => {
        return `<option value="${id}">${name}</option>`;
    });
    addOptionsToSelect(catsSelectMarkup);
})
function addOptionsToSelect(optionsArray) {
    return refs.select.insertAdjacentHTML('beforeend',optionsArray.join(''));
}

refs.select.addEventListener('change', (e) => {
    e.preventDefault();

})