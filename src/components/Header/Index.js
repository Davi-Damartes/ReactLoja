import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { UseFavoriteContext } from "../../contexts/Favorites"

function Header(){
    const { favorite } = UseFavoriteContext()

    let contador = favorite.length > 0 ? favorite.length : 0;

    return(
        <>
            <header className={styles.header}>
                <Link to="/">
                    <span>MaxSneakersDrop</span>
                </Link>
                <nav>  
                    <Link to="/">Home</Link>       
                    <Link to="/search">Search</Link>
                    <Link to="/favorites">
                            Favoritos <span className={styles.contador}>{contador}</span>
                    </Link> 
                </nav>
            </header>
        </>
    )
}

export default Header;