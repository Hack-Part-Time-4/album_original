let input_name = document.querySelector('#input_name');
let input_age = document.querySelector('#input_age');
let input_team = document.querySelector('#input_team');
let input_img = document.querySelector('#input_img');
let btn = document.querySelector('#btn');

let data = [];



btn.addEventListener('click', (e)=>{
  e.preventDefault();
  //agregamos la informacion del jugador a el array data
  data.push({name:input_name.value,edad:input_age.value,team:input_team.value,img:input_img.value})
  //agregamos la informacion del objeto al localStorage y lo convertimos en un archivo json (recuerda que es un texto)
  localStorage.setItem('jugador', JSON.stringify(data));
  //vamos a guardar nuestra informacion del localstorage en un nuevo array
  console.log(localStorage);
  console.log(jugadores);
});

let jugadores = localStorage.getItem('jugador');
jugadores = JSON.parse(jugadores);



//crearemos nuestras cards personalizada de nuestros jugadores

jugadores.forEach(jugador =>{
  let container_cards = document.querySelector('#container_cards');

  let div_cols = document.createElement('div');

  container_cards.appendChild(div_cols);

  container_cards.classList.add('my-5', 'd-flex', 'flex-row');

  div_cols.innerHTML = `
    <div class="card mb-3 me-3" style="width: 18rem;">
      <img src="${jugador.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${jugador.name}</h5>
        <p class="card-text">Edad: ${jugador.edad}</p>
        <p class="card-text">Equipo: ${jugador.team}</p>
        <div class="d-flex justify-content-center">
          <a href="#" class="btn btn-danger"> Mas info</a>
        </div>
      </div>
  `
});

console.log()




