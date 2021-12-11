import './news.css'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'

const NewsDetails = (props) => {
    const {id} = useParams()
    const {news} = props;

    const foundedNews = news.find(news => news.id === id)

    if (!foundedNews) {
        return (<div className={'container'} key={foundedNews.id}>
                <h1>нет такой новости</h1>
            </div>)
    }

    return (<div className={'container'} key={foundedNews.id}>
            <div className='news-detailed-wrapper'>
                <img className={'news-detailed__img'} src={foundedNews.image} alt={foundedNews.title}/>
                <h1>{foundedNews.title}</h1>
                <p>{foundedNews.description}</p>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(NewsDetails);