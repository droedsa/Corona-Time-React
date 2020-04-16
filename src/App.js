import React from "react";
import Header from "./Header/header";
import {Route} from "react-router-dom";
import {LastStat} from "./latest_stat_by_country/last-stat";
import CountriesStat from "./countries-stat/countries-stat";
import './App.css'

const App = () => {
    return <div >
        <Header/>
        <Route exact path={`/`} component={CountriesStat}/>
        <Route path='/last-statistic' component={LastStat}/>
    </div>
};

export default App;

