alert("bonjour veuillez me placer où il faut merci");

var dechet = ["plastique", "carton", "bouteilleplastique", "papier", "bouteilleverre", "bocaux", "orduresmenagere", "epluchures", "journaux", "tissu"];
var dechet2 = ["dechets/sacplastique.jpg", "dechets/carton.jpeg", "dechets/boutplast.jpg", "dechets/papier.jpg", "dechets/bouteillepinard.jpg", "dechets/bocaux-en-verre-cuisine.jpg", "dechets/orduremen.jpg", "dechets/epluchures.jpeg", "dechets/journal.jpg", "dechets/tissu.jpg"]

var vie = 10;
/*
var jaune = [0, 1, 2];

var vert = [4, 5, 8];

var bleu = [3, 9];

var marron = [6, 7];
*/

var util;

function ana() {
    util = Math.floor(Math.random() * dechet2.length);


    document.getElementById("deche").innerHTML = "<img src = '" + dechet2[util] + "'>";
}

ana();
document.getElementById("jaune").addEventListener("click", function () {
    if (util == 0 || util == 1 || util == 2) {
        /* document.getElementById("reponses").innerHTML = "Bravo!!";
         score++;*/
        alert("bravo");
        ana();
    }
    if (util == 4 || util == 5 || util == 8) {
        document.getElementById("reponses").innerHTML = "c'étais la verte";

    }
    if (util == 3 || util == 9) {
        document.getElementById("reponses").innerHTML = "c'étais la bleue";

    }
    if (util == 6 || util == 7) {
        document.getElementById("reponses").innerHTML = "c'étais la marron";

    }
});


document.getElementById("vert").addEventListener("click", function () {
    if (util == 4 || util == 5 || util == 8) {
        /*document.getElementById("reponses").innerHTML = "Bravo!!";
        score++;*/
        alert("bravo");
        ana();

    }
    if (util == 0 || util == 1 || util == 2) {
        document.getElementById("reponses").innerHTML = "c'étais la jaune";

    }
    if (util == 3 || util == 9) {
        document.getElementById("reponses").innerHTML = "c'étais la bleue";

    }
    if (util == 6 || util == 7) {
        document.getElementById("reponses").innerHTML = "cétais la marron";

    }
});

document.getElementById("bleu").addEventListener("click", function () {
    if (util == 3 || util == 9) {
        /*document.getElementById("reponses").innerHTML = "Bravo!!";
        score++;*/
        alert("bravo");
        ana();
        if (util == 0 || util == 1 || util == 2) {
            document.getElementById("reponses").innerHTML = "c'étais la jaune";

        }
        if (util == 4 || util == 5 || util == 8) {
            document.getElementById("reponses").innerHTML = "c'étais la verte";

        }
        if (util == 6 || util == 7) {
            document.getElementById("reponses").innerHTML = "c'étais la marron";

        }
    }
});


document.getElementById("marron").addEventListener("click", function () {
    if (util == 6 || util == 7) {
        /*document.getElementById("reponses").innerHTML = "Bravo!!";
        score++;*/
        alert("bravo");
        ana();
        if (util == 0 || util == 1 || util == 2) {
            document.getElementById("reponses").innerHTML = "c'étais la jaune";

        }
        if (util == 4 || util == 5 || util == 8) {
            document.getElementById("reponses").innerHTML = "c'étais la verte";

        }
        if (util == 3 || util == 9) {
            document.getElementById("reponses").innerHTML = "c'étais la bleue";

        }
    }
});

// document.getElementById("deche").src = jauneImg[0];
/*
[0] = dechets/sacplastique.jpg;
[1] = dechets/carton.jpeg;
[3] = dechets/boutplast.jpg;
[4] = dechets/papier.jpg;
[5] = dechets/bouteillepinard.jpg;
[6] = dechets/bocaux-en-verre-cuisine.jpg;
[7] = dechets/orduremen.jpg;
[8] = dechets/epluchures.jpeg;
[9] = autres;

*/
