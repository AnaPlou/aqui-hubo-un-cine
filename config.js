var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    style: './style.json',
    // leave commented to use Mapbox Standard Style
    // accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    showMarkers: true,
    markerColor: '#7A1E1E',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '¡Aquí hubo un cine!',
    subtitle: 'Un recorrido por salas que marcaron la vida cultural de varias ciudades españolas',
    byline: 'Por Ana Plou',
    footer: 'Proyecto de visualización de datos sobre la desaparición de cines históricos en España. <br> Creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            description: 'Si hoy paseas por muchas ciudades españolas, todavía te podrás cruzar con los restos de algún antiguo cine. A veces es solo un rótulo que aguanta el tipo, una fachada reconocible o la silueta de un edificio que no encaja con lo de al lado. Su rastro sigue ahí. <br><br> Durante casi todo el siglo XX, el cine era el plan por excelencia. Esas grandes salas del centro eran el refugio para una primera cita, una tarde de lluvia o el estreno que paralizaba el barrio. Con los años, los proyectores se fueron apagando; cambiaron los hábitos y la forma de consumir historias. Este recorrido se detiene en algunos de esos cines que resisten por España: lugares que proyectaron mil vidas y que hoy, en silencio, cuentan una historia muy distinta.',
            location: {
                center: [-3.7, 40.4],
                zoom: 5,
                pitch: 0,
                bearing: 0
            }
        },
        {
            id: 'cine-avenida-madrid',
            alignment: 'right',
            title: 'Cine Avenida, Madrid',
            image: './assets/cine-avenida.png',
            description: '<strong>Periodo de actividad:</strong> 1928–2002<br><strong>Hoy...</strong> es una tienda UNIQLO.<br><br>En plena Gran Vía madrileña, el Cine Avenida fue durante décadas uno de los grandes templos del cine en la ciudad. Sus sesiones formaban parte del ritmo cotidiano de una avenida que llegó a concentrar buena parte de la vida cinematográfica de Madrid. Con el cambio de siglo, las pantallas se apagaron y el edificio dejó de funcionar como sala de proyección. Hoy el espacio está ocupado por una tienda de la marca UNIQLO, reflejo de cómo el comercio global ha ido sustituyendo a muchos antiguos cines urbanos.',
            location: {
                center: [-3.7050864488610618, 40.41996702855731],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cine-rex-barcelona',
            alignment: 'left',
            title: 'Cine Rex, Barcelona',
            image: './assets/cine-rex-barcelona.png',
            description: '<strong>Periodo de actividad:</strong> 1940–2010<br><strong>Hoy...</strong> está cerrado y en deterioro.<br><br>Durante décadas, el Cine Rex fue una de las salas más reconocibles de la Gran Via de Barcelona. Como muchos cines urbanos del siglo XX, formaba parte del paisaje cotidiano de la ciudad y de la memoria de varias generaciones. A comienzos del siglo XXI, el avance de los multicines y los cambios en el consumo audiovisual precipitaron su cierre. Hoy el edificio permanece vacío y deteriorándose lentamente.',
            location: {
                center: [2.154466234200926, 41.379635954153564],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cine-eliseo-zaragoza',
            alignment: 'right',
            title: 'Cine Eliseo, Zaragoza',
            image: './assets/cine-eliseo.png',
            description: '<strong>Periodo de actividad:</strong> 1944–2014<br><strong>Hoy...</strong> es un McDonald’s.<br><br>Durante años, el Cine Eliseo fue una de las salas más emblemáticas del centro de Zaragoza. Tras su cierre, el edificio permaneció abandonado hasta que fue adaptado para albergar un restaurante McDonald’s. Sin embargo, su valor patrimonial obligó a conservar gran parte de su arquitectura original. La fachada histórica y el antiguo rótulo de neón siguen presentes, mientras que el espacio donde antes estaban las butacas, coronadas por un gran adorno en el techo, es ahora la zona de mesas.',
            location: {
                center: [-0.8859228506792728, 41.64655063829437],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cine-rialto-valencia',
            alignment: 'left',
            title: 'Cine Rialto, Valencia',
            image: './assets/cine-rialto.png',
            description: '<strong>Periodo de actividad:</strong> 1939–1982<br><strong>Hoy...</strong> es la Filmoteca de la Generalitat Valenciana.<br><br>No todos los cines históricos desaparecieron para convertirse en garajes. El Rialto, una joya del Art Déco en plena Plaza del Ayuntamiento, es de los que tuvo suerte. Tras su cierre a mediados de los ochenta, la Generalitat lo rescató y lo rehabilitó por completo. Hoy no solo sigue proyectando cine gracias a la Filmoteca, sino que también funciona como teatro. Es de esos pocos lugares donde todavía puedes entrar a ver una película y sentir que el edificio respira como hace ochenta años.',
            location: {
                center: [-0.37627800610350637, 39.47096913419534],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gran-cinema-palma',
            alignment: 'right',
            title: 'Gran Cinema, Palma de Mallorca',
            image: './assets/gran-cinema.png',
            description: '<strong>Periodo de actividad:</strong> 1912–1988<br><strong>Hoy...</strong> es un Zara.<br><br>El Gran Cinema abrió sus puertas en 1912 en pleno Passeig del Born, dentro de un antiguo palacete del siglo XIX. Durante décadas fue uno de los espacios culturales más importantes de Palma, con una elegante sala donde se celebraban grandes estrenos. Tras su cierre en 1988, el edificio permaneció años sin actividad. Hoy alberga una tienda de Zara, aunque todavía conserva elementos arquitectónicos que recuerdan su pasado cinematográfico.',
            location: {
                center: [2.6462941474327613, 39.57043112808244],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cine-rex-murcia',
            alignment: 'left',
            title: 'Cine Rex, Murcia',
            image: './assets/cine-rex-murcia.png',
            description: '<strong>Periodo de actividad:</strong> 1914–2019<br><strong>Hoy...</strong> está cerrado.<br><br>El actual Cine Rex de Murcia tiene su origen en el Teatro Ortiz, inaugurado en 1914. Con el paso de los años el edificio se transformó en una gran sala de cine y adoptó su nombre definitivo en los años cuarenta. Durante décadas fue uno de los cines más importantes del centro de la ciudad y el último en resistir la competencia de los centros comerciales. Aunque cerró en 2019, su fachada y su interior siguen prácticamente intactos.',
            location: {
                center: [-1.1270597799869788, 37.98526130584333],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cine-paris-coruna',
            alignment: 'right',
            title: 'Cine París, A Coruña',
            image: './assets/cine-paris.png',
            description: '<strong>Periodo de actividad:</strong> 1908–1999<br><strong>Hoy...</strong> es un negocio de hostelería y ocio nocturno.<br><br>El Cine París abrió en 1908 en la Calle Real de A Coruña y fue uno de los primeros espacios dedicados al cine en Galicia. Durante casi todo el siglo XX fue un punto de encuentro cultural en el centro de la ciudad. Tras el cierre de la sala en 1999, el edificio pasó por distintos usos comerciales. Hoy funciona como local de hostelería y ocio nocturno.',
            location: {
                center: [-8.399247616513632, 43.37041106705667],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            alignment: 'left',
            title: 'Un paisaje que desaparece',
            description: 'Los grandes cines del centro fueron perdiendo terreno poco a poco. Primero llegaron las salas de los centros comerciales y, más tarde, el cambio en nuestra forma de ver películas desde casa. Muchos de esos edificios son hoy tiendas de ropa, gimnasios o locales que han sabido adaptarse; otros simplemente siguen cerrados a la espera de un nuevo uso. Aunque las pantallas ya no funcionen, estas fachadas siguen formando parte del paisaje de nuestras ciudades. Son el recordatorio de un hábito que cambió, pero que dejó su huella en el mapa urbano.',
            location: {
                center: [-3.7, 40.4],
                zoom: 5,
                pitch: 0,
                bearing: 0
            }
        }
    ]
};
