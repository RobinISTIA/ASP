//variables globales
var loading;
var content;
var lnkFaireSimulation;
var lnkEffacerSimulation
var lnkEnregistrerSimulation;
var lnkTerminerSession;
var lnkVoirSimulations;
var lnkRetourFormulaire;
var options;

function faireSimulation() {
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession, lnkEffacerSimulation]);
    var simulation = $('#simulation');
    var formulaire = null;
    $.ajax({
        url: '/Pam/FaireSimulation',
        type: 'POST',
        //data: formulaire.serialize(),
        dataType: 'html',
        beforeSend: function () {
            loading.show();
        },
        success: function (data) {
            simulation.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            // affichage réponse serveur
            content.html(jqXHR.responseText);
        }
    }) 
}

function effacerSimulation() {
    $('#simulation').hide();
}

function enregistrerSimulation() {
    setMenu([lnkRetourFormulaire, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/EnregistrerSimulation',
        type: 'POST',
        //data: formulaire.serialize(),
        dataType: 'html',
        beforeSend: function () {
            loading.show();
        },
        success: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            // affichage réponse serveur
            content.html(jqXHR.responseText);
        }
    })
}

function voirSimulations() {
    setMenu([lnkRetourFormulaire, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/VoirSimulation',
        type: 'POST',
        //data: formulaire.serialize(),
        dataType: 'html',
        beforeSend: function () {
            loading.show();
        },
        success: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            // affichage réponse serveur
            content.html(jqXHR.responseText);
        }
    })
}

function retourFormulaire() {
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/Formulaire',
        type: 'POST',
        //data: formulaire.serialize(),
        dataType: 'html',
        beforeSend: function () {
            loading.show();
        },
        success: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            // affichage réponse serveur
            content.html(jqXHR.responseText);
        }
    })
}

function terminerSession() {
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/TerminerSession',
        type: 'POST',
        //data: formulaire.serialize(),
        dataType: 'html',
        beforeSend: function () {
            loading.show();
        },
        success: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            // affichage réponse serveur
            content.html(jqXHR.responseText);
        }
    })
}

$(document).ready(function () {
    loading = $("#loading");
    content = $("#content");
    // les liens du menu
    lnkFaireSimulation = $("#lnkFaireSimulation");
    lnkEffacerSimulation = $("#lnkEffacerSimulation");
    lnkEnregistrerSimulation = $("#lnkEnregistrerSimulation");
    lnkVoirSimulations = $("#lnkVoirSimulations");
    lnkTerminerSession = $("#lnkTerminerSession");
    lnkRetourFormulaire = $("#lnkRetourFormulaire");
    // on les met dans un tableau
    options = [lnkFaireSimulation, lnkEffacerSimulation, lnkEnregistrerSimulation, lnkVoirSimulations, lnkTerminerSession, lnkRetourFormulaire];
    // on fixe le menu
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
    //on cache certains éléments de la page
    loading.hide();
})

function setMenu(show) {
    $(options).each(function (i) {
        options[i].hide();
    });
    $(show).each(function (i) {
        show[i].show();
    });
}