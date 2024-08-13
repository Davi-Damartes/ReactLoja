import styles from "./Form.module.css"
import { categories } from "../Category/Index";
import { useState } from "react";

function Form(){
    
    const [ url, setUrl ] = useState('');
    const [ category, setCategory ] = useState('');

    const [ videos, setVideos] = useState([])
    const [ erros, setErros] = useState('')

    function OnSave(e){
        e.preventDefault() 
        console.log(url, category)

        // Validar url e category
        if(!category || category === '-'){
            setErros("ERRO: Escolha uma categoria!")
            return
        }
        else{
            setErros('')
        }


        // Adicionar a Url e categoria
        const newVideo= {url, category}
        setVideos([...videos, newVideo])

        localStorage.setItem("videos", JSON.stringify([...videos, newVideo] ))

        // Limpar o Form
        setUrl('')
        setCategory('')
        // https://www.youtube.com/watch?v=
    }


    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={OnSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input type="text" 
                           placeholder="Digite a Url do vídeo"
                           required="required" 
                           value={url}
                           maxLength="43"
                           minLength="43"
                           onChange={event => setUrl(event.target.value )}
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
                <div className={styles.erros}>
                    { erros }
                </div>
            </form>
        </section>

    )
}

export default Form;