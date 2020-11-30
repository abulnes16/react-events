import React, { Component } from 'react';
import { getEvents } from '../services/Events';
import axios from 'axios';
//Crear el context
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    state = {
        eventos: []
    }
    getEventos = async (busqueda) =>{
        const url = getEvents(busqueda.nombre, busqueda.categoria, 'date');
        //Consulta de api con url
        const eventos = await axios.get(url);
        this.setState({
            eventos: eventos.data.events
        })
    }
    render() {
        return (
            <EventosContext.Provider
                value = {{
                    eventos: this.state.eventos,
                    getEventos: this.getEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;