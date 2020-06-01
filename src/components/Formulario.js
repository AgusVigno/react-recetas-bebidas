import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {buscarReceta, guardarConsulta} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const obtenerReceta = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const buscarBebida = (e) => {
        e.preventDefault();

        buscarReceta(busqueda);
        guardarConsulta(true);
    }

    return ( 
        <form 
            className="col-12"
            onSubmit={buscarBebida}
        >
            <fieldset className="text-center">
                <legend>
                    Busca Bebidas por Categoría o Ingrediente
                </legend>

                <div className="row">
                    <div className="col-md-4">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Ingrediente"
                            onChange={obtenerReceta}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="categoria"
                            onChange={obtenerReceta}
                        >
                            <option value="">--Seleccione Categoría--</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                         <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Buscar Bebidas"
                         />
                    </div>
                </div>
            </fieldset>
        </form>
    );
}
 
export default Formulario;