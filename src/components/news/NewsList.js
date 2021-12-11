import NewsCard from "./NewsCard";
import './news.css'
import {Link} from "react-router-dom";

const NewsList = ({news}) => {
    return (
        <div className="catalog">
            <div className="catalog-container-title">
                <h1 className="catalog-title">Latest Crypto News</h1>
            </div>
            <div className="catalog-container">
                {
                    news && news.map(item => {
                        return (
                            <Link to={'newsDetails/' + item.id} key={item.id} className={'news-links'}>
                                <NewsCard news={item} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsList;