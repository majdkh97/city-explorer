import React, { Component } from 'react'
import CityForm from './CityForm';
import Results from './Results';
import axios from 'axios';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: {},
            showData: false
        }
    }

    setCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
        console.log(this.state.cityName);
    }

    getCityData = async (e) => {
        e.preventDefault();
        const data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.72adfb8d37124217c7db6a146b11c566&city=${this.state.cityName}&format=json`);
        console.log(data);
        this.setState({
            cityData: data.data[0],
            showData: true
        });
        console.log(this.state.cityData);
    }

    render() {
        return (
            <div>
                <CityForm
                    setCityName={this.setCityName}
                    getCityData={this.getCityData}
                />
                <br/>
                {
                    this.state.showData && 
                    <Results
                        cityData={this.state.cityData}
                    />
                }
            </div>
        )
    }
}

export default Main
