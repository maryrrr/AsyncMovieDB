const API_URL='https://api.themoviedb.org/3/search/movie?api_key=c16cd8f19072ba0fc400bc06bc6a69dc&language=en-US&query=movie&page=1&include_adult=false'

const buscar=document.getElementById('buscar')
const peliculasDiv=document.querySelector('#pelis')
const formBuscar=document.getElementById('form')

const  mostrar_pelis= (pelis) => {
    peliculasDiv.innerHTML=""
    pelis.forEach(movie =>{
        peliculasDiv.innerHTML +=`
        <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
        <div class="pelis"></div>
        <div class="card-body">
        <img style="height:200px; width:100% ; display:block" src=https://image.tmdb.org/t/p/w500/${movie.poster_path} alt="Card image cap">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.overview}</p>
    </div>
  </div>
        `
    })
}




const buscar_pelis= async (e) =>{
    e.preventDefault()
    try{
        const busqueda=buscar.value
        const res= await axios.get(`${API_URL}?name=${busqueda}`)
        const pelis=res.data.results
        mostrar_pelis(pelis)
        
    }catch(error){
        console.error(error);
    }
    }
    formBuscar.addEventListener('submit',buscar_pelis)