import styles from "./Favorites.module.css";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Container from "../../components/Container/Index";
import VideoList from "../../components/VideoList/Index";
import { UseFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton/index";


function Favorites () {
    const { favorite } = UseFavoriteContext()

    return(
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.favorites}>
                    { <VideoList videos={favorite} emptyHeading="🤔Sem favoritos🤔" /> }

                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Favorites;