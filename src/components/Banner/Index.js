import styles from "./Banner.module.css"

function Banner( { imagem }){
    return(
        <div 
            className={styles.banner}
            style={ { backgroundImage: `url('/imagens/${imagem}.jpg')` }}>
        </div>
    );
}

export default Banner;