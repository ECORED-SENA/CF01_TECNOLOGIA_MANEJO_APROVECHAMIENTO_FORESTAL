<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas geoespaciales en la agroforestería',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conceptos, tecnologías, aplicaciones y procesos relacionados con el análisis geoespacial, la captura y procesamiento de información y los índices de vegetación en sistemas agroforestales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál descripción corresponde a un sistema agroforestal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Arreglo que integra componentes leñosos y no leñosos en un mismo espacio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modelo que separa cultivos y árboles en unidades productivas independientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Esquema que utiliza solo especies forestales para conservar la cobertura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sistema que reemplaza los cultivos por infraestructura de manejo territorial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tecnología permite organizar datos en capas temáticas y realizar análisis espaciales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los Sistemas Globales de Navegación por Satélite para ubicar coordenadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los Sistemas de Información Geográfica para analizar información espacial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cartografía digital para consultar mapas mediante aplicaciones móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La teledetección para captar información mediante sensores a distancia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué función cumplen principalmente los Sistemas Globales de Navegación por Satélite (GNSS)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesar imágenes satelitales para clasificar coberturas de los territorios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar mapas digitales para consultar información mediante la web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar coordenadas geográficas y posicionar elementos del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Analizar bandas espectrales para estimar condiciones de la vegetación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué campo de aplicación emplea información geoespacial para identificar zonas vulnerables a inundaciones, incendios o deslizamientos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Gestión ambiental para analizar biodiversidad y cambios de uso del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ordenamiento territorial para planificar infraestructura y redes de transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Agricultura de precisión para gestionar insumos y uso eficiente del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Prevención y gestión de riesgos para apoyar la respuesta ante emergencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué plataforma ofrece resolución espacial de 10 a 20 metros y una frecuencia aproximada de cinco días?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Satélite Sentinel-2 para monitoreo periódico de la cobertura forestal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Satélite Landsat 8/9 para analizar cambios históricos del uso del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dron con cámara RGB para delimitar predios e inventariar áreas forestales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dron multiespectral para detectar estrés hídrico en parcelas agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué plataforma se caracteriza por una resolución de 1 a 5 centímetros y puede apoyar la delimitación de predios?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Satélite Sentinel-2 empleado en el monitoreo periódico de áreas extensas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'VANT o dron con cámara RGB empleado para levantamientos de alta resolución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Satélite Landsat 8/9 utilizado para analizar cambios históricos del territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'VANT multiespectral utilizado para detectar estrés hídrico y nutricional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué información pueden obtener los sensores LiDAR en sistemas agroforestales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El color de los cultivos, la textura del suelo y la temperatura ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El caudal de los ríos, la humedad atmosférica y la velocidad del viento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La altura de árboles, estructura de copas, densidad del follaje y madera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La ubicación de parcelas, especies forestales y puntos de muestreo del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué proceso combina datos LiDAR y modelos alométricos dentro del análisis geoespacial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cálculo de índices espectrales para reconocer condiciones de los cultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El análisis del relieve para identificar erosión y estudiar el flujo del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El análisis de cobertura para determinar la radiación que llega a los cultivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estimación de biomasa aérea y del carbono almacenado en los árboles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué aplicación de la información geoespacial facilita ubicar cortinas rompevientos, cercas vivas y franjas amortiguadoras?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El diseño de sistemas agroforestales para favorecer la conservación de recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La agricultura de precisión para aplicar fertilizantes de manera localizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El monitoreo de restauración para seguir la recuperación de suelos degradados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La certificación ambiental para documentar criterios asociados a sostenibilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tendencia tecnológica permite automatizar la clasificación de coberturas mediante redes neuronales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El acceso a datos abiertos mediante constelaciones satelitales de libre consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La integración con inteligencia artificial aplicada al análisis geoespacial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El uso de sensores IoT conectados con capas de información territorial en SIG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La simulación con gemelos digitales para representar sistemas tridimensionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué herramienta permite introducir manualmente fórmulas entre bandas espectrales para calcular índices de vegetación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El módulo i.vi de GRASS GIS para ejecutar diferentes índices de vegetación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El algoritmo Vegetation Index de SAGA GIS para procesar información ráster.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La Calculadora ráster de QGIS para operar directamente con bandas espectrales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El algoritmo Radiometric Indices de OTB para procesar imágenes de teledetección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué comportamiento espectral caracteriza a las hojas con actividad fotosintética en el cálculo del NDVI?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Absorben el infrarrojo cercano y reflejan una proporción elevada de la banda roja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reflejan por igual la banda roja y el infrarrojo cercano durante el monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Absorben principalmente la banda verde y reflejan radiación de onda corta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Absorben radiación en banda roja y reflejan más radiación en infrarrojo cercano.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál expresión corresponde al cálculo del Índice de Vegetación de Diferencia Normalizada (NDVI)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NDVI = (NIR - ROJO) / (NIR + ROJO).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'NDVI = (NIR + ROJO) / (NIR - ROJO).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'NDVI = (NIR - VERDE) / (NIR + VERDE).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'NDVI = (NIR - SWIR) / (NIR + SWIR).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué interpretación general corresponde a valores de NDVI entre 0,6 y 0,9?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Superficies de agua, nieve o estructuras con respuesta espectral reducida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dosel denso o árboles con mayor vigor dentro de la cobertura vegetal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Suelo descubierto con baja presencia de cobertura vegetal en el territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Vegetación moderada o pastos con densidad intermedia en la superficie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué índice incorpora las bandas del infrarrojo cercano, rojo y azul para reducir determinados efectos atmosféricos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Índice de Clorofila Verde (GCI), orientado a estimar la clorofila presente en hojas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Índice de Calcinación Normalizado (NBR), orientado al análisis de zonas incendiadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Índice de Vegetación Mejorado (EVI), útil en coberturas con biomasa vegetal densa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Índice SAVI, útil para reducir la influencia del suelo en coberturas vegetales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué índice incorpora un factor de ajuste L para disminuir la influencia del suelo en el análisis espectral?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Índice ARVI, que emplea la banda azul para corregir efectos atmosféricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Índice GCI, que utiliza la banda verde para estimar contenido de clorofila.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Índice SIPI, que analiza la relación entre carotenoides y clorofila vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Índice SAVI, que ajusta la respuesta espectral cuando existe suelo expuesto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué índice emplea información de la banda azul para corregir efectos de dispersión atmosférica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El ARVI, orientado a condiciones con polvo, humo, niebla o contaminación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El SAVI, orientado a superficies con vegetación escasa o suelo descubierto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El GCI, orientado a estimar variaciones en el contenido de clorofila foliar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El NBR, orientado a identificar zonas afectadas por incendios forestales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué índice permite estimar el contenido de clorofila de las hojas mediante información del infrarrojo cercano y la banda verde?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El SAVI, que reduce la influencia del suelo mediante un factor de ajuste L.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El GCI, que aporta información sobre clorofila y vigor de la vegetación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El ARVI, que corrige efectos atmosféricos mediante información de banda azul.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El NBR, que compara infrarrojo cercano y onda corta para analizar incendios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué índice analiza la relación entre carotenoides y clorofila en coberturas con variaciones en la estructura del dosel?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El EVI, que mejora el monitoreo de áreas con alta densidad de biomasa vegetal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El GCI, que estima el contenido de clorofila a partir de la banda verde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El SIPI, que apoya el análisis de pigmentos y condiciones de estrés vegetal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El SAVI, que disminuye la influencia del suelo en superficies poco cubiertas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué índice utiliza las bandas NIR y SWIR para identificar áreas afectadas por incendios y analizar vegetación quemada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El GCI, empleado para estimar clorofila y vigor en coberturas vegetales densas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El SIPI, empleado para analizar carotenoides y clorofila en la estructura del dosel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El EVI, empleado para reducir efectos atmosféricos en coberturas de biomasa densa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El NBR, empleado para identificar zonas quemadas y seguir la recuperación vegetal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
