console.log("Entró a main.js");

// Constantes
const endPoint_Base =
  "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
const tblAoE = document.getElementById("tblAoE");
const chartExpansion = document
  .getElementById("chartExpansion")
  .getContext("2d");

// Obtener datos de API
function loadData() {
  console.log("Entró a loadData()...");
  fetch(endPoint_Base)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.civilizations);

      // Constante para gráfica expansion
      const expansion = data.civilizations.map((item) => item.expansion);
      // Función para contar instancias en el array
      const contador_expansion = {};
      for (const nombre of expansion) {
        contador_expansion[nombre] = contador_expansion[nombre]
          ? contador_expansion[nombre] + 1
          : 1;
      }
      // Gráficas

      const Expansion_chart = new Chart(chartExpansion, {
        type: "pie",
        data: {
          labels: Object.keys(contador_expansion),
          datasets: [
            {
              label: "# of Votes",
              data: Object.values(contador_expansion),
              backgroundColor: [
                "rgba(206, 73, 80, 1)",
                "rgba(43, 72, 78, 1)",
                "rgba(55, 115, 116, 1)",
                "rgba(169, 215, 205, 1)",
                "rgba( 221, 239, 227, 01)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
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
