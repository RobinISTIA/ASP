// variables globales
var loading;
var content;
var lnkFaireSimulation;
var lnkEffacerSimulation;
var lnkEnregistrerSimulation;
var lnkTerminerSession;
var lnkVoirSimulations;
var lnkRetourFormulaire;
var options;

function faireSimulation() {
    // on fait un appel Ajax à la main
    var simulation = $("#simulation");
    var formulaire = $("#formulaire");
    if (!formulaire.validate().form()) {
        return;
    }
    setMenu([lnkFaireSimulation, lnkEffacerSimulation, lnkVoirSimulations, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/Simulation',
        type: 'POST',
        data: simulation.serialize(),
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
    // on efface les saisies du formulaire
    var simulation = $("#simulation");
    simulation.hide();
}

function enregistrerSimulation() {
    // on fait un appel Ajax à la main
    var simulation = $("#simulation");
    setMenu([lnkRetourFormulaire, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/EnregistrerSimulation',
        type: 'POST',
        data: simulation.serialize(),
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
    // on fait un appel Ajax à la main
    var simulation = $("#simulation");
    setMenu([lnkRetourFormulaire, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/VoirSimulations',
        type: 'POST',
        data: simulation.serialize(),
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
    // on fait un appel Ajax à la main
    var simulation = $("#simulation");
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/Formulaire',
        type: 'POST',
        data: simulation.serialize(),
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
    var simulation = $("#simulation");
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
    $.ajax({
        url: '/Pam/TerminerSession',
        type: 'POST',
        data: simulation.serialize(),
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

$.validator.methods.number = function (value, element) {
    return this.optional(element) || !isNaN(Globalize.parseFloat(value));
}
$.validator.methods.date = function (value, element) {
    return this.optional(element) || !isNaN(Globalize.parseDate(value));
}
jQuery.extend(jQuery.validator.methods, {
    range: function (value, element, param) {
        //Use the Globalization plugin to parse the value
        var val = Globalize.parseFloat(value);
        return this.optional(element) || ( val >= param[0] && val <= param[1]);
    }
});

// au chargement du document
$(document).ready(function () {
    // on récupère les références des différents composants de la page
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
    // on cache certains éléments de la page
    loading.hide();
    // on fixe le menu
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);

    var culture = 'fr-FR';
    Globalize.culture(culture);
});

function setMenu(show) {
    // on affiche les liens du tableau [show]
    $.each(options, function (i) {
        options[i].hide();
    });
    $.each(show, function (i) {
        show[i].show();
    });
}