window.addEventListener("load", () => {
  const formEl = document.getElementById("form");
  const selectEl = document.getElementById("tipo");
  const precioEl = document.getElementById("precio");
  const precios = { premium: 300, intermedio: 200, basico: 100 };

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    alert(JSON.stringify(formData));
    formEl.reset();
  });

  selectEl.addEventListener("change", (e) => {
    const seguro = e.target.value;
    if (seguro) {
      precioEl.textContent = `$ ${precios[seguro]}`;
    } else {
      precioEl.textContent = "$";
    }
  });
});
