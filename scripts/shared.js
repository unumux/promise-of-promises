import $ from "jquery";
import _ from "lodash";
const timer = require("./timer");

export const appContainer = $("#app");
export const url = `https://mysterious-shore-84236.herokuapp.com`;
// export const url = `http://localhost:4000`;

export function generateInterface(companies, people) {
    const companyDivs = companies.map((company) => {
        const compiled = $(companyTemplate({ company }));
        compiled.find(".company__people").html(company.people.map((personId) => {
            return personTemplate({person: _.find(people, {id: personId})});
        }));
        return compiled;
    });

    appContainer.html(companyDivs);
    timer.stop();
}

export const companyTemplate = _.template(`
    <div class="company">
        <div class="company__info">
            <h1 class="company__name"><%= company.name %></h1>
            <p class="company__description"><%= company.description %></p>
        </div>
        <ul class="company__people">
        </ul>
    </div>
`);

export const personTemplate = _.template(`
    <li class="person">
        <h2 class="person__name"><%= person.name %></h2>
        <p class="person__title"><%= person.title %></p>
        <p class="person__phone"><%= person.phone %></p>
        <a class="person__email" href="mailto:<%= person.email %>"><%= person.email %></a>
    </li>
`);