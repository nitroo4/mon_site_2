function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
  
      // Gérer le cycle des diapositives
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
  
      // Masquer toutes les diapositives
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
  
      // Retirer la classe "active" de tous les dots
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
  
      // Afficher les 3 premières diapositives et ajouter la classe "active" au dot correspondant
      for (i = 0; i < 3; i++) {
          slides[(slideIndex - 1 + i) % slides.length].style.display = "block";  // Faire défiler
      }
  
      // Marquer le dot comme actif
      dots[(slideIndex - 1) % dots.length].className += " active";
  }
  
  // Fonction pour faire défiler les images
  function nextSlide() {
      showSlides(slideIndex += 1);
  }
  
  // Fonction pour initialiser le slider et démarrer le défilement automatique
  function startSlides() {
      showSlides(slideIndex);
      setInterval(function() {
          showSlides(slideIndex += 1);
      }, 2000); // Change de diapositive toutes les 2 secondes
  }
  
  // Appel de la fonction au démarrage
  startSlides();
  

  