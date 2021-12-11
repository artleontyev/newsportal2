import React, {useState, useEffect} from "react";
import axios from "axios";

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Kazan,ru&appid=32691ad2398c77efeede66453f9e1b8f&units=metric';

function Weather() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const gettingCoin = async () => {
        setIsLoading(true)
        await axios.get(apiUrl)
            .then(res => console.log("res", res.data))
        setData(data)
        setIsLoading(false)
    }

useEffect(() => {
    gettingCoin()
}, [])

if (isLoading || !data) {
    return <div>загрузка...</div>
}

return <div> В Казани {data?.main?.temp} ° </div>
}


export default Weather;