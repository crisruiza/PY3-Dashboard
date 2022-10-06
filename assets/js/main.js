console.log("Entró a main.js");

// Constantes
const APIKey =
  "?ts=1&apikey=d78c429a4ed117122d403e39b5f0cf90&hash=7bd9c3ae8ce5c02666484d0c5721a5c3";
const endPoint_Base =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d78c429a4ed117122d403e39b5f0cf90&hash=7bd9c3ae8ce5c02666484d0c5721a5c3&limit=100&offset=0";
const tblMarvel = document.getElementById("tblMarvel");

// Obtener datos de API
function getMarvel() {
  fetch(endPoint_Base, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data.results);
      tblMarvel.innerHTML = "";
      for (const personaje of json.data.results) {
        let tr = `<tr>
  <td>${personaje.id}</td>
  <td>${personaje.name}</td>
 <td>${personaje.description}</td>
  </tr>`;
        tblMarvel.innerHTML += tr;
        if (personaje.description === "") {
          console.log("vacio");
        }
      }
    });
}
getMarvel();

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
