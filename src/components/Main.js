import React, { Component } from 'react'
import CityForm from './CityForm';
import Results from './Results';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: {},
            showData: false,
            showError: false,
            errorMessage: {}
        }
    }

    setCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
        console.log(this.state.cityName);
    }

    getCityData = async (e) => {
        try {
            e.preventDefault();
            const data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.72adfb8d37124217c7db6a146b11c566&city=${this.state.cityName}&format=json`);
            console.log(data);
            this.setState({
                cityData: data.data[0],
                showData: true,
                showError:false
            });
            console.log(this.state.cityData);

        } catch (error) {
            this.setState({
                showError: true,
                errorMessage: error.message
            })
        }

    }

    setShowError = () => {
        this.setState({
            showError: false
        })
    }

    render() {
        return (
            <div>
                <CityForm
                    setCityName={this.setCityName}
                    getCityData={this.getCityData}
                />
                <br />
                {
                    this.state.showData &&
                    <Results
                        cityData={this.state.cityData}
                    />
                }
                {
                    this.state.showError &&
                    <ErrorMessage
                        showError={this.state.showError}
                        errorMessage={this.state.errorMessage}
                    />
                }
            </div>
        )
    }
}

export default Main
