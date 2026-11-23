const botao = document.querySelector("#interruptor");
const rotuloBotao = document.querySelector("#button-label");
const aviso = document.querySelector("#aviso-text");

botao.addEventListener("click", () => {
  const ligada = botao.getAttribute("aria-pressed") !== "true";

  botao.setAttribute("aria-pressed", String(ligada));
  document.body.classList.toggle("light-on", ligada);
  rotuloBotao.textContent = ligada ? "Apagar a luz" : "Ligar a luz";
  aviso.textContent = ligada ? "Luz acesa - novas ideias no ar!" : "Luz apagada";
});
