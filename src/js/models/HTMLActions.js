class HTMLActions {
    static countriesData = document.getElementById("countries-data");

    static sortSwitcher = {
        "position": true,
        "medal_gold": true,
        "medal_silver": true,
        "medal_bronze": true
    };

    static showingCountries = [];

    static createTableRow(object) {
        const tableRow   = document.createElement("tr"),
            position     = document.createElement("td"),
            country      = document.createElement("td"),
            countryName  = document.createElement("p"),
            countryGroup = document.createElement("div"),
            flag         = document.createElement("img"),
            goldMedal    = document.createElement("td"),
            silverMedal  = document.createElement("td"),
            bronzeMedal  = document.createElement("td"),
            total        = document.createElement("td");
        position.innerText    = `${object.position}º`;
        position.classList.add("position");

        countryName.innerText = object.country;
        flag.src              = object.flag_url;
        flag.classList.add("flag-img")
        flag.alt              = `${object.country} flag`;
        countryGroup.append(flag, countryName);
        countryGroup.classList.add("countryFlagName");
        country.appendChild(countryGroup);
        country.classList.add("country");

        goldMedal.innerText   = object.medal_gold;
        goldMedal.classList.add("medal_gold");

        silverMedal.innerText = object.medal_silver;
        silverMedal.classList.add("medal_silver");

        bronzeMedal.innerText = object.medal_bronze;
        bronzeMedal.classList.add("medal_bronze");

        total.innerText       = object.total;
        total.classList.add("total");

        tableRow.append(position,
            country,
            goldMedal,
            silverMedal,
            bronzeMedal,
            total)

        HTMLActions.countriesData.appendChild(tableRow);
    }

    static SortBy(category, eventTargetId) {
        const oldSort = document.querySelectorAll("table>tr");
        oldSort.forEach((tr) => {
            tr.remove();
        });

        HTMLActions.showingCountries.sort((current, next) => {
            return (HTMLActions.sortSwitcher[category]) ? next[category] - current[category] : current[category] - next[category];
        });

        HTMLActions.sortSwitcher[category] = !HTMLActions.sortSwitcher[category];

        const arrowSwitcher = document.querySelector(`#${eventTargetId}>i`);
        
        if (HTMLActions.sortSwitcher[category]) {
            arrowSwitcher.className = "fas fa-chevron-up";
        } else {
            arrowSwitcher.className = "fas fa-chevron-down";
        }

        HTMLActions.showingCountries.forEach(country => {
            HTMLActions.createTableRow(country);
        });
    }

    static search(search, countriesList) {
        const oldSort = document.querySelectorAll("table>tr");
        oldSort.forEach((tr) => {
            tr.remove();
        });

        search = search.trim().toLowerCase();

        HTMLActions.showingCountries = [];
        countriesList.forEach((country) => {
            if (country.country.toLowerCase().startsWith(search)) {
                HTMLActions.createTableRow(country);
                HTMLActions.showingCountries.push(country);
            }
        });
    }
}

export {
    HTMLActions
}