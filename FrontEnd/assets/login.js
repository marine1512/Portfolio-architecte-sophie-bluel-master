/* Login Event Listener */
document.querySelector('.button-login').addEventListener('click', function() {
  
  const email = document.querySelector('#emailLogin').value;
  const password = document.querySelector('#passwordLogin').value;
  const data = {email: email, password: password};
  console.log('Email', email, 'Mot de passe', password);

  fetch('http://localhost:5678/api/users/login',{method: 'POST', headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body: JSON.stringify(data),
  }).then( res => {
      return res.json();
  }).then(data => {
    const token = data.token;
    console.log('Reponse du login', token, data);

    /* Sauvegarde du token dans la localstorage */
    localStorage.setItem('userToken', token);

    /* redirection vers la page d'accueil */
    window.location.href = 'page_modif1.html';

  }).catch(error => {throw new Error(error) });

});