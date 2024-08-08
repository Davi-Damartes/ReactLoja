import Container from "../../components/Container/Index";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import styles from "./Search.module.css"
import SearchVideoList from "../../components/SearchVideoList/Index";
import videos from "../../json/videos.json"

function Search(){
    return(
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Pesquisar</h2>
                    <SearchVideoList videos={videos}  /> 
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Search;