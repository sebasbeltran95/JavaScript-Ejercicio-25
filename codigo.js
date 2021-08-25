let introduceTusMillas = Number(prompt("Introduce tus distancia en millas"));

function CalcularDistancia(milla) {
    let calcular = milla * 1609;
    alert(`Aproximado son ${calcular} kilometros`);
}

CalcularDistancia(introduceTusMillas);