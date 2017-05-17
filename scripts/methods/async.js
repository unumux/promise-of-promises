import regeneratorRuntime from "regenerator-runtime";
import {url, generateInterface} from "../shared";

(async function() {
    const companiesPromise = fetch(`${url}/companies`).then(res => res.json());
    const peoplePromise = fetch(`${url}/people`).then(res => res.json());

    generateInterface(await companiesPromise, await peoplePromise);
})();

