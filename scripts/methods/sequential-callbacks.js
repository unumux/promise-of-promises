import $ from "jquery";

import {url, generateInterface} from "../shared";

$.get(`${url}/companies`, (companies) => {
    $.get(`${url}/people`, (people) => {
        generateInterface(companies, people);
    });
});