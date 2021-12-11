import NewsList from "../news/NewsList";
import ExchangeRate from "../exchangeRates/ExchangeRate";
import Weather from "../weather/Weather";
import {connect} from "react-redux";
import './Dashboard.css'

const Dashboard = (props) =>  {
    const dashImage = 'https://internationaljournalofresearch.files.wordpress.com/2020/07/5d07c76a696bfc4b3cb88294_cryptocurrency.jpg'
    const { news } = props;
        return (
            <div className='container'>
                <ExchangeRate />
                <img className={'dashboard-image'} src={dashImage} alt="bitcoin"/>
                    <NewsList news={news}/>
                    <Weather />
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(Dashboard)