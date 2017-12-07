// variables globles
var loading;
var content;

function faireSimulation() {
  //on fait un appel Ajax a la main
  var formulaire = $("#formulaire");
  $.ajax({
    url: '/Pam/FaireSimulation',
    type: 'POST',
    data: formulaire.serialize(),
    dataType: 'html',
    beforeSend: function () {
      loading.show();
    },
    success: function(data) {
      content.html();
    },
    complete: function () {
      loading.hide();
    },
    error: function (jqXHR) {
      content.html(jqXHR.responseText);
    }
  })
}

function effacerSimulation() {
  // on efface les saisies du formulaire

}

function enregistrerSimulation() {

}

function voirSimulation() {

}

function retourFormulaire() {

}

function terminerSession() {

}

$(document).ready(function() {
  // on récupère les réfèrences des différents composants de la page
  loading = $("#loading");
  content = $("#content");
});