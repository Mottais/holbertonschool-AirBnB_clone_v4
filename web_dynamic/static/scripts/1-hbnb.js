// pour s'assurer que le code de manipulation DOM
// s'exécute uniquement après le chargement HTML
$(document).ready(function() {
  let listeAmenitiesSelectionnees = {};

  // evenement sur clique des checkbox de la classe 'amenities'
  $('.amenities input[type="checkbox"]').change(function() {
    // si la checkbox est coché, ajouter à la liste (clé=id, valeur=name)
    if (this.checked) {
      listeAmenitiesSelectionnees[$(this).data('id')] = $(this).data('name');
    // sinon, supprimer de la liste
    } else {
      delete listeAmenitiesSelectionnees[$(this).data('id')];
    }

    // affichage des amenities selectionnées dans titre h4
    // de la classe 'Amenities' séparées par une virgule
    $('.amenities h4').text(Object.values(listeAmenitiesSelectionnees).join(', '));
  });

});
