import router from './routes/index'

//evento nativo
window.addEventListener('load', router) // La ciencia de tras de este evento es ejecutar la funcion del segundo argumento cada que se llama un load event
window.addEventListener('hashchange', router) // "" "" Evento que ejecuta router cada que cambia el hash de url