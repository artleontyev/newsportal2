import {useState} from "react";
import {createNews} from "../../store/actions/newsActions";
import {connect} from "react-redux";

const AddNews = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    const handleTitleChange = (e) => {
        setTitle([e.target.value])
    }

    const handleContentChange = (e) => {
        setContent([e.target.value])
    }

    const handleImageChange = (e) => {
      setImage([e.target.value])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createNews({title, content, image})
    }
    return (
        <div className="form__container">
            <div className="form__header">
                <p>Add a news</p>
            </div>
            <form onSubmit={handleSubmit} id="form" noValidate>
                <div className="input_container">
                    <label className="form__label" htmlFor="title">Title</label>
                    <div className="input_wrapper">
                        <input className="form__input" type="text" name="title" id="title"
                               placeholder="Enter title" onChange={handleTitleChange}/>
                    </div>
                </div>

                <div className="input_container">
                    <label id="text_label" className="form__label" htmlFor="textarea">News Content</label>
                    <div className="input_wrapper">
                        <textarea className="form__textarea form__input" name="textarea"
                               placeholder="Enter content" onChange={handleContentChange}/>
                    </div>
                </div>

                <div className="input_container">
                    <label className="form__label" htmlFor="image">Add image</label>
                    <div className="input_wrapper">
                        <input className="form__input" type="text" name="image" id="image"
                               placeholder="Enter link to the image" onChange={handleImageChange}/>
                    </div>
                </div>

                <div className="form__button-wrapper">
                    <button id="btn" className="form__button" type="submit">Publish</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
      createNews: (news) => dispatch(createNews(news))
  }
}

export default connect(null, mapDispatchToProps)(AddNews)