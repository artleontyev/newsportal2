import './news.css'
import {connect} from "react-redux";
import {Link, useParams} from 'react-router-dom';
import Error from "../../page/404/Error";
import React from "react";

const NewsDetails = (props) => {
    const {id} = useParams()
    const {news} = props;

    const foundedNews = news.find(news => news.id === id)

    if (!foundedNews) {
        return (<div className={'container'} key={foundedNews.id}>
            <Error/>
            </div>)
    }

    return (<div className={'container'} key={foundedNews.id}>
            <div className='news-detailed-wrapper'>
                <img className={'news-detailed__img'} src={foundedNews.image} alt={foundedNews.title}/>
                <h1>{foundedNews.title}</h1>
                <p>{foundedNews.description}</p>
                <Link to={'/'} className={'button__error button'}>
                    На главную
                </Link>
            </div>

        </div>)
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(NewsDetails);