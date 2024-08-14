import styles from "./Form.module.css"
import { categories } from "../Category/Index";
import { useState } from "react";

function Form(){
    
    const [ url, setUrl ] = useState('');
    const [ category, setCategory ] = useState('');

    const [ videos, setVideos] = useState([])
    const [ erros, setErros] = useState('')


    function validarUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
    
        if(!regex.test(url) || url.length < 43) {
            setErros('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43) // Id do video
        }
    }


    function OnSave(e){
        e.preventDefault() 
        console.log(url, category)

        
        // Validar category
        if(!category || category === '-'){
            setErros("ERRO: Escolha uma categoria!")
            return
        }
        else{
            setErros('')
        }


        // Validar URL 
        const urlVideo = validarUrl(url)

        if(urlVideo && category){
            // salvar dados           
            const newVideo= {url, category}
            setVideos([...videos, newVideo])

            localStorage.setItem("videos", JSON.stringify([...videos, newVideo] ))

            setUrl('')
            setCategory('')
        } else{
            setErros('ERRO: Url Inválida')
        }

    }


    return(
        <section className={styles.container}>
            <h2>Cadastro de Vídeos</h2>
            <form onSubmit={OnSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input type="text" 
                           placeholder="Digite a Url do vídeo"
                           required="required" 
                           value={url}
                           maxLength="43"
                           minLength="43"
                           onChange={event => setUrl(event.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select value={category}
                            onChange={event => setCategory(event.target.value) }>
                        <option value="-">Selecione uma Categoria</option>
                           { categories.map(item => {
                                return <option value={item}>{item}</option>
                           }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div className={styles.erros}
                    style={{ backgroundColor: erros ? '#f44336' : 'transparent' }}>
                    { erros }
                </div>
            </form>
        </section>

    )
}

export default Form;