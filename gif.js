const GIFcontainer = document.getElementById("GIFcontainer");

const gif = (url) => {
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  GIFcontainer.appendChild(img);
  img.src = url;
  GIFcontainer.appendChild(h3);
  h3.innerText = "¡Gracias por visitar esta página!";
  h3.classList.add("p-3");
};

export { gif };
