import React from "react";
import './countries-stat.css';
import Loader from "../loader/loader";
import CountryItem from "./countries-stat-item/countries-stat-item";
import WorldInfo from "../world-info/world-info";

export default class CountriesStat extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesStat: [],
            load: false,
            error: false
        };
    }

    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6bd41128b1msh3e2e53bd9ca48bcp17fbe4jsncb302159d5cc"
            }
        })
            .then(response => {
                return response.json()
            })
            .then((res) => {
                this.setState({countriesStat: [...res.countries_stat], load: true});
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let countrieItem = this.state.countriesStat.map(i => i.country_name.length > 1 ?
            <CountryItem key={i.country_name} countryName={i.country_name}
                         cases={i.cases}
                         deaths={i.deaths}
                         totalRecovered={i.total_recovered}
                         newDeath={i.new_deaths}
                         newCases={i.new_cases}
                         seriousCritical={i.serious_critical}/>
            : null);

        const load = this.state.load ? countrieItem : <Loader/>;

        return (
            <>
                <WorldInfo/>
                {load}
            </>
        );
    }
}

