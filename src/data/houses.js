// Per-breakpoint positions (%) measured from each background image
// mobile: 1152×2048 (9:16), tablet: 1024×1024 (1:1), desktop: 2048×1152 (16:9)

const houses = [
  {
    id: "terraria",
    name: "Terraria",
    image: "house1.png",
    mobile: { x: 9, y: 23, width: 25, height: 12 },
    tablet: { x: 9, y: 23, width: 25, height: 12 },
    desktop: { x: 29, y: 5, width: 14, height: 26 },
    popupContent: {
      title: "🏡 Nuestra historia",
      subtitle: "De un 'Truco o Trato' al 'Sí, quiero'",
      body: (
        <>
          ¿Quién nos iba a decir que un grupo de Discord sería el principio de
          todo? Nuestra historia se escribió primero en una lista de Spotify
          llamada "Truco o Trato" y después en las calles de Madrid, entre
          conciertos y risas compartidas.
          <br />
          Hemos viajado, hemos mudado nuestras vidas a Galicia y hemos aprendido
          que el "hogar" se construye en las pequeñas grandes cosas. Pero si
          hubo un momento que lo cambió todo, fue en Islandia. Allí, tras el
          velo de una cascada y bajo la luz de un sol que apenas nacía,
          prometimos que nuestra banda sonora no dejaría de sonar nunca. <br />
          ¡Estamos felices de que ahora forméis parte de nuestra siguiente gran
          estrofa!
        </>
      ),
    },
  },
  {
    id: "mario",
    name: "Mario Bros",
    image: "house2.png",
    mobile: { x: 35, y: 26, width: 24, height: 14 },
    tablet: { x: 35, y: 26, width: 24, height: 14 },
    desktop: { x: 44, y: 8, width: 13, height: 24 },
    popupContent: {
      title: "🍄 El gran día: 07/11/2026",
      subtitle: "Los tiempos aproximados para que no te pierdas nada.",
      body: (
        <>
          14:00 h - Ceremonia civil
          <br />
          14:30 h - Banquete
          <br />
          19:00 h - Barra libre y fiesta
          <br />
        </>
      ),
    },
  },
  {
    id: "gravity-falls",
    name: "Mystery Shack",
    image: "house3.png",
    mobile: { x: 66, y: 26, width: 25, height: 12 },
    tablet: { x: 66, y: 26, width: 25, height: 12 },
    desktop: { x: 61, y: 5, width: 14, height: 26 },
    popupContent: {
      title: "🔮 Código de vestimenta",
      subtitle: "¿Qué me pongo?",
      body: (
        <>
          La única regla: Que te sientas preciosx y, sobre todo, cómodx para
          disfrutar al máximo de la fiesta.
          <br />
          <br />
          Con sentidiño: Recordad que nos casamos en noviembre y en plena costa
          gallega. Os recomendamos venir preparados por si nos sorprende el frío
          o la lluvia. Para que os hagáis una idea, el clima suele ser fresco y
          húmedo, con temperaturas que suelen oscilar entre los 10°C y 16°C.
        </>
      ),
    },
  },
  {
    id: "unravel",
    name: "Unravel Two",
    image: "house4.png",
    mobile: { x: 14, y: 43, width: 28, height: 14 },
    tablet: { x: 14, y: 43, width: 28, height: 14 },
    desktop: { x: 31, y: 37, width: 16, height: 28 },
    popupContent: {
      title: "🧶 ¿Dónde?",
      subtitle: "La Casa de la Tía Julita",
      body: (
        <>
          Un enclave gallego con vistas increíbles para este día único, en el
          que esperamos que bebáis como enanos, cantéis como elfos y comáis como
          hobbits. <br />
          <br />
          Rúa Rodríguez Castelao, 10
          <br />
          15624 Ares, A Coruña
          <br />
          España
          <br />
          <a
            href="https://www.google.com/maps/dir//La+casa+de+la+t%C3%ADa+Julita,+R%C3%BAa+Rodr%C3%ADguez+Castelao,+10,+15624+Ares,+A+Coru%C3%B1a/@43.3553408,-8.394697,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2e76bb9b299203:0xacf544a5357e60ae!2m2!1d-8.2353481!2d43.4313582?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="popup__btn"
          >
            Cómo llegar
          </a>
        </>
      ),
    },
  },
  {
    id: "it-takes-two",
    name: "It Takes Two",
    image: "house5.png",
    mobile: { x: 53, y: 42, width: 28, height: 14 },
    tablet: { x: 53, y: 42, width: 28, height: 14 },
    desktop: { x: 55, y: 33, width: 16, height: 28 },
    popupContent: {
      title: "🎮 ¿Dónde descanso este cuerpazo?",
      subtitle:
        "Hemos seleccionado alojamientos cerca de Ares y la preciosa villa medieval de Pontedeume para daros algunas ideas.",
      body: (
        <>
          <strong>Ares:</strong>
          <br />
          - Noaru apartamentos deluxe (a 5 min en coche o 17 min andando de La
          casa de la tía Julita)
          <br />
          - Apartamentos Ares rentals (a 5 min en coche o 16 min andando de La
          casa de la tía Julita)
          <br />
          - Hotel Villa de Ares (a 3 min en coche o 13 min andando de La casa de
          la tía Julita)
          <br />
          <br />
          <strong>Pontedeume:</strong>
          <br />
          - Hotel Montebreamo (a 18 min en coche de La casa de la tía Julita)
          <br />
          - Hotel Albatros (a 16 min en coche de La casa de la tía Julita)
          <br />
          - Hotel Camino do Eume (a 16 min en coche de La casa de la tía Julita)
          <br />- Hotel A falúa (a 16 min en coche de La casa de la tía Julita)
        </>
      ),
    },
  },
  {
    id: "borderlands",
    name: "Borderlands",
    image: "house6.png",
    mobile: { x: 15, y: 58, width: 25, height: 14 },
    tablet: { x: 15, y: 58, width: 25, height: 14 },
    desktop: { x: 32, y: 65, width: 14, height: 28 },
    popupContent: {
      title: "💥 ¡Aprovecha y alarga tu estancia en Galicia!",
      subtitle:
        "Los que venís desde Madrid acordaros de que... ¡el lunes es festivo! Y aunque no sea así, siempre es buena excusa para alargar el fin de semana y descubrir rincones de Galicia.",
      body: (
        <>
          <strong>Rutas y naturaleza:</strong>
          <br />
          - Rutas para Aventureros en Parque Natural Fragas do Eume: Ruta del
          Monasterio de Caaveiro, Ruta de los Encomendeiros o Ruta del
          Monasterio de Monfero.
          <br />
          - Ruta más suave/Familiar: Paseo fluvial río Xubia, con preciosas
          tallas de madera.
          <br />
          - Vistas y Patrimonio: Visita el Castillo de Andrade o el Mirador de
          Paraño.
          <br />
          <br />
          <strong>Cultura y ciudades:</strong>
          <br />
          - Cercanas: a solo 6 min en coche está el encantador pueblo de Redes.
          También a media hora puedes acercarte a probar las famosas tortillas
          de Betanzos o explorar la "ciudad de cristal" de A Coruña.
          <br />
          - Excursiones (1 hora aprox.): La preciosa Muralla de Lugo, la
          imponente catedral de Santiago de Compostela, el famoso "banco más
          bonito del mundo" en Loiba o el pueblo de San Andrés de Teixido.
          <br />
          <br />
          <strong>Para comer:</strong>
          <br />
          - En Ares: Restaurante Textura o A ferradura.
          <br />
          - En Pontedeume: Varadoiro, Cunchas Casaprima, Os Cen pasos.
          <br />
          - Para los amantes del marisco: Marisquería Casa Caneiro (a 38 minutos
          en coche).
          <br />- Para los amantes de El señor de los anillos: Fogar de Breogán
          (a 1 hora y 20 minutos en coche).
        </>
      ),
    },
  },
  {
    id: "portal",
    name: "Portal",
    image: "house7.png",
    mobile: { x: 43, y: 63, width: 32, height: 14 },
    tablet: { x: 43, y: 57, width: 32, height: 14 },
    desktop: { x: 50, y: 59, width: 18, height: 28 },
    popupContent: {
      title: "🌀 Confirmación",
      subtitle: "¿Vienes a la boda?",
      body: (
        <>
          Por favor, confírmanos tu asistencia a cualquiera de los dos. <br />
          También dinos si tienes alguna alergia o restricción alimentaria para
          que el menú sea perfecto para ti.
          <br />
          <strong>¡Os esperamos!</strong>
          <br />
          <br />
          Y por último pero no menos importante, si quieres hacer alguna
          sugerencia musical para la fiesta, ¡será más que bienvenida! <br />
          <a
            href="https://open.spotify.com/playlist/10JNsziBQjrWOUSxe7yNFy?si=d8491db2984c408e&pt=28ae4a3bfe47ec773b1cb33f4a99ce4b"
            target="_blank"
            rel="noreferrer"
            className="popup__btn"
          >
            Ir a la playlist de Spotify
          </a>
        </>
      ),
    },
  },
];

export default houses;
