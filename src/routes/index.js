import Header from '../templates/header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


const routes = {
  '/': Home, 
  '/:id': Character,
  '/contact': 'Error404'
}

const router = async ()=>{

  const content = null || document.getElementById("loading");
  const header = null || document.getElementById('header')

  header.innerHTML = await Header()

  let hash = getHash();
  let route = await resolveRoutes(hash) //Esperamos porque el result puede tardar en responder
  let render = routes[route] ? routes[route] : Error404


  content.innerHTML = await render();  // Suceda lo que deba tardarse
}

export default router

