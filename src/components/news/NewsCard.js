import './news.css'

const NewsCard = ({news}) => {
    return (
        <div className="card-container">
            <img className={'card__image'} src={news.image} alt={news.title}/>
            <h3 className={'card__title'}>{news.title}</h3>
            <p className="description">{news.description}</p>
        </div>
    )
}

export default NewsCard