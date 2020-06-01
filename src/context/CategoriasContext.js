import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//crear el context
export const CategoriasContext = createContext();

//provider es donde se encuentran las funciones y el state
const CategoriaProvider = (props) => {

    //crear el state Context
    const [categorias, guardarCategorias] = useState([]);


    //ralizar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const resultado = await axios.get(url);

            guardarCategorias(resultado.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriaProvider;