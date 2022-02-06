function clears() {
    document.getElementById("res").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("totalMin").value = "";
    document.getElementById("lapMin").value = "";
    document.getElementById("lapSec").value = "";
    document.getElementById("litrosPorVuelta").value = "";
}

function calcular() {
    let totalMin = parseFloat(document.getElementById("totalMin").value);
    let lapMin = parseFloat(document.getElementById("lapMin").value);
    let lapSec = parseFloat(document.getElementById("lapSec").value);
    let litrosPorVuelta = parseFloat(document.getElementById("litrosPorVuelta").value);

    let laptime = (lapMin*60) + lapSec;
    let litros = (((totalMin*60)/laptime)*litrosPorVuelta).toFixed(3);
    let vueltas = (totalMin*60/laptime).toFixed(1);

    document.getElementById("res").innerHTML = litros + " litros";
    document.getElementById("res2").innerHTML = vueltas + "~ vueltas";
}


clears();