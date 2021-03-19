const resolveRoutes = (route)=>{
  if(route.length <=3){
    return route === '/' ? route : '/:id'; 

  }else{
    return `/${route}` // return /about   ? ?  
  }
}
export default resolveRoutes


