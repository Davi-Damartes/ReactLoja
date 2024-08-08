import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children } ) {
    const [ favorite, setFavorite ] = useState([])
    return (
            <FavoritesContext.Provider value={{favorite,  setFavorite}} >
                { children }
            </FavoritesContext.Provider>
    );
}

// Hook personalizado que será usado em Card
export function UseFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext)

    function addFavorite(newFavorite){

        // Verificar duplicidade
        const repeatedFavorite = favorite.some((item) => item.id == newFavorite.id)
        
        // Nova lista recebe valores lista anterior
        let newList = [...favorite]

        // Verifica se tem alguma repetido add na lista
        if(!repeatedFavorite){
            newList.push(newFavorite)

            return setFavorite(newList)
        }

        // Filtro não exibir itens repetidos ou tirar item da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )
        
        return setFavorite(newList)
    };

    return {
        favorite, 
        addFavorite
    }

}