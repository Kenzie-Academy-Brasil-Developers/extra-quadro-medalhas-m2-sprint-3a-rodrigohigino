import {
    MedalsAPI
} from "./models/MedalsAPI.js";

import {
    HTMLActions
} from "./models/HTMLActions.js";

await MedalsAPI.getCountries()

MedalsAPI.countries.forEach((country) => {
    HTMLActions.createTableRow(country);
    HTMLActions.showingCountries.push(country);
});

const tableHeader = document.getElementById("table-header");
tableHeader.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "sort-by-position":
            HTMLActions.SortBy("position", event.target.id);
            break;
        case "sort-by-gold":
            HTMLActions.SortBy("medal_gold", event.target.id);
            break;
        case "sort-by-silver":
            HTMLActions.SortBy("medal_silver", event.target.id);
            break;
        case "sort-by-bronze":
            HTMLActions.SortBy("medal_bronze", event.target.id);
            break;
    }
})

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    HTMLActions.search(document.getElementById("search-box").value, MedalsAPI.countries)
})