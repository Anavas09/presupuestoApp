export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    // Comprobar el 25%
    if (presupuesto / 4 > restante) {
        clase = "alert alert-danger";
    // Comprobar el 50%
    } else if (presupuesto / 2 > restante) {
        clase = "alert alert-warning";
    } else {
        clase = "alert alert alert-success";
    }
    return clase;
};