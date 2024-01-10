document.addEventListener("DOMContentLoaded", function() {
  //La on met dans une variable togglebtn qui est notre soleil ou la lune (il y a un seul btn pour les deux)
  const toggleButton = document.getElementById("togglebtn");
  // La on récupère pour le soleil
  const sun = document.getElementById("sun");
  // La ducoup, on récupère l'id pour la lune ("moon")
  const moon = document.getElementById("moon");

  soleil = localStorage.getItem('lightMode') === 'true';
  //On met le mode de la page actuel par apport au localStorage
  changeMode();

  //Quand on appuie sur le bouton donc soit le soleil soit la lune cela change le mode de la page
  toggleButton.addEventListener("click", function() {
    soleil = !soleil;
    localStorage.setItem('lightMode', soleil);

    changeMode();
  });
  // La on fais une fonction pour changer le mode de la page, soit light mode soit black mode en fonction de vrai ou faux
  function changeMode() {
    document.body.classList.toggle('light', soleil);

    document.querySelectorAll('*').forEach(element => {
      element.classList.toggle('light', soleil);
    });


    if (soleil) { // Et la on change le soleil ou la lune en fonction du mode qu'on a activer 
      sun.style.display = 'inline-block';
      moon.style.display = 'none';
    } else {
      sun.style.display = 'none';
      moon.style.display = 'inline-block';
    }
  }
  //La on séléctionne l'élément burger qui est notre bouton de menu
  const burger = document.getElementById("burger");
  //La on séléctionne nav qui est la ou on a mis les différents <a> pour aller sur d'autre site
  const nav = document.getElementById("nav");

  //La on dis que si la fenetre se "resize" donc si elle change de taille, on fais une fonction qui dis que si la taille de la fenetre est supérieur a 1200 ET que la "nav" a deja show:  on toggle show qui est une class css

  window.addEventListener("resize", function() {
    if ((window.innerWidth > 1200) && nav.classList.contains("show")) {
      nav.classList.toggle("show");
    }

  });
  burger.addEventListener("click", function() {
    nav.classList.toggle("show");

  });
});
//La simplement si on  click sur le button burger on toggle la class show



// C'est la fonction pour le formulaire auquel j'envoie a une de mes adresses mail secondaire
function submitForm() {
  const name = document.getElementById('name').value; // La on récupere simplement le nom ("name")
  const email = document.getElementById('email').value; // La on récupere de la meme facon l'email ("email")
  const comment = document.getElementById('message').value; // La on récupere le message ou l'avis que la personne va nous laisser ("message")
  window.location.href = `mailto:lssub24@gmail.com?subject=Avis&body=Nom: ${name}%0AEmail: ${email}%0ACommentaire: ${comment}`;
  // Cette commande permet de changer la location de la page ("l'url"), et la ca nous sert a pré-remplir le main avec le formulaire 
}
