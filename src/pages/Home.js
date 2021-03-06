import getData from '../utils/getData'

const Home = async ()=>{
  const page = Math.floor(Math.random()*34+1)
  const characters = await getData(false,page)
    //characters.results es un array de todos los characters de la api
  const view = `
    <div class="Characters">
      ${characters.results.map(character=>{
        return `
          <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}"/>
            <h2>${character.name}</h2>
          </a>
        </article>
        `
      }).join("")}

    </div>
  `
  return view
}

export default Home

