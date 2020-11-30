import React from 'react';
import { transformText } from '../services/TransformText';

const Evento = ({ evento }) => {

    let text = transformText(evento.description);
   
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo ?
                        <img src={evento.logo.url} alt={evento.name.text}></img>
                        : null
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                   {text}
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" target="blank" rel="noopener noreferrer" href={evento.url}>
                        Mas informacion
                </a>
                </div>
            </div>
        </div>
    );
};

export default Evento;