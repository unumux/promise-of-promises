import $ from "jquery";

import {url, generateInterface} from "../shared";

let companies;
let people;

$.get(`${url}/companies`, (newCompanies) => {
    companies = newCompanies;
    if(people) {
        generateInterface(companies, people);        
    }
});

$.get(`${url}/people`, (newPeople) => {
    people = newPeople;
    if(companies) {
        generateInterface(companies, people);
    }
});