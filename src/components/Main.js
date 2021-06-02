import React, { useState } from 'react'
import axios from 'axios'
import Context from '../Context'

import Header from './Header'
import Tagline from './Tagline'
import Content from './Content'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import Error from './Error'
import DateTime from './DateTime'
import Footer from './Footer'

require('dotenv').config();

const Main = () => {
    const [weather, setWeather] = useState('');
    const [ city, setCity ] = useState();
    const [error, setError] = useState();

    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.location.value;
        if (!location) {
            setWeather(null);
            return setError('Please enter the name of the city')
        }
       
        // The url by its own, started with api. But axios can't know that it is a secure one.
        // This is why we need to ad https:// in front of the url.
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);
        setError(null)
    }
    console.log(weather)
    return(
        <div className='main'>
            <Header />
            <Content>
                <DateTime />
                <Tagline />
                <Context.Provider value={ {api_call, weather, city, error} }>
                    <WeatherSearch />
                    { weather &&  <WeatherData />}
                    { error && <Error error={error} />}
                </Context.Provider>
                <Footer/>
            </Content>
        </div>
    )
}

export default Main