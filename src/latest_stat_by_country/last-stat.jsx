import React from "react";
import LastStatItem from "./last-stat-item/last-stat-item";
import './last-stat.css'
import Loader from "../loader/loader";

export class LastStat extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            countryErr: false,
            loaded: true,
        };
        this.textRef = React.createRef();
        this.onSearchBtn = this.onSearchBtn.bind(this);
    }

    searchCountry(country) {
        fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6bd41128b1msh3e2e53bd9ca48bcp17fbe4jsncb302159d5cc"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(res => {
                if (res.latest_stat_by_country.length === 0) {
                    this.setState({data: [], loaded: true, countryErr: true});
                } else this.setState({data: res.latest_stat_by_country, loaded: true});
            })
            .catch(err => {
                console.log(err);
            });
    }

    onSearchBtn() {
        const text = this.textRef.current.value;
        if (text.length === 0) {
            this.setState({countryErr:true})
        } else {
            this.setState({loaded: false, countryErr: false});
            this.searchCountry(text);
        }
    }

    render() {
        const {loaded, countryErr} = this.state;
        let lastStatItem = this.state.data.map(i => <LastStatItem key={i.id} countryName={i.country_name}
                                                                  cases={i.total_cases}
                                                                  newCases={i.new_cases}
                                                                  activeCases={i.active_cases}
                                                                  deaths={i.total_deaths}
                                                                  newDeaths={i.new_deaths}
                                                                  seriousCritical={i.serious_critical}
                                                                  totalRecovered={i.total_recovered}
                                                                  recordDate={i.record_date}
        />);

        const loader = loaded ? lastStatItem : <Loader/>;
        const countryError = countryErr ?
            <div className='countryError d-flex justify-content-center'>
                <h2 className='text-warning'>You left the field blank or entered the wrong country</h2>
            </div> : null;

        return (
            <div className='container'>
                <div className="d-flex input">
                    <input className={`form-control mr-sm-2 ${this.state.countryErr ? 'errorInput' : null}`}
                           type="text" placeholder="Enter country name"
                           ref={this.textRef}/>
                    <button className="btn btn-primary my-2 my-sm-0" onClick={this.onSearchBtn} type="submit">Search
                    </button>
                </div>
                {loader}
                {countryError}
            </div>
        )
    }
}

