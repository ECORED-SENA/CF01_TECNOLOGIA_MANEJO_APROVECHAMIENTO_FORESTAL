export default {
  global: {
    Name: 'Aplicación de técnicas geoespaciales en la agroforestería',
    Description:
      'La aplicación de técnicas geoespaciales en la agroforestería integra imágenes satelitales, sistemas de información geográfica (SIG) y drones para monitorear el uso del suelo, optimizar el diseño parcelario, evaluar el estado de la vegetación y estimar la captura de carbono. Estas herramientas apoyan la gestión del territorio agroforestal, la productividad agrícola y la conservación de los ecosistemas forestales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de las tecnologías geoespaciales en el ámbito agroforestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas agroforestales y análisis geoespacial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tecnologías geoespaciales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Aplicaciones de las tecnologías geoespaciales en el ámbito agroforestal',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Captura y procesamiento de información geoespacial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Captura y procesamiento de información geoespacial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procesamiento y análisis geoespacial en agroforestería',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicaciones clave en agroforestería',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tendencias futuras y tecnologías emergentes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Índices de vegetación y monitoreo del dosel agroforestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Aplicación de los índices de vegetación en el monitoreo del dosel',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Índices de vegetación complementarios al NDVI',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas para el cálculo de índices de vegetación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agroforestería',
      significado:
        'sistema productivo donde interactúan intencionalmente especies leñosas perennes con cultivos agrícolas y/o ganado en la misma unidad de tierra',
    },
    {
      termino: 'ARVI',
      significado:
        'índice de vegetación resistente a la atmósfera que corrige los efectos de dispersión generados por aerosoles o contaminación.',
    },
    {
      termino: 'Biomasa',
      significado:
        'cantidad total de materia viva presente en un área determinada, evaluada en agroforestería para estimar la captura de carbono',
    },
    {
      termino: 'Dosel',
      significado:
        'cubierta superior formada por las copas de los árboles en un sistema agroforestal o ecosistema forestal',
    },
    {
      termino: 'EVI',
      significado:
        'índice de vegetación mejorado diseñado para optimizar la señal en zonas con alta densidad de biomasa y follaje denso.',
    },
    {
      termino: 'GNSS',
      significado:
        'sistema global de navegación por satélite utilizado para determinar coordenadas geográficas de precisión en campo.',
    },
    {
      termino: 'GREENWASHING',
      significado:
        'también conocido como lavado verde, ecoblanqueo o ecopostureo es una práctica de marketing engañosa en la que una empresa utiliza la publicidad y la imagen corporativa para aparentar un compromiso con la sostenibilidad y el medio ambiente que sus acciones reales no respaldan.',
    },
    {
      termino: 'LiDAR',
      significado:
        'tecnología de teledetección mediante pulsos de luz láser que permite medir alturas de dosel y estructuras 3D del relieve.',
    },
    {
      termino: 'NBR',
      significado:
        'índice espectral utilizado para identificar zonas afectadas por incendios y evaluar la severidad de las quemas.',
    },
    {
      termino: 'NDVI',
      significado:
        'índice de vegetación de diferencia normalizada que mide la presencia y vigor de la vegetación verde mediante bandas del visible e infrarrojo.',
    },
    {
      termino: 'SAVI',
      significado:
        'índice de vegetación ajustado al suelo que minimiza la influencia del brillo y color del suelo expuesto.',
    },
    {
      termino: 'SIG',
      significado:
        'plataforma de software encargada de capturar, almacenar, analizar y representar datos espaciales georreferenciados.',
    },
    {
      termino: 'SIPI',
      significado:
        'índice de pigmentación sensible al estrés vegetal mediante la estimación de la relación entre carotenoides y clorofila.',
    },
    {
      termino: 'Teledetección',
      significado:
        'técnica que permite obtener información de la superficie terrestre a distancia mediante sensores en satélites o drones.',
    },
    {
      termino: 'VANT',
      significado:
        'vehículo aéreo no tripulado (dron) utilizado para adquirir fotogrametría aérea de alta resolución espectral y espacial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, D. (2020, 30 de julio). Los 6 índices de vegetación para completar el NDVI. MappingGIS.',
      link: 'https://mappinggis.com/2020/07/los-6-indices-de-vegetacion-para-completar-el-ndvi/',
    },
    {
      referencia:
        'Chuvieco, E. (2019). Teledetección ambiental: La observación de la Tierra desde el espacio. Digital Reasons.',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=767633',
    },
    {
      referencia:
        'Farfán Valencia, F. F. (2014). Agroforestería y sistemas agroforestales con café. Cenicafé.',
      link: 'https://doi.org/10.38141/cenbook-0081',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2018). Zonificación agroecológica: Guía general. FAO.',
      link: '',
    },
    {
      referencia:
        'Iberdrola. (s. f.). Greenwashing: ¿qué es y cómo detectarlo? Recuperado el 24 de septiembre de 2026, de',
      link: 'https://www.iberdrola.com/sostenibilidad/greenwashing',
    },
    {
      referencia:
        'Intergovernmental Panel on Climate Change. (2019). 2019 refinement to the 2006 IPCC guidelines for national greenhouse gas inventories: Volume 4. Agriculture, forestry and other land use.',
      link: 'https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html',
    },
    {
      referencia:
        'Lillesand, T. M., Kiefer, R. W., & Chipman, J. W. (2015). Remote sensing and image interpretation (7th ed.). Wiley.',
      link: 'https://books.google.com/books?id=AFHDCAAAQBAJ',
    },
    {
      referencia:
        'Popescu, S. C., & Wynne, R. H. (2004). Seeing the trees in the forest: Using lidar and multispectral data fusion with local filtering and variable window size for estimating tree height. Photogrammetric Engineering & Remote Sensing, 70(5), 589–604.',
      link: 'https://doi.org/10.14358/PERS.70.5.589',
    },
    {
      referencia:
        'Rouse, J. W., Jr., Haas, R. H., Schell, J. A., & Deering, D. W. (1974). Monitoring vegetation systems in the Great Plains with ERTS. In Third Earth Resources Technology Satellite-1 Symposium (Vol. 1, pp. 309–317). National Aeronautics and Space Administration.',
      link: 'https://ntrs.nasa.gov/citations/19740022614',
    },
    {
      referencia:
        'Sergieieva, K. (2025, 25 de septiembre). Índices de vegetación en la agricultura digital. EOS Data Analytics.',
      link: 'https://eos.com/es/blog/indices-de-vegetacion/',
    },
    {
      referencia:
        'Sharma, P., Bhardwaj, D. R., Singh, M. K., Nigam, R., Pala, N. A., Kumar, A., Verma, K., Kumar, D., & Thakur, P. (2023). Geospatial technology in agroforestry: Status, prospects, and constraints. Environmental Science and Pollution Research, 30(55), 116459–116487.',
      link: 'https://doi.org/10.1007/s11356-022-20305-y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
