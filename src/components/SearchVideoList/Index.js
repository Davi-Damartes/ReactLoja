import { useState } from "react";
import VideoList from "../../components/VideoList/Index";
import styles from "./SearchVideoList.module.css"


function FilterVideos(videos, searchText){
    return videos.filter(
        (video) => video.category.includes(searchText)
                                    ||  
         video.title.toLowerCase().includes(searchText)     
    );
}

function SearchVideoList({ videos }){

    const [ searchText, setSearchText ] = useState('');
    const foundVideo = FilterVideos(videos, searchText)

    return(
        <section className={styles.container}>
            <input type="search"
                   placeholder="Pesquisar vídeo..." 
                   value={searchText}
                   onChange={event => setSearchText(event.target.value)}
            /> 
            <VideoList videos={foundVideo} 
             emptyHeading={`Sem vídeos sobre "${searchText}"`}
             /> 
        </section>
    );
}

export default SearchVideoList;