import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import erro404 from "./ImagensNotFound/ImagemNotFound.png"
import styles from "./PageNotFound.module.css"

function PageNotFound(){
    return(
        <>
            <Header />
            <section className={styles.container}>
                <h2>Pagina não Encontrada!</h2>        
                <img className={styles.img} src={erro404} alt="Imagem página não encontrada!">
                </img>
            </section>
            <Footer />
        </>
    )
}

export default PageNotFound;