import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Content from "./components/dashboard/Content";
import LogIn from "./components/auth/LogIn";
import NewsDetails from "./components/news/NewsDetails";
import AddNews from "./components/news/AddNews";
import Header from "./components/Header/Header";
import Error from "./page/404/Error";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route exact path={'/'} element={<Content/>}/>
                    <Route exact path={'/logIn'} element={<LogIn/>}/>
                    <Route exact path={'/addNews'} element={<AddNews/>}/>
                    <Route exact path={'/newsDetails/:id'} element={<NewsDetails/>}/>
                    <Route path={'*'} element={<Error/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
