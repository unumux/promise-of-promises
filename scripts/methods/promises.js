import {url, generateInterface} from "../shared";

const companiesPromise = fetch(`${url}/companies`).then(res => res.json());
const peoplePromise = fetch(`${url}/people`).then(res => res.json());

Promise.all([companiesPromise, peoplePromise])
    .then(([companies, people]) => generateInterface(companies, people));