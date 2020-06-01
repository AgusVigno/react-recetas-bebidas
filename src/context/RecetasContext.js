import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarReceta] = useState({
        nombre: '',
        categoria: ''
    });
    const [consultar, guardarConsulta] = useState(false);
    
    const {categoria, nombre} = busqueda;

    useEffect(() => {
        if(consultar){
            const consultarAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}&i=${nombre}`;
                const recetas = await axios.get(url);
    
                guardarRecetas(recetas.data.drinks);
            }
            consultarAPI();
        }
        // eslint-disable-next-line
    }, [busqueda]);

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                buscarReceta,
                guardarConsulta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;