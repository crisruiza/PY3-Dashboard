import { gif } from "./gif.js";
console.log("Entró a index.js");

// Constantes
const APIKey =
  "?ts=1&apikey=d78c429a4ed117122d403e39b5f0cf90&hash=7bd9c3ae8ce5c02666484d0c5721a5c3";
const endPoint_Base =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d78c429a4ed117122d403e39b5f0cf90&hash=7bd9c3ae8ce5c02666484d0c5721a5c3&limit=100&offset=900";
const tblMarvel = document.getElementById("tblMarvel");
const grafica = document.getElementById("myChart").getContext("2d");

// Obtener datos de API
function getMarvel() {
  fetch(endPoint_Base, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data.results);
      tblMarvel.innerHTML = "";
      for (const personaje of json.data.results) {
        let tr = `<tr>
  <td>${personaje.id}</td>
  <td>${personaje.name}</td>
 <td>${personaje.stories.available}</td>
  </tr>`;
        tblMarvel.innerHTML += tr;
      }
      const labels_for_chart = json.data.results.map((item) => item.name);

      const data_for_chart = json.data.results.map(
        (item) => item.stories.available
      );

      const myChart = new Chart(grafica, {
        type: "bar",
        data: {
          labels: labels_for_chart,
          datasets: [
            {
              label: "# de historias",
              data: data_for_chart,
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
    });
}
getMarvel();

// Modularización import / export
gif("https://media.giphy.com/media/1wgWg37SF9FZS6tCCJ/giphy.gif");
