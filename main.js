'use strict'
let apiDiv = document.querySelector('.apiDiv');
let apiDiv2 = document.querySelector('.apiDiv2');
let apiDiv3 = document.querySelector('.apiDiv3');
let api_keys = 'api_key=661ad9a76a4f96b8c106da64250fee1e';
let base_url = 'https://api.themoviedb.org/3';

let ImgUrl = 'https://image.tmdb.org/t/p/w500'


function movieShow(apiDiv,path){
  function homeImg(){
  let path2 = path;
  getUrl(path2);
  function getUrl(path2){
    let url = base_url + `${path2}`+'&' + api_keys;
    fetch(url).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data.results);
      showData(data.results,apiDiv);
    })
  }
}
  homeImg();
};
movieShow(apiDiv,'/discover/movie?sort_by=popularity.desc');
movieShow(apiDiv2,'/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc');
movieShow(apiDiv3,'/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896');
function showData(data,apiDiv){
  apiDiv.innerHTML = '';
  data.forEach((movie)=>{
    let { title, poster_path, vote_average} = movie;
    let movieL = document.createElement('div');
    if(poster_path!=null){
    movieL.innerHTML = `
    <div class = 'movieColumn'>
      <img class = 'image' src = '${ImgUrl + poster_path}' onclick = "clickImg()"/>
    </div>
    `
    let image = document.querySelector('.image');
    function clickImg(){
      console.log('hello');
    }
    }
    apiDiv.append(movieL);
  })
}
let left = [...document.querySelectorAll('.left')];
let right = [...document.querySelectorAll('.right')];
right[0].addEventListener('click',()=>{
  let bigWidth1 = apiDiv.getBoundingClientRect();
  apiDiv.scrollLeft += bigWidth1.width+ 100;
})
right[1].addEventListener('click',()=>{
  let bigWidth2 = apiDiv2.getBoundingClientRect();
  apiDiv2.scrollLeft += bigWidth2.width+ 100;
})
right[2].addEventListener('click',()=>{
  let bigWidth3 = apiDiv3.getBoundingClientRect();
  apiDiv3.scrollLeft += bigWidth3.width+ 100;
})
left[0].addEventListener('click',()=>{
  let bigWidth4 = apiDiv.getBoundingClientRect();
  apiDiv.scrollLeft -= bigWidth4.width- 100;
})
left[1].addEventListener('click',()=>{
  let bigWidth5 = apiDiv2.getBoundingClientRect();
  apiDiv2.scrollLeft -= bigWidth5.width- 100;
})
left[2].addEventListener('click',()=>{
  let bigWidth6 = apiDiv3.getBoundingClientRect();
  apiDiv3.scrollLeft -= bigWidth6.width- 100;
})
