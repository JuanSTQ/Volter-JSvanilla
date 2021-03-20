import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Character = async ()=>{
  let id2 = getHash();
  let id =location.hash.match(/[\d]+/).join("")
  const character = await getData(id2)
  
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}"/>
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodios: ${character.episode.length}</h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: ${character.species}</h3>
        <h3>Gender:  ${character.gender}</h3>
        <h3>Origin: ${character.origin.name}</h3>
        <h3>last location: ${character.location.name}</h3>
      </article>
    </div>
  
  `;
  return view
}

export default Character