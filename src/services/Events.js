const token = "OPTFMQIITDJ6242LMRJ5"

export const url = `https://www.eventbriteapi.com/v3/categories/?token=${token}&locale=es_ES`;

export const getEvents = (nombre, categoria,orden) =>{
  return  `https://www.eventbriteapi.com/v3/events/search/?token=${token}&locale=es_ES&q=${nombre}
           &categories=${categoria}&sort_by=${orden}`;
}