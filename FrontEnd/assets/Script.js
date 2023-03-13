
/* Categories */
fetch('http://localhost:5678/api/categories', {Method: 'GET',Headers: {Accept: 'application.json','Content-Type': 'application/json'}})
.then(response => {
  return response.json();
}).then(data => {
  // console.log('Get all categories', data);
  /* On boucle sur les données du tableau pour récuperer chaque ligne avec la methode forEach */
  data.forEach(category => {
    console.log('Ma ligne actuelle du tableau (array)', category);
    /* Creation de mon li avec l'affichage du nom dans le li et de l'attribut data-id de la categorie */
    const liElement = document.createElement('li');
    liElement.textContent = category.name;
    liElement.dataset.id = category.id;
    /* J'affiche mon li dans le code html */
    document.querySelector('#filtreCategorie').appendChild(liElement);
  });
}).catch(error => {throw new Error(error) });

/* Works */
fetch('http://localhost:5678/api/works', {Method: 'GET',Headers: {Accept: 'application.json','Content-Type': 'application/json'}})
.then(response => {
  return response.json();
}).then(data => {
  // console.log('get all works', data);
  data.forEach(works => {
    console.log('Ma ligne actuelle du tableau (array)', works);

    const figureElement = document.createElement('figure');

    /* Creation de l'image */
    const imageElement = document.createElement('img');
    imageElement.src = works.imageUrl;
    imageElement.alt = works.title;
    figureElement.appendChild(imageElement);

    /* Creation du figcaption */
    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.textContent = works.title;
    figureElement.appendChild(figcaptionElement);

    document.querySelector('.gallery').appendChild(figureElement);
    // console.log(figureElement);
  });

}).catch(error => {throw new Error(error) });


