const pianoTeclas = document.querySelectorAll(".piano-teclas .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keyCheckbox = document.querySelector(".teclas-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav"); //colocando o som 'a' como padrão

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; //trocando o src de acordo com a tecla
  audio.play(); // tocando a nota

  const clickedKey = document.querySelector(`[data-key=${key}]`); //saber qual tecla foi apertada
  clickedKey.classList.add("active"); //adicionando os efeitos para quando a tecla for clicada
  setTimeout(() => {
    //removendo os efeitos
    clickedKey.classList.remove("active");
  }, 150);
};

pianoTeclas.forEach((key) => {
  allKeys.push(key.dataset.key); //adicionando os valores do data-key na array allKeys
  // usando o data-key como agumento para a função playTune
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
  pianoTeclas.forEach((key) => key.classList.toggle("hide"));
};

const handleVolume = (e) => {
  audio.volume = e.target.value; //colocando o valor numerico do slider como volume
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

keyCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
