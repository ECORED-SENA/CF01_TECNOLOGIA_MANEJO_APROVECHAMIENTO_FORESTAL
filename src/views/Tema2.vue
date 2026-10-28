<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Captura y procesamiento de información geoespacial
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La obtención de datos geográficos para la gestión agroforestal se realiza mediante diferentes tecnologías de captura, entre las que se destacan la teledetección satelital y la fotogrametría aérea con vehículos aéreos no tripulados (VANT o drones). Estas fuentes proporcionan información con distintos niveles de resolución espacial, temporal y espectral, cuya selección depende del propósito del monitoreo (Lillesand et al., 2015).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 Los satélites de observación terrestre, como Sentinel-2 de la Agencia Espacial Europea y Landsat-9 de la NASA, permiten realizar seguimientos periódicos sobre superficies extensas. Por su parte, los VANT pueden operar a baja altura para generar ortofotomapas de alta resolución, útiles en actividades como el conteo de copas de árboles y la identificación de condiciones específicas en el territorio. 
          p.mb-0 Las principales características de las plataformas consideradas para la captura de información geoespacial se presentan a continuación:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Plataformas para la captura de información geoespacial
          .tabla-a(data-aos="zoom-in").mb-0
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tecnología / plataforma
                  th.ajuste-border-tabla.texto-left Resolución espacial
                  th.ajuste-border-tabla.texto-left Frecuencia temporal
                  th.texto-left Aplicación principal en agroforestería
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Satélite Sentinel-2
                  td.ajuste-border-tabla.texto-left 10–20 metros
                  td.ajuste-border-tabla.texto-left Cada 5 días
                  td.texto-left Monitoreo regional de cobertura forestal e índices de clorofila.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Satélite Landsat 8/9
                  td.ajuste-border-tabla.texto-left 30 metros; 100 metros en información térmica
                  td.ajuste-border-tabla.texto-left Cada 8–16 días
                  td.texto-left Análisis histórico del cambio de uso del suelo y temperatura superficial.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold VANT / dron con cámara RGB
                  td.ajuste-border-tabla.texto-left 1–5 centímetros
                  td.ajuste-border-tabla.texto-left A solicitud del usuario
                  td.texto-left Delimitación de predios, inventario forestal y modelos digitales de elevación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold VANT / dron multiespectral
                  td.ajuste-border-tabla.texto-left 2–8 centímetros
                  td.ajuste-border-tabla.texto-left A solicitud del usuario
                  td.texto-left Detección temprana de estrés hídrico y nutricional en parcelas específicas.
          Separador
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.1 Captura y procesamiento de información geoespacial
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-1.color-3(data-aos="fade-right")
                p.mb-0 La captura y procesamiento de información geoespacial comprende métodos y tecnologías destinados a recolectar datos asociados con una ubicación geográfica y transformarlos en productos como mapas, modelos tridimensionales e información útil para el análisis territorial. En los sistemas agroforestales, este proceso integra fuentes aéreas, satelitales y de campo.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 270px").m-auto
          p.mb-5 Las principales tecnologías empleadas para recopilar información del territorio agroforestal se relacionan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Drones y cámaras multiespectrales e hiperespectrales
                  p.mb-0 Permiten captar información en diferentes bandas del espectro, incluido el infrarrojo cercano. Estos datos contribuyen al análisis de variables relacionadas con la actividad de la vegetación, el estrés hídrico y la biomasa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sensores LiDAR
                  p.mb-0 Los sensores LiDAR, instalados en plataformas aéreas o terrestres, permiten obtener información relacionada con la altura de los árboles, la estructura de las copas, la densidad del follaje y el volumen de madera en pie. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Imágenes satelitales
                  p.mb-0 Las imágenes provenientes de plataformas como Sentinel, Planet y Landsat permiten realizar seguimiento de superficies extensas y analizar cambios estacionales, así como procesos de deforestación o reforestación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 GNSS/GPS de alta precisión
                  p.mb-0 Estas tecnologías se emplean en campo para delimitar parcelas, ubicar especies de interés forestal y georreferenciar puntos destinados al muestreo de suelo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La combinación de estas tecnologías permite obtener datos con diferentes niveles de cobertura y detalle, de acuerdo con las características del territorio y las necesidades del análisis agroforestal.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Procesamiento y análisis geoespacial en agroforestería
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p.mb-0 Una vez capturados los datos, los Sistemas de Información Geográfica (SIG) y otras herramientas de procesamiento permiten organizarlos y analizarlos para interpretar las relaciones entre los diferentes componentes de los sistemas agroforestales.
          p.mb-0 Los principales procesos asociados con el análisis de la información geoespacial se presentan a continuación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 460px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img9.png", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cálculo de índices de vegetación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los índices como NDVI, SAVI y NDRE permiten analizar características relacionadas con el vigor de la vegetación e identificar condiciones asociadas con deficiencias nutricionales o presencia de plagas.
            .row(titulo="Modelos digitales de elevación y superficie").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los modelos digitales de elevación y superficie permiten analizar el relieve del terreno para estudiar el flujo del agua, identificar zonas propensas a la erosión y apoyar la ubicación de elementos como barreras rompevientos o curvas de nivel.
            .row(titulo="Estimación de biomasa y captura de carbono").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La combinación de datos LiDAR y modelos alométricos permite estimar la biomasa aérea y la cantidad de carbono almacenada en los árboles que forman parte del sistema agroforestal. Esta estimación también puede apoyarse en metodologías e inventarios del Panel Intergubernamental sobre el Cambio Climático (IPCC) para el sector de Uso de la Tierra, Cambio de Uso de la Tierra y Silvicultura (UTCUTS/LULUCF) (IPCC, 2019).
            .row(titulo="Análisis de sombra y microclima").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis del porcentaje de cobertura del dosel permite determinar la cantidad de radiación solar que llega a los cultivos ubicados en estratos inferiores y apoyar el manejo de sistemas bajo sombra, como café o cacao.
              p.mb-3 El procesamiento de los datos geoespaciales genera información que contribuye a interpretar las condiciones físicas, productivas y ambientales de los sistemas agroforestales.
      p.mb-0 El procesamiento transforma los datos capturados en información que permite interpretar condiciones físicas, productivas y ambientales de los sistemas agroforestales.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Aplicaciones clave en agroforestería
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img10.png', alt='').m-auto
        .col-xl
          .caja-1.color-3(data-aos="fade-left").mb-3
            p.mb-0 La información geoespacial puede utilizarse en diferentes procesos asociados con la planificación, el manejo y el seguimiento de los sistemas agroforestales. Entre las principales aplicaciones planteadas en el insumo se encuentran el diseño de sistemas, la agricultura y silvicultura de precisión, el monitoreo de procesos de restauración y degradación, y la certificación ambiental.
          p.mb-0 Las principales aplicaciones de la información geoespacial en los sistemas agroforestales se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diseño de sistemas agroforestales
                  p.mb-0 La información espacial facilita la ubicación de cortinas rompevientos, cercas vivas y franjas amortiguadoras destinadas a favorecer la conservación del suelo y del agua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Agricultura y silvicultura de precisión
                  p.mb-0 Permite apoyar la aplicación localizada de fertilizantes y el manejo diferenciado del riego según las condiciones del suelo y los componentes vegetales presentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Monitoreo de restauración y degradación
                  p.mb-0 Contribuye al seguimiento de proyectos de reforestación productiva, procesos de control de la erosión y recuperación de suelos degradados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Certificación ambiental y huella de carbono
                  p.mb-0 La información geoespacial puede apoyar la documentación del cumplimiento de criterios de sostenibilidad y procesos relacionados con producción libre de deforestación y huella de carbono. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img15.png', alt='').m-auto
        .col-xl
          .caja-1.color-2(data-aos="fade-left").mb-3
            p.mb-0 Estas aplicaciones permiten vincular los datos geoespaciales con necesidades concretas de planificación, manejo, seguimiento y sostenibilidad de los sistemas agroforestales.
          p.mb-0 Se invita a reproducir el siguiente pódcast para profundizar en la aplicación de la información geoespacial en la toma de decisiones relacionadas con la planificación, el manejo y el seguimiento de sistemas agroforestales:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-3(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img16.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Del dato geoespacial a la decisión agroforestal&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img17.png" style="max-width: 510px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Tendencias futuras y tecnologías emergentes
      .caja-4(data-aos="zoom-in").mb-5
        p.mb-0 Las tecnologías geoespaciales aplicadas a la agroforestería avanzan hacia una mayor automatización, capacidad de procesamiento y disponibilidad de información. Entre las principales tendencias se encuentran la integración de inteligencia artificial, el uso de sensores conectados y el acceso a datos satelitales abiertos, que amplían las posibilidades de análisis y seguimiento de los sistemas agroforestales.
      p.mb-5 Las tecnologías que fortalecen estos procesos se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración con inteligencia artificial (GeoAI)
                  p.mb-0 La inteligencia artificial permite procesar grandes volúmenes de imágenes satelitales mediante redes neuronales y automatizar procesos de clasificación de coberturas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sensores de Internet de las Cosas (IoT)
                  p.mb-0 Las redes de sensores instaladas en campo pueden integrarse con las capas de los Sistemas de Información Geográfica (SIG) para disponer de información actualizada sobre diferentes variables del territorio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso a datos abiertos
                  p.mb-0 Las constelaciones satelitales de acceso abierto, como Sentinel del programa Copernicus de la Agencia Espacial Europea y Landsat de la NASA, facilitan la disponibilidad periódica de información para el análisis geoespacial.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
      .caja-4.color-3(data-aos="zoom-in").mb-5
        p.mb-0 La automatización, la alta resolución y la modelización predictiva también impulsan nuevas formas de caracterizar, simular y realizar seguimiento a los sistemas agroforestales.
      p.mb-5 Las principales líneas de desarrollo tecnológico se relacionan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Inteligencia artificial y aprendizaje profundo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Inteligencia artificial y aprendizaje profundo
              p La aplicación de la inteligencia artificial al análisis geoespacial se desarrolla mediante dos líneas principales:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Clasificación automatizada:] las redes neuronales convolucionales (CNN) permiten identificar especies de árboles individuales dentro de sistemas biodiversos a partir de imágenes satelitales de alta resolución.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Predicción de rendimiento:] los modelos predictivos integran datos climáticos, del suelo y geoespaciales para estimar la producción combinada de madera, frutos y cultivos.
        .py-3.py-md-4(titulo="LiDAR y sensores de nueva generación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 LiDAR y sensores de nueva generación
              p Las tecnologías de nueva generación aplicadas al análisis agroforestal comprenden los siguientes desarrollos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Estructura tridimensional con LiDAR:] los sensores LiDAR aerotransportados o instalados en drones permiten generar información sobre la arquitectura del dosel, la penetración de la luz y el volumen de madera.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Imágenes hiperespectrales:] permiten identificar condiciones asociadas con estrés hídrico, deficiencias nutricionales y presencia de plagas en etapas tempranas, diferenciando las necesidades de los componentes forestal y agrícola.
        .py-3.py-md-4(titulo="Gemelos digitales y simulación temporal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gemelos digitales y simulación temporal
              p La simulación temporal mediante gemelos digitales se desarrolla a partir del siguiente enfoque:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Réplicas virtuales:] los gemelos digitales (digital twins) permiten crear modelos tridimensionales e interactivos de sistemas agroforestales. Estos modelos pueden utilizarse para simular el crecimiento de los árboles en diferentes periodos y analizar el efecto de la sombra sobre los cultivos asociados.
        .py-3.py-md-4(titulo="Computación en la nube y monitoreo en tiempo real")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Computación en la nube y monitoreo en tiempo real
              p La computación en la nube y el monitoreo en tiempo real se articulan mediante las siguientes alternativas:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Plataformas de procesamiento:] herramientas como Google Earth Engine, Microsoft Planetary Computer y otras plataformas basadas en datos de Sentinel y Landsat permiten procesar series temporales extensas sin requerir software local de alta capacidad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Monitoreo de carbono para mercados verdes:] las plataformas geoespaciales automatizadas pueden apoyar el seguimiento de la captura de carbono y la biodiversidad, así como la generación de información asociada con la participación de los productores en mercados de bonos de carbono.
      p.mb-0 La integración de estas tecnologías amplía las posibilidades de captura, procesamiento, modelización y seguimiento de información geoespacial para apoyar la gestión de los sistemas agroforestales.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
