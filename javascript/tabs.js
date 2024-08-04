function openTab(evt, tabName) {
    // Cache tout le contenu des onglets
    var i, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Enlève la classe "active" de tous les boutons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Affiche le contenu de l'onglet sélectionné et ajoute la classe "active" au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Affiche le premier onglet par défaut
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});
