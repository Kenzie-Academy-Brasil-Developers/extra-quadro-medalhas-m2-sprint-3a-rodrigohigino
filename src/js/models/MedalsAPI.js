class MedalsAPI {
    static countries;

    static async getCountries() {
        MedalsAPI.countries = await fetch("https://kenzie-olympics.herokuapp.com/paises")
            .then((response) => response.json())
        MedalsAPI.addTotal()
    }

    static addTotal() {
        MedalsAPI.countries.forEach((country) => {
            country.total = (
                country.medal_bronze +
                country.medal_silver +
                country.medal_gold
            );
        });

        MedalsAPI.countries.sort((current, next) => {
            return (next.total !== current.total) ? next.total - current.total : next.medal_gold - current.medal_gold;
        });

        let position = 1;
        MedalsAPI.countries.forEach((country) => {
            country.position = position;
            position++;
        })
    }
}

export {
    MedalsAPI
}