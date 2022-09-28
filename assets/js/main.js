console.log("Entró a main.js");

// Constantes
const endPoint_Base =
  "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
const tblAoE = document.getElementById("tblAoE");

// Obtener datos de API
function loadData() {
  console.log("Entró a loadData()...");
  fetch(endPoint_Base)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.civilizations);

      // Constante para gráfica
      const expansion = data.civilizations.map((item) => item.expansion);
      console.log(expansion);

      // Gráficas
      const grafica = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      // Información en tabla
      tblAoE.innerHTML = "";
      for (const civilizacion of data.civilizations) {
        let tr = `<tr>
        <td>${civilizacion.id}</td>
        <td>${civilizacion.name}</td>
        <td>${civilizacion.army_type}</td>
        <td>${civilizacion.expansion}</td>
        <td>${civilizacion.team_bonus}</td>
        </tr>`;
        tblAoE.innerHTML += tr;
      }
    });
}

loadData();
