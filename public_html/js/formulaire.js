function validEnvoi() {
    if (window.document.querySelector("#i_nom").value === "")
             {
        alert("Le nom  doivent être remplis"); // On affiche un message
    }
       else if (window.document.querySelector("#i_prenom").value === ""){
            alert(" le prénom doivent être remplis"); // On affiche un message
            }
 else if (window.document.querySelector("#i_email").value === "") {
        alert("L'email doit être rempli"); // On affiche un message
    }
     else {
       let question = "Les réponses du formulaire sont valides ?"    
       if (confirm(question)) {
            window.document.querySelector("#form_contact").submit(); // On peut envoyer
        }
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
}
);


