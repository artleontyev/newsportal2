import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import LogIn from "./components/auth/LogIn";
import NewsDetails from "./components/news/NewsDetails";
import AddNews from "./components/news/AddNews";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar/>
                <Routes>
                    <Route exact path={'/'} element={<Dashboard/>}/>
                    <Route exact path={'/logIn'} element={<LogIn/>}/>
                    <Route exact path={'/addNews'} element={<AddNews/>}/>
                    <Route exact path={'/newsDetails/:id'} element={<NewsDetails/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
