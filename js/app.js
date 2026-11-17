/* ==========================================================================
   Tow Studios — Interacciones del sitio
   Sin dependencias. Todo funciona también si el JavaScript no carga.
   ========================================================================== */
(function () {
  "use strict";

  var html = document.documentElement;

  /* ----------------------------------------------------------------------
     1. Tema claro / oscuro
     ---------------------------------------------------------------------- */
  var botonTema = document.getElementById("tema");
  var CLAVE = "tow-tema";

  function temaGuardado() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }

  function aplicarTema(tema) {
    html.setAttribute("data-theme", tema);
    if (botonTema) {
      var oscuro = tema === "dark";
      botonTema.setAttribute("aria-pressed", String(oscuro));
      botonTema.setAttribute("aria-label", oscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
    try { localStorage.setItem(CLAVE, tema); } catch (e) {}
  }

  var inicial = temaGuardado();
  if (!inicial) {
    inicial = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  aplicarTema(inicial);

  if (botonTema) {
    botonTema.addEventListener("click", function () {
      aplicarTema(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ----------------------------------------------------------------------
     2. Menú móvil
     ---------------------------------------------------------------------- */
  var botonMenu = document.getElementById("menu-boton");
  var nav = document.getElementById("nav");

  function cerrarMenu() {
    if (!nav || !botonMenu) return;
    nav.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-abierto");
  }

  if (botonMenu && nav) {
    botonMenu.addEventListener("click", function () {
      var abierto = nav.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", String(abierto));
      botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("menu-abierto", abierto);
    });

    nav.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) cerrarMenu();
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") cerrarMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) cerrarMenu();
    });
  }

  /* ----------------------------------------------------------------------
     3. Cabecera compacta y botón de subir
     ---------------------------------------------------------------------- */
  var cabecera = document.getElementById("cabecera");
  var arriba = document.getElementById("arriba");

  function alDesplazar() {
    var y = window.scrollY || window.pageYOffset;
    if (cabecera) cabecera.classList.toggle("compacta", y > 20);
    if (arriba) arriba.classList.toggle("visible", y > 600);
  }
  window.addEventListener("scroll", alDesplazar, { passive: true });
  alDesplazar();

  if (arriba) {
    arriba.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ----------------------------------------------------------------------
     4. Aparición suave de bloques
     ---------------------------------------------------------------------- */
  var bloques = document.querySelectorAll("[data-revelar]");
  var sinMovimiento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || sinMovimiento) {
    Array.prototype.forEach.call(bloques, function (bloque) { bloque.classList.add("visible"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(bloques, function (bloque) { observador.observe(bloque); });
  }

  /* ----------------------------------------------------------------------
     5. Enlace activo en el menú
     ---------------------------------------------------------------------- */
  var enlaces = Array.prototype.slice.call(document.querySelectorAll(".nav__enlace"));
  var anclas = enlaces.filter(function (enlace) {
    var destino = enlace.getAttribute("href") || "";
    return destino.charAt(0) === "#" && destino.length > 1 && document.querySelector(destino);
  });

  if (anclas.length && "IntersectionObserver" in window) {
    var vigia = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var id = "#" + entrada.target.id;
        enlaces.forEach(function (enlace) { enlace.classList.remove("activo"); });
        var actual = anclas.filter(function (enlace) { return enlace.getAttribute("href") === id; })[0];
        if (actual) actual.classList.add("activo");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    anclas.forEach(function (enlace) {
      var seccion = document.querySelector(enlace.getAttribute("href"));
      if (seccion) vigia.observe(seccion);
    });

    // Al inicio de la página el enlace marcado es el primero (Inicio).
    function marcarInicio() {
      if ((window.scrollY || window.pageYOffset) > 120) return;
      enlaces.forEach(function (enlace) { enlace.classList.remove("activo"); });
      if (anclas[0]) anclas[0].classList.add("activo");
    }
    window.addEventListener("scroll", marcarInicio, { passive: true });
    marcarInicio();
  }

  /* ----------------------------------------------------------------------
     6. Galería: filtros
     ---------------------------------------------------------------------- */
  var filtros = document.querySelectorAll("[data-filtro]");
  var piezas = Array.prototype.slice.call(document.querySelectorAll("#galeria .pieza"));

  Array.prototype.forEach.call(filtros, function (filtro) {
    filtro.addEventListener("click", function () {
      var categoria = filtro.getAttribute("data-filtro");

      Array.prototype.forEach.call(filtros, function (otro) {
        otro.classList.remove("esta-activo");
        otro.setAttribute("aria-pressed", "false");
      });
      filtro.classList.add("esta-activo");
      filtro.setAttribute("aria-pressed", "true");

      piezas.forEach(function (pieza) {
        var coincide = categoria === "todos" || pieza.getAttribute("data-cat") === categoria;
        pieza.classList.toggle("oculta", !coincide);
      });
    });
  });

  /* ----------------------------------------------------------------------
     7. Galería: visor de imagen
     ---------------------------------------------------------------------- */
  var visor = document.getElementById("visor");
  var visorImagen = document.getElementById("visor-imagen");
  var visorPie = document.getElementById("visor-pie");
  var visorCerrar = document.getElementById("visor-cerrar");
  var ultimoFoco = null;

  function abrirVisor(pieza) {
    if (!visor || !visorImagen) return;
    var imagen = pieza.querySelector("img");
    if (!imagen) return;
    ultimoFoco = pieza;
    visorImagen.src = imagen.currentSrc || imagen.src;
    visorImagen.alt = imagen.alt || "";
    if (visorPie) visorPie.textContent = imagen.alt || "";
    visor.hidden = false;
    document.body.classList.add("menu-abierto");
    if (visorCerrar) visorCerrar.focus();
  }

  function cerrarVisor() {
    if (!visor) return;
    visor.hidden = true;
    document.body.classList.remove("menu-abierto");
    if (ultimoFoco) ultimoFoco.focus();
  }

  piezas.forEach(function (pieza) {
    pieza.addEventListener("click", function () { abrirVisor(pieza); });
  });

  if (visorCerrar) visorCerrar.addEventListener("click", cerrarVisor);
  if (visor) {
    visor.addEventListener("click", function (evento) {
      if (evento.target === visor) cerrarVisor();
    });
  }
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && visor && !visor.hidden) cerrarVisor();
  });

  /* ----------------------------------------------------------------------
     8. Copiar códigos de color
     ---------------------------------------------------------------------- */
  var aviso = document.getElementById("aviso-copiado");
  var temporizador = null;

  function mostrarAviso(texto) {
    if (!aviso) return;
    aviso.textContent = texto;
    aviso.classList.add("visible");
    window.clearTimeout(temporizador);
    temporizador = window.setTimeout(function () { aviso.classList.remove("visible"); }, 2200);
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-copiar]"), function (boton) {
    boton.addEventListener("click", function () {
      var codigo = boton.getAttribute("data-copiar");

      function confirmar() { mostrarAviso("Copiado: " + codigo); }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codigo).then(confirmar, function () { mostrarAviso(codigo); });
      } else {
        var campo = document.createElement("textarea");
        campo.value = codigo;
        campo.setAttribute("readonly", "");
        campo.style.position = "absolute";
        campo.style.left = "-9999px";
        document.body.appendChild(campo);
        campo.select();
        try { document.execCommand("copy"); confirmar(); } catch (e) { mostrarAviso(codigo); }
        document.body.removeChild(campo);
      }
    });
  });

  /* ----------------------------------------------------------------------
     9. Año del pie
     ---------------------------------------------------------------------- */
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
