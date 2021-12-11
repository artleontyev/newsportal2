import { nanoid } from 'nanoid'

const initState = {
    news: [
        {
            id: nanoid(),
            image: 'https://image.cnbcfm.com/api/v1/image/106963872-1634825109007-gettyimages-1347891665-_e6w4500_2021102133201285.jpeg?v=1634825152&w=740&h=416',
            title: 'Crypto Market Crush',
            description: 'Bitcoin went through one of its worst crashes as it dumped by $16,000 in a matter of hours to a two-month low of $42,000'
        },
        {
            id: nanoid(),
            image: 'https://academy-public.coinmarketcap.com/optimized-uploads/595c5bf5e195465a959463a58705465d.jpg',
            title: 'What Is Pera Finance?',
            description: 'Pera Finance, an innovative yield farming protocol built on Binance Smart Chain (BSC), is looking to revitalize the token economy of projects that are struggling with this problem through an innovative new yield farming protocol.'
        },
        {
            id: nanoid(),
            image: 'https://academy-public.coinmarketcap.com/optimized-uploads/7cba1d3d28e94d3f90d6317d66930cef.jpg',
            title: 'What Is Livepeer?',
            description: 'Livepeer is an Ethereum-based decentralized video streaming infrastructure that enables developers to bring their ideas to life affordably. It has been designed to provide an open-source video streaming infrastructure that anybody can use to deliver video media to their audience without paying heavy platform fees or being restricted to the features offered by centralized broadcasting solutions. '
        },
        {
            id: nanoid(),
            image: 'https://academy-public.coinmarketcap.com/optimized-uploads/37846ea331724dda9603dd6875397e8d.png',
            title: 'Good Security Habits',
            description: 'We can state with confidence that the leaks did not come from CoinMarketCap servers. We ran a comprehensive security check and there is no trace of any security breach of our servers.'
        },
        {
            id: nanoid(),
            image: 'https://academy-public.coinmarketcap.com/optimized-uploads/659ddd4ae7ce4b1e8bbe30e0c064a71f.png',
            title: 'Does BTC have \'upper hand\'?',
            description: 'In recent years, a correlation has formed between cryptocurrencies and stocks. If Wall Street crashes, BTC and ETH tend to suffer a similar fate. But Bloomberg\'s Mike McGlone believes the mood music is starting to change. He points to how Bitcoin suffered a 50% pullback earlier this year, before dusting itself off and surging to new all-time highs.'
        },
        {
            id: nanoid(),
            image: 'https://academy-public.coinmarketcap.com/optimized-uploads/f1a8f74106a34f84bb14c14d2da946c9.jpg',
            title: 'Ripple encourages finance firms',
            description: 'The University of Cambridge is building a decentralized carbon credit marketplace on the Tezos blockchain. It\'s hoped this will help finance "independently verifiable and accountable nature-based solutions" — supporting projects like rainforest conservation and reforestation. Tezos was chosen because it doesn\'t use an energy-hungry Proof-of-Work consensus mechanism like Bitcoin. '
        }
    ]
};

const newsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NEWS':
            console.log('news created', action.news)
    }
    return state
}

export default newsReducer;

