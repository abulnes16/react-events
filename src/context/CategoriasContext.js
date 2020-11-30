import React, { Component } from 'react';
import { url } from "../services/Events";
import axios from "axios";
//Creacion del context 
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    
    state = {
        categorias: []
    }

    componentDidMount(){
        this.getCategorias();
    }

    getCategorias = async () =>{
        let categorias = await axios.get(url);
        this.setState({categorias: categorias.data.categories})
    }
    render() {
        return (
            <CategoriasContext.Provider
                value = {{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;