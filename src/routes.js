import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import Tenis from "./pages/Tenis/Index";
import PageNotFound from "./pages/PageNotFound/Index";
import Search from "./pages/Search/Index";
import Favorites from "./pages/Favorites/Index";
import FavoritesProvider from "./contexts/Favorites";


function AppRoutes() {

    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/tenis/:id" element={<Tenis></Tenis>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                    <Route path="/favorites" element={<Favorites></Favorites>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>

    )
}

export default AppRoutes;