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

  // Effectuer une requête GET du statut de l'API
  $.get("http://127.0.0.1:5001/api/v1/status/")
    .done(function(data, textStatus) {
      if (data.status === "OK") {
        $('#api_status').addClass("available");
      } else {
        $('#api_status').removeClass("available");
      }
    })
    .fail(function() {
      $('#api_status').removeClass("available");
      alert('get("http://127.0.0.1:5001/api/v1/status/") à échoué');
    });
});
