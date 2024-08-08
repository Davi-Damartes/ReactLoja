import Header from "../../components/Header/Index";
import Container from "../../components/Container/Index";
import Footer from "../../components/Footer/Index";
import styles from "./Tenis.module.css"
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound/Index"

function Tenis (){

    const parms = useParams();
    const video = videos.find((video) => {return video.id === parms.id})


    if(!video) {
      return <PageNotFound></PageNotFound>
    }
    return (
        <>
            <Header />
            <Container>
              <section className={styles.tenis}>
              <h2 className={styles.h2}>{video.title}</h2>
                <iframe 
                        width="854" 
                        height="480" 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={`${video.title}`} 
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
              </section>
            </Container>
            <Footer />
        </>
    )
}

export default Tenis;