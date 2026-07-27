/* ============ CONFIGURACIÓN — EDITA SOLO AQUÍ ============ */
const CONFIG = {
  nombre: "Jxxve",
  descripcion: "Developer · Designer · R/S",
  ubicacion: "Perú",

  estadisticas: {
    proyectos: 3,
    logros: 7,
    desde: 2021
  },

  redes: {
    youtube:  "https://www.youtube.com/channel/UChoMBqKowU2yNp2EENAwkbQ",
    discord:  null,
    instagram:"https://www.instagram.com/jave_hxns/",
    spotify:  "https://open.spotify.com/user/31t3pae44ophuhj5gr3zzfhrdaeu?si=d78e3680a56840eb",
    roblox:   "https://www.roblox.com/es/users/10643842680/profile",
    tiktok:   "https://www.tiktok.com/@sandeo_roblox?is_from_webapp=1&sender_device=pc",
    github:   "https://github.com/JxVe",
    steam:    null
  },

  // Discord no tiene un link de perfil público, así que al hacer clic
  // se copia este usuario al portapapeles.
  discordUsuario: "jxxve",

  musica: {
    youtubeId: "5-bvIn0rF5E",
    cancion: "Sigo Dañándoles los Días",
    artista: "Alexio “La Bestia”"
  },

  // Lenguajes dominados: se muestran al hacer clic con efecto glitch
  lenguajes: [
    { id: "js",   nombre: "JavaScript", icono: "JS",   porcentaje: 50 },
    { id: "css",  nombre: "CSS",        icono: "{ }",  porcentaje: 60 },
    { id: "html", nombre: "HTML",       icono: "</>",  porcentaje: 90 },
    { id: "lua",  nombre: "Lua",        icono: "λ",    porcentaje: 82 }
  ]
};
/* =========================================================== */

const ICONOS = {
  youtube: `<svg viewBox="0 0 24 24"><path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM10 15V9l5.2 3-5.2 3z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24"><path d="M20 5.3A17.3 17.3 0 0 0 15.6 4l-.3.6a12.9 12.9 0 0 1 3.6 1.4 15.6 15.6 0 0 0-14 0 12.9 12.9 0 0 1 3.6-1.4L8.2 4A17.3 17.3 0 0 0 3.8 5.3C1.3 9 .6 12.6.9 16.1a17.4 17.4 0 0 0 5.3 2.7l.8-1.3a11.2 11.2 0 0 1-1.8-.9l.4-.3a12.4 12.4 0 0 0 10.6 0l.4.3c-.6.3-1.2.6-1.8.9l.8 1.3a17.4 17.4 0 0 0 5.3-2.7c.4-4-.5-7.6-2.9-10.8zM8.7 14c-.8 0-1.4-.8-1.4-1.7 0-1 .6-1.7 1.4-1.7s1.4.8 1.4 1.7c0 1-.6 1.7-1.4 1.7zm6.6 0c-.8 0-1.4-.8-1.4-1.7 0-1 .6-1.7 1.4-1.7s1.4.8 1.4 1.7c0 1-.6 1.7-1.4 1.7z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2c-2.7 0-3.1 0-4.1.1-1 .1-1.7.2-2.3.5-.6.3-1.2.6-1.7 1.2-.6.5-.9 1.1-1.2 1.7-.3.6-.4 1.3-.5 2.3C2.1 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 1 .2 1.7.5 2.3.3.6.6 1.2 1.2 1.7.5.6 1.1.9 1.7 1.2.6.3 1.3.4 2.3.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1-.1 1.7-.2 2.3-.5.6-.3 1.2-.6 1.7-1.2.6-.5.9-1.1 1.2-1.7.3-.6.4-1.3.5-2.3.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1-.2-1.7-.5-2.3-.3-.6-.6-1.2-1.2-1.7-.5-.6-1.1-.9-1.7-1.2-.6-.3-1.3-.4-2.3-.5C15.1 2 14.7 2 12 2zm0 4.9A5.1 5.1 0 1 1 6.9 12 5.1 5.1 0 0 1 12 6.9zm0 8.4A3.3 3.3 0 1 0 8.7 12a3.3 3.3 0 0 0 3.3 3.3zm5.3-8.6a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2z"/></svg>`,
  spotify: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.4 14.4a.6.6 0 0 1-.8.2c-2.2-1.3-5-1.6-8.3-.9a.6.6 0 1 1-.3-1.2c3.6-.8 6.7-.5 9.2 1 .3.2.4.6.2.9zm1.2-2.8a.8.8 0 0 1-1 .3c-2.5-1.5-6.3-2-9.3-1.1a.8.8 0 1 1-.5-1.5c3.4-1 7.6-.5 10.5 1.2a.8.8 0 0 1 .3 1.1zm.1-2.9C14.8 9 8.9 8.8 6.2 9.6a1 1 0 1 1-.6-1.9c3.1-1 9.6-.7 13.4 1.5a1 1 0 0 1-1 1.7z"/></svg>`,
  roblox: `<svg viewBox="0 0 24 24"><path d="M4.5 3.5l16 4.3-4.3 16-16-4.3zM9 9.4l1.6 6 6-1.6-1.6-6z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24"><path d="M14 2h3c.2 1.7 1.2 3.1 2.8 3.8.6.3 1.3.4 2 .4v3c-1.6 0-3-.4-4.3-1.2v6.6a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.1a2.8 2.8 0 1 0 2 2.7V2z"/></svg>`,
  steam: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 9.6l5.4 2.2a2.8 2.8 0 0 1 1.6-.5l2.4-3.5v-.1a3.7 3.7 0 1 1 3.7 3.7h-.1l-3.4 2.4a2.8 2.8 0 0 1-5.5.7L2.3 14.9A10 10 0 1 0 12 2zM8.4 17.5l-1.2-.5a2 2 0 0 0 3.7.8 2 2 0 0 0-1-2.6 2 2 0 0 0-1.5 2.3zm7-6.4a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>`
};

/* ---------- Referencias DOM ---------- */
const pantallaInicio = document.getElementById("pantalla-inicio");
const botonEntrar = document.getElementById("boton-entrar");
const contenido = document.getElementById("contenido");
const nombreUsuario = document.getElementById("nombre-usuario");
const contadorVistas = document.getElementById("contador-vistas");
const redesContenedor = document.getElementById("redes-contenedor");
const ubicacion = document.getElementById("ubicacion");

/* ---------- Rellenar datos desde CONFIG ---------- */
document.getElementById("descripcion").textContent = CONFIG.descripcion;
document.getElementById("texto-ubicacion").textContent = CONFIG.ubicacion;
document.getElementById("stat-proyectos").textContent = CONFIG.estadisticas.proyectos;
document.getElementById("stat-logros").textContent = CONFIG.estadisticas.logros;
document.getElementById("stat-desde").textContent = CONFIG.estadisticas.desde;
document.getElementById("reproductor-artista").textContent = CONFIG.musica.artista;

/* ---------- Redes con animación al hacer clic ---------- */
Object.entries(CONFIG.redes).forEach(([nombreRed, link]) => {
  const item = document.createElement(link ? "a" : "div");
  item.className = "red-icono";
  item.innerHTML = ICONOS[nombreRed] || "";

  if (link) {
    item.href = link;
    item.target = "_blank";
  } else {
    item.style.cursor = "pointer";
  }

  item.addEventListener("click", (e) => {
    item.classList.remove("pop");
    void item.offsetWidth;
    item.classList.add("pop");

    if (nombreRed === "discord") {
      e.preventDefault();
      copiarUsuarioDiscord(item);
      return;
    }

    if (!link) mostrarTooltip(item, "Próximamente");
  });

  redesContenedor.appendChild(item);
});

/* ---------- Ubicación clickeable ---------- */
ubicacion.addEventListener("click", () => {
  mostrarTooltip(ubicacion, "Localización: Próximamente");
});

function copiarUsuarioDiscord(elemento) {
  const usuario = CONFIG.discordUsuario;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(usuario)
      .then(() => mostrarTooltip(elemento, `¡Copiado! ${usuario}`))
      .catch(() => mostrarTooltip(elemento, usuario));
  } else {
    mostrarTooltip(elemento, usuario);
  }
}

function mostrarTooltip(elemento, texto) {
  if (elemento.querySelector(".tooltip")) return;
  const tip = document.createElement("div");
  tip.className = "tooltip";
  tip.textContent = texto;
  elemento.style.position = "relative";
  elemento.appendChild(tip);
  requestAnimationFrame(() => tip.classList.add("visible"));
  setTimeout(() => tip.remove(), 1800);
}

/* ---------- Animación typewriter (INTACTA — no se tocó) ---------- */
function crearTypewriterLoop(texto, actualizar, velEscribir = 150, velBorrar = 100, pausaFinal = 1000, pausaVacio = 500) {
  let i = 0, borrando = false;
  function paso() {
    if (!borrando) {
      actualizar(texto.substring(0, i + 1));
      i++;
      if (i === texto.length) { borrando = true; setTimeout(paso, pausaFinal); return; }
    } else {
      actualizar(texto.substring(0, i - 1));
      i--;
      if (i === 0) { borrando = false; setTimeout(paso, pausaVacio); return; }
    }
    setTimeout(paso, borrando ? velBorrar : velEscribir);
  }
  paso();
}

crearTypewriterLoop(CONFIG.nombre, (txt) => nombreUsuario.textContent = txt);
crearTypewriterLoop("@" + CONFIG.nombre, (txt) => document.title = txt || "…");

(function escribirEsquina() {
  const texto = "presiona para avanzar";
  const el = document.getElementById("texto-avanzar");
  let i = 0;
  const intervalo = setInterval(() => {
    el.textContent = texto.substring(0, i + 1);
    i++;
    if (i === texto.length) clearInterval(intervalo);
  }, 60);
})();

/* ---------- Contador de vistas ---------- */
function actualizarVistas() {
  let vistas = parseInt(localStorage.getItem("vistas") || "0", 10);
  vistas += 1;
  localStorage.setItem("vistas", vistas);
  contadorVistas.textContent = vistas;
}

/* ---------- Música con YouTube ---------- */
let player = null;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    videoId: CONFIG.musica.youtubeId,
    playerVars: {
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      fs: 0
    },
    events: {
      onReady: () => {
        document.getElementById("reproductor-titulo").textContent = CONFIG.musica.cancion;
      }
    }
  });
}

const botonPlayPause = document.getElementById("boton-play-pause");
const estadoMusica = document.getElementById("ondas");
const ondasEl = document.getElementById("ondas");

botonPlayPause.addEventListener("click", () => {
  botonPlayPause.classList.remove("pop");
  void botonPlayPause.offsetWidth;
  botonPlayPause.classList.add("pop");

  if (!player || typeof player.getPlayerState !== "function") return;

  if (player.getPlayerState() === 1) {
    player.pauseVideo();
    botonPlayPause.textContent = "▶";
    ondasEl.classList.remove("activo");
  } else {
    player.playVideo();
    botonPlayPause.textContent = "❚❚";
    ondasEl.classList.add("activo");
  }
});

/* ---------- Controles secundarios (aún sin lista de reproducción) ---------- */
["boton-shuffle", "boton-anterior", "boton-siguiente", "boton-repetir"].forEach((id) => {
  const boton = document.getElementById(id);
  boton.addEventListener("click", () => mostrarTooltip(boton, "Próximamente"));
});

/* ---------- Entrada a la página ---------- */
botonEntrar.addEventListener("click", () => {
  pantallaInicio.classList.add("oculto");
  contenido.classList.remove("oculto");

  actualizarVistas();

  if (player && typeof player.playVideo === "function") {
    player.playVideo();
    ondasEl.classList.add("activo");
    botonPlayPause.textContent = "❚❚";
  }
});

/* ---------- Botón "Ver más" (Acerca de mí) ---------- */
document.getElementById("btn-ver-mas").addEventListener("click", (e) => {
  mostrarTooltip(e.target.parentElement, "Próximamente");
});


/* ======================================================================
   BLOQUE — Barra de progreso del reproductor
   ====================================================================== */
function formatearTiempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = Math.floor(segundos % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

setInterval(() => {
  if (!player || typeof player.getCurrentTime !== "function") return;
  const actual = player.getCurrentTime();
  const total = player.getDuration();
  if (!total) return;
  document.getElementById("barra-progreso").style.width = (actual / total * 100) + "%";
  document.getElementById("tiempo-actual").textContent = formatearTiempo(actual);
  document.getElementById("tiempo-total").textContent = formatearTiempo(total);
}, 500);


/* ======================================================================
   BLOQUE — Lenguajes dominados (glitch al mostrar el porcentaje)
   ====================================================================== */
(function iniciarLenguajes() {
  const contenedor = document.getElementById("lenguajes-contenedor");
  if (!contenedor) return;

  CONFIG.lenguajes.forEach((lenguaje) => {
    const item = document.createElement("button");
    item.className = "tech-item";
    item.type = "button";
    item.innerHTML = `
      <span class="tech-icono">${lenguaje.icono}</span>
      <span class="tech-nombre">${lenguaje.nombre}</span>
      <span class="tech-porcentaje">${lenguaje.porcentaje}%</span>
    `;

    item.addEventListener("click", () => {
      if (item.classList.contains("en-transicion")) return;
      item.classList.add("en-transicion", "glitch");

      setTimeout(() => {
        item.classList.toggle("mostrar-porcentaje");
      }, 220);

      setTimeout(() => {
        item.classList.remove("glitch", "en-transicion");
      }, 480);
    });

    contenedor.appendChild(item);
  });
})();


/* ======================================================================
   BLOQUE — Parallax sutil del texto de fondo "JXXVE"
   ====================================================================== */
(function iniciarParallaxFondo() {
  const fondo = document.querySelector("[data-parallax]");
  if (!fondo) return;
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    fondo.style.transform = `rotate(-3deg) skewX(-6deg) translate(${x * 8}px, ${y * 8}px)`;
  });
})();
