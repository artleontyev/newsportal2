import NewsList from "../news/NewsList";

import {connect} from "react-redux";
import './Dashboard.css'

const Content = (props) =>  {
    
    const { news } = props;
        return (
            <div className='container'>
                
                
                    <NewsList news={news}/>
                    
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(Content)