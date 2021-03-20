import logo from '../images/2446912.jpg'
const Error404 = ()=>{
  const view = `
    <div class="Error404">
      <h2>HUY!!!! No encontramos tu direccion</h2>
      <figure class="figure-Error404">
        <img src="${logo}" alt="Imagen De ERROR">
      </figure>
    </div>
  `
  return view
}
export default Error404