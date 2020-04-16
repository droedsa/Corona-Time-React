import React from "react";
import './countries-stat-item.css'

class CountryItem extends React.Component {
    state = {
        show: false,
        openMore:false,
        btnText:'More ...'
    };

    constructor(props) {
        super();
        this.onShow = this.onShow.bind(this);
    }

    onShow = () => {
        this.setState((state) => {
            return {
                openMore: !state.openMore,
                show: !state.show
            }});
        this.state.openMore? this.setState({btnText:'More ...'}):this.setState({btnText:'Close'});
    };

    render() {
        const {
            countryName, cases, deaths, totalRecovered, newDeath, newCases, seriousCritical
        } = this.props;

        const tRecovered = this.state.show ?
            <li className='list-group-item list-group-item-success'>
                <span className='stat-item '>
                    {`Total Recovered : ${totalRecovered}`}
                </span>
            </li> : null;

        const nDeath = this.state.show ?
            <li className='list-group-item list-group-item-danger'>
                <span className='stat-item '>
                    {`New Death : ${newDeath}`}
                </span>
            </li> : null;

        const nCases = this.state.show ?
            <li className='list-group-item list-group-item-warning'>
                <span className='stat-item '>
                    {`New Cases : ${newCases}`}
                </span>
            </li> : null;

        const sCritical = this.state.show ?
            <li className='list-group-item list-group-item-primary'>
                <span className='stat-item '>
                    {`Serious Critical : ${seriousCritical}`}
                </span>
            </li> : null;

        return (
            <div className="container">
                <div className="card border-dark mb-3">
                    <div className="card-header"><h3>{countryName}</h3></div>
                    <div className="card-body">
                        <div className="element d-flex justify-content-around align-items-center">

                            <ul className='list-group container'>
                                <li className='list-group-item list-group-item-warning'>
                                    <span className='stat-item'>
                                        {`Cases : ${cases}`}
                                    </span>
                                </li>
                                {nCases}
                                {tRecovered}
                            </ul>

                            <ul className='list-group container'>
                                <li className='list-group-item list-group-item-dark'>
                                    <span className='stat-item'>
                                        {`Death : ${deaths}`}
                                    </span>
                                </li>
                                {nDeath}
                                {sCritical}
                            </ul>
                        </div>
                        <div className='butt'>
                            <button onClick={this.onShow} type="button" className="btn btn-secondary">
                                {this.state.btnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}


export default CountryItem;