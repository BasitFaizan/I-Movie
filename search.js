let search = document.querySelector('input');
let searchMovie = document.querySelector('.searchMovie');
let btn = document.querySelector('.btn')
let api_keys = 'api_key=661ad9a76a4f96b8c106da64250fee1e';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url+'/search/movie?'+api_keys;
let ImgUrl = 'https://image.tmdb.org/t/p/w500'

btn.addEventListener('click',function(){
  let newurl = url + `&query=${search.value}`;
  fetch(newurl).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data.results);
    showData(data.results);
  }).catch((error)=>{
    console.log(error);
  })
})
function showData(data){
  searchMovie.innerHTML = '';
  data.forEach((movie)=>{
  let {title,poster_path,vote_average} = movie;
  let movieL = document.createElement('div');
  if(poster_path!=null){
  movieL.innerHTML = `
    <div class = 'searchedMovie'>
      <img class = 'searchedMovieImg' src = '${ImgUrl + poster_path}'/ >
    </div>
  `
  }
  searchMovie.append(movieL);
  });
}
