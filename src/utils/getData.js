const API = 'https://rickandmortyapi.com/api/character/'


const getData = async (id, page)=>{
  const apiURL = id ? `${API}${id}` : page ? `${API}${page}`: `${API}`;
  try{ //el estandar recomienda usar un estandar try catch cuando esperamos datos de un servidor
    const response = await fetch(apiURL)
    //Ahora el dato de respuesta los transformamos a json para convertirlo en un objeto iterables
    const data = await response.json();
    return data
  }catch(error){
    console.log('Fetch error:' +error)
  }
} 
export default getData