import { useState, useEffect } from "react";
import './exchangeRates.css'

const rateUrl = 'http://api.coinlayer.com/api/live?access_key=57e6e15d8341a61f600c12de0aa21052'
const listUrl = 'http://api.coinlayer.com/api/list?access_key=57e6e15d8341a61f600c12de0aa21052'

const ExchangeRate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()
    const [list, setList] = useState()

    const gettingRate = async () => {
        setIsLoading(true)
        await fetch(rateUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
                setIsLoading(false)
            })
    }

    const gettingIcon = async () => {
        setIsLoading(true)
        await fetch(listUrl)
            .then(res => res.json())
            .then(list => {
                setList(list)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        gettingRate()
        gettingIcon()
    }, [])

    if(isLoading || !data || !list){
        return <div>Loading...</div>
    }

    return (
        <div className={'exchange-wrapper'}>
            {/*<img src={list?.crypto.BTC.icon_url} alt={list?.crypto.BTC.name}/>*/}
            {/*<span>BTC ${data?.rates?.BTC.toFixed(2)}</span>*/}
            {/*<img src={list?.crypto.ETH.icon_url} alt={list?.crypto.ETH.name}/>*/}
            {/*<span>ETH ${data?.rates?.ETH.toFixed(2)}</span>*/}
            {/*<img src={list?.crypto.ADA.icon_url} alt={list?.crypto.ADA.name}/>*/}
            {/*<span>ADA ${data?.rates?.ADA.toFixed(2)}</span>*/}
            {/*<img src={list?.crypto.BNB.icon_url} alt={list?.crypto.BNB.name}/>*/}
            {/*<span>BNB ${data?.rates?.BNB.toFixed(2)}</span>*/}

            <div className={'exchange-element'}>
                <img src={'https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg'} alt={'123'}/>
                <span>BTC $49432.34</span>
            </div>
            <div className={'exchange-element'}>
                <img src={'https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg'} alt={'123'}/>
                <span>ETH $43456.34</span>
            </div>
            <div className={'exchange-element'}>
                <img src={'https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg'} alt={'123'}/>
                <span>ADA $1.32</span>
            </div>
            <div className={'exchange-element'}>
                <img src={'https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg'} alt={'123'}/>
                <span>BNB $580.34</span>
            </div>
            <div className={'exchange-element'}>
                <img src={'https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg'} alt={'123'}/>
                <span>SOL $210.46</span>
            </div>
        </div>
    )
}

export default ExchangeRate;