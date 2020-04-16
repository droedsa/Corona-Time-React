import React from "react";
import './last-stat-item.css';

const LastStatItem = ({countryName, cases, newCases, activeCases, deaths, newDeaths, seriousCritical, totalRecovered,recordDate}) => {
    return (
        <div className="country-stat">
            <div className="card border-dark mb-3">
                <div className="card-header"><h3>{countryName}</h3></div>
                <div className="card-body">
                    <div className="element d-flex justify-content-around ">

                        <ul className='list-group container'>
                            <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`Cases : ${cases}`}
                                    </span>
                            </li>

                            <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`New Cases : ${newCases}`}
                                    </span>
                            </li>

                            <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`Active Cases : ${activeCases}`}
                                    </span>
                            </li>
                            <li className='list-group-item list-group-item-success'>
                                    <span className='stat-item'>
                                        {`Total Recovered : ${totalRecovered}`}
                                    </span>
                            </li>

                        </ul>

                        <ul className='list-group container'>
                            <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`Death : ${deaths}`}
                                    </span>
                            </li>

                            <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`New Deaths : ${newDeaths}`}
                                    </span>
                            </li>

                            <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`Serious Critical : ${seriousCritical}`}
                                    </span>
                            </li>

                            <li className='list-group-item list-group-item-info'>
                                    <span className='stat-item'>
                                        {`Record Date : ${recordDate}`}
                                    </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LastStatItem;