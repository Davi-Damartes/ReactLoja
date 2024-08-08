import videos from "../../json/videos.json";
import styles from "./Category.module.css"

const categoriesDB = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia",
  ]
export const categories = [...new Set(videos.map(video => video.category))];

  
export function filterCategory(id){
    return videos.filter( video => video.category === categoriesDB[id] )
  }

function Category({ CategoryName, children }){
    return(    
        <section className={styles.category}>
            <h2>{CategoryName}</h2> 
            <div>
                { children }
            </div>
        </section>

    );
}

export default Category;