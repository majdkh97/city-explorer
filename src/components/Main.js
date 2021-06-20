import React, { Component } from 'react'
import CityForm from './CityForm';
import Results from './Results';
import ErrorMessage from './ErrorMessage';
import WeatherForecast from './WeatherForecast';
import axios from 'axios';
import Movies from './Movies';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: {},
            showData: false,
            showError: false,
            errorMessage: {},
            weather: [],
            movies: [],
        }
    }

    setCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
        // console.log(this.state.cityName);
    }

    getCityData = async (e) => {
        e.preventDefault();
        await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_api_key}&city=${this.state.cityName}&format=json`)
            .then(response => {
                this.setState({
                    cityData: response.data[0],
                    showData: true,
                    showError: false,
                });
            })
            .catch(error => {
                this.setState({
                    showError: true,
                    errorMessage: error.message
                })
            })
        axios.get(`${process.env.REACT_APP_URL}/weather?lon=${this.state.cityData.lon}&lat=${this.state.cityData.lat}`)
            .then(response => {
                this.setState({
                    weather: response.data
                });
            })
            .catch(error => {
                this.setState({
                    showError: true,
                    errorMessage: error.message
                })
            })
            await axios.get(`${process.env.REACT_APP_URL}/movies?city=${this.state.cityName}`).then(response => {
                this.setState({
                    movies: response.data
                });
            }).catch(error => {
                this.setState({
                    showError: true,
                    errorMessage: error.message,
                })
            }); 
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
                    this.state.weather.map(item => <WeatherForecast date={item.date} description={item.description} />)
                }
                {
                    this.state.movies.map(item =>
                     <Movies 
                        title={item.title}
                         overview={item.overview}
                          image_url={item.image_url}
                           released_on={item.released_on}
                            popularity={item.popularity}
                             average_votes={item.average_votes}
                              total_votes={item.total_votes} />)
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
