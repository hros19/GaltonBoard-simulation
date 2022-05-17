let canv = document.getElementById("board");
let chart = null;
let res;

function execute() {
  if (canv !== undefined) {  }
  let cantBolas = parseFloat(document.getElementById("cantBolas").value);
  let probDer = parseFloat(document.getElementById("probDer").value);
  let probQuieto = parseFloat(document.getElementById("probQuieto").value);
  // Verificar
  if (cantBolas < 1 || cantBolas > 10000) {
    alert("Cantidad de bolas fuera de rango");
    return;
  }
  if (probDer < 0 || probDer > 1) {
    alert("Probabilidad de derecha fuera de rango");
    return;
  }
  if (probQuieto < 0 || probQuieto > 1) {
    alert("Probabilidad de quieto fuera de rango");
    return;
  }
  let tab = new TableroGalton(11, cantBolas, probDer, probQuieto);
  tab.simular();
  res = tab.resultados.map(x => x[1]);
  createChart();
}

function createChart() {
  if (chart !== null) {
    chart.destroy();
  }
  chart = new Chart(canv, {
    type: "bar",
    data: {
      labels: ["0", "1", "2", "3", "4",
               "5", "6", "7", "8", "9",
               "10", "11", "12", "13", "14",
               "15", "16", "17", "18", "19", "20"],
      datasets: [
        {
          label: "Bolas en la linea",
          data: res,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1
        }
      ]
    },
  });
}
