console.log("Entró a main.js");

// Constantes
const endPoint_Base =
  "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
const tblAoE = document.getElementById("tblAoE");

function loadData() {
  console.log("Entró a loadData()...");
  fetch(endPoint_Base)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.civilizations);
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
