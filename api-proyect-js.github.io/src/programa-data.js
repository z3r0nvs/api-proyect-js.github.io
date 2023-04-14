
const lista = document.getElementById('listaNombres');
const requestURL = 'data.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
     const personas = request.response;
     showNewData(personas);
}

function showNewData(jsonObj) {
     const miembros = jsonObj['personas'];

     for (let i = 0; i < miembros.length; i++) {
          const newArticle = document.createElement('article');
          const newP = document.createElement('p');
          const newList = document.createElement('ul');

          newP.textContent = miembros[i].nombre;
          newArticle.appendChild(newP);

     }
}
