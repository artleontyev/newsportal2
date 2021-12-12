import NewsCard from "./NewsCard";
import './news.css'
import {Link} from "react-router-dom";

const NewsList = ({news}) => {
    return (
        <div className="catalog">
            <div className="catalog-container-title">
                <h2 className="catalog-title">Новости IT, технологий и бизнеса</h2>
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