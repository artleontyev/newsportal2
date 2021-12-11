import { useState, useEffect } from 'react';
import './weather.css'

const API_KEY = '10bddaa697444e217f0c7f6b862097bd';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${API_KEY}&units=metric`

const ExchangeRate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const gettingWeather = async () => {
        setIsLoading(true)
        await fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        gettingWeather()
    }, [])

    if(isLoading || !data){
        return <div>Loading...</div>
    }

    return (
        <div className={'weather-wrapper'}>
            <p>Temperature in Moscow: {Math.round(data.main.temp)} degrees</p>
        </div>
    )
}

export default ExchangeRate;