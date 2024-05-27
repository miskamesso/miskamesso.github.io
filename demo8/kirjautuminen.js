document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "block";
    } else {
        document.getElementById("tervetulo_teksti").textContent = "Tervetuloa ";
        document.getElementById("kirjautumis_lomake").style.display = "block";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
    }
}

function kirjaudu(event) {
    event.preventDefault();
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    onkoKirjautunut();
}

function kirjauduUlos() {
    localStorage.removeItem("nimi");
    localStorage.removeItem("kirjautunut");
    onkoKirjautunut();
}