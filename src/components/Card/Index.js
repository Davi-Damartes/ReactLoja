import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import iconBrancoFavorite from "./IconesImg/favorite.png"; // branco
import iconVermelhoFavorite from "./IconesImg/unfavorite.png" 
import { UseFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

    // Contexto global variável global
    const { favorite, addFavorite } = UseFavoriteContext();

    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconVermelhoFavorite : iconBrancoFavorite;

    return (
        <section className={styles.card}>
            <Link to={`/Tenis/${id}`} >
                <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt="Capa"
                    className={styles.capa}
                />
            </Link>
            <figure className={styles.icon} >
                <img
                    onClick={() => addFavorite({id})}
                    src={icone} 
                    alt="Ícone">
                </img>
            </figure>
        </section>
    );
}

export default Card;