import React from "react";
import Loader from "../loader/loader";


export default class WorldInfo extends React.Component {

    state = {
        load:false
    };


    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6bd41128b1msh3e2e53bd9ca48bcp17fbe4jsncb302159d5cc"
            }
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState(() => {
                    return {
                        ...res,
                        load:true
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        const {total_cases, new_cases, total_deaths, new_deaths, total_recovered,
            active_cases, statistic_taken_at, serious_critical} = this.state;

        const wordInfo = (
            <div className="country-stat container">
                <div className="card border-dark mb-3">
                    <div className="card-header"><h3>World Info</h3></div>
                    <div className="card-body">
                        <div className="element d-flex justify-content-around ">

                            <ul className='list-group container'>
                                <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`Cases : ${total_cases}`}
                                    </span>
                                </li>

                                <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`New Cases : ${new_cases}`}
                                    </span>
                                </li>

                                <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`Active Cases : ${active_cases}`}
                                    </span>
                                </li>
                                <li className='list-group-item list-group-item-success'>
                                    <span className='stat-item'>
                                        {`Total Recovered : ${total_recovered}`}
                                    </span>
                                </li>

                            </ul>

                            <ul className='list-group container'>
                                <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`Death : ${total_deaths}`}
                                    </span>
                                </li>

                                <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`New Deaths : ${new_deaths}`}
                                    </span>
                                </li>

                                <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`Serious Critical : ${serious_critical}`}
                                    </span>
                                </li>

                                <li className='list-group-item list-group-item-info'>
                                    <span className='stat-item'>
                                        {`Record Date : ${statistic_taken_at}`}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

        return this.state.load ? wordInfo : <Loader/>
    }
}