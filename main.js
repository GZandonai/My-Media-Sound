function tocaSom(idAudio) {
    const audioElement = document.querySelector(idAudio)
    const newAudioElement = audioElement.cloneNode() // Clona o elemento de áudio
    newAudioElement.play(); // Toca o novo elemento
  }
  
  const listaDeTeclas = document.querySelectorAll(".tecla")
  
  let contador = 0
  
  while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador]
  
    const instrumento = tecla.classList[1]
  
    const idAudio = `#som_${instrumento}`
  
    tecla.onclick = function () {
      tocaSom(idAudio);
    };
  
    contador = contador + 1;
  }