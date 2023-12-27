import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_RSqy4kQ96G7wl3ALNkQ5xctIMEcoQJJTbL6AEpjpVxt515kdUK4tOsmHG2SMXMBv";

fetch('https://api.thecatapi.com/v1/breeds').then((result) => {
    return result.json();
}).catch((error)=>{console.log(error)});