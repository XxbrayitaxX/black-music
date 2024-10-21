const canciones = [
  {
    nombre: 'el intenso',
    artista: 'Jhonny rivera',
    img: 'assets/images/intenso.jpg',
    ruta: 'assets/music/El Intenso - Jhonny Rivera (Video Oficial).mp3'
  },
  {
    nombre: 'or nah',
    artista: 'Anuel AA',
    img: 'assets/images/ornah.jpg',
    ruta: 'assets/music/Or Nah (Spanish Remix).mp3'
  },
  {
    nombre: 'Street poem',
    artista: 'Anuel AA',
    img: 'assets/images/street poem.jfif',
    ruta: 'assets/music/Anuel AA - Street Poem [Official Audio].mp3'
  },
  {
    nombre: 'Goosebumps',
    artista: 'Jon z X ela A',
    img: 'assets/images/jonz.jpg',
    ruta: 'assets/music/Jon Z X Ele A - Goosebumps (Spanish Version) (Audio).mp3'
  },
  {
    nombre: 'PALABRAS SOBRAN',
    artista: 'BLESSD',
    img: 'assets/images/palabras.jpg',
    ruta: 'assets/music/BLESSD   PALABRAS SOBRAN ( VIAJE 2 ).mp3'
  },
]

let indiceActual = 0;

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const former = document.getElementById('former')
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const following = document.getElementById('following')
const stop = document.getElementById('stop');
const audioSource = document.getElementById("audioSource");
const songName = document.getElementById("songName");
const imagen = document.getElementById("img")
const artista = document.getElementById('artist')

// Cargar la primera canción
cargarCancion(indiceActual);

// Función para cargar una canción
function cargarCancion(indice) {
  songName.textContent = canciones[indice].nombre;
  artista.textContent = canciones[indice].artista
  imagen.src = canciones[indice].img;
  audioSource.src = canciones[indice].ruta;
  audio.load();
}

// Eventos
play.addEventListener('click', () => audio.play());

pause.addEventListener('click', () => audio.pause());

rewind.addEventListener('click', () => audio.currentTime = Math.max(0, audio.currentTime - 10));

forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Cambiar a la siguiente canción al clickiar
following.addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
  cargarCancion(indiceActual); // Cargar la nueva canción
  audio.play(); // Reproducir automáticamente
})

// retroceder a la siguiente canción al clickiar
former.addEventListener('click', () => {
  indiceActual = (indiceActual - 1 + canciones.length) % canciones.length; // Cambiar al índice anterior, con ajuste para el caso negativo
  cargarCancion(indiceActual); // Cargar la nueva canción
  audio.play(); // Reproducir automáticamente
})

// Cambiar a la siguiente canción al terminar
audio.addEventListener('ended', () => {
  indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
  cargarCancion(indiceActual); // Cargar la nueva canción
  audio.play(); // Reproducir automáticamente
});
