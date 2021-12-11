import './news.css'

const NewsCard = ({ news }) => {
  return (
    <div className="card-container">
      <img className={'card__image'} src={news.image} alt={news.title} />
      <div className="card__info">

      <h3 className={'card__title'}>{news.title}</h3>
      <p className="description">{news.description}</p>
      
      <div className="post__icons-top post__icons">
        <p className="autor">autor</p>
        <p className="date">дата</p>
        </div>
        <div className="post__icons-bottom post__icons">
        <p className="view">кол-во просмотров</p>
        <p className="raiting">рейтинг</p>
        <p className="bookmaps">добавить в закладки</p>
        <p className="share">поделиться -</p>
        <p className="comment">кол-во комментариев</p>
        <button className="post__button button">Подробнее...</button>
        </div>
        </div>
      
    </div>
  )
}

export default NewsCard