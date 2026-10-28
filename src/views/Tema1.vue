<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de las tecnologías geoespaciales en el ámbito agroforestal
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis geoespacial integra herramientas informáticas y sensores para capturar, almacenar, procesar, analizar y representar datos asociados con datos geográficos sobre la superficie terrestre. En los sistemas agroforestales, estas tecnologías permiten caracterizar condiciones del territorio, reconocer su variabilidad espacial y temporal y generar información que apoya la toma de decisiones técnicas (Chuvieco, 2019).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p.mb-0 La integración de los Sistemas de Información Geográfica (SIG), la teledetección y los Sistemas Globales de Navegación por Satélite (GNSS) permite transformar datos obtenidos del territorio en información georreferenciada útil para la planificación y el manejo de los sistemas agroforestales. Su aplicación contribuye al análisis de las condiciones ambientales y productivas del territorio.
          p.mb-0 La relación entre el territorio agroforestal y las tecnologías geoespaciales se organiza mediante los siguientes elementos:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img4.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Territorio agroforestal
                    p.mb-0.text-center Integra componentes leñosos y no leñosos dentro de un mismo espacio geográfico, donde se establecen interacciones ecológicas y productivas (agrícola y ganadería) (Farfán Valencia, 2014).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Información geoespacial
                    p.mb-0.text-center Relaciona datos con una ubicación determinada y permite caracterizar condiciones y cambios del territorio.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Tecnologías geoespaciales
                    p.mb-0.text-center Facilitan la adquisición, almacenamiento, procesamiento, análisis y representación de información georreferenciada (Chuvieco, 2019).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Toma de decisiones técnicas
                    p.mb-0.text-center La información obtenida contribuye al análisis del uso del suelo, el dosel vegetal y otras condiciones relevantes para el manejo de los sistemas agroforestales.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Sistemas agroforestales y análisis geoespacial
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img8.png', alt='').m-auto
        .col-xl
          .caja-1.color-2(data-aos="fade-left").mb-3
            p.mb-0 Los sistemas agroforestales integran componentes leñosos, como árboles o arbustos, con componentes no leñosos, como cultivos o pastos, dentro de un mismo espacio geográfico. Esta interacción configura unidades productivas con características espaciales que pueden analizarse mediante información georreferenciada para apoyar su planificación y manejo (Farfán Valencia, 2014).
          p.mb-0 Los conceptos que fundamentan el análisis del territorio agroforestal se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
                  h4.text-center Sistema agroforestal
                  .caja-2_p
                    p.mb-0.text-center Arreglo productivo en el que interactúan componentes leñosos, como árboles o arbustos, y componentes no leñosos, como cultivos o pastos, dentro de un mismo espacio geográfico, con el propósito de generar sinergias ecológicas y económicas (Farfán Valencia, 2014).
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
                  h4.text-center Análisis geoespacial
                  .caja-2_p
                    p.mb-0.text-center Integra herramientas informáticas y sensores para capturar, almacenar, procesar, analizar y representar datos referenciados geográficamente. En los sistemas agroforestales, contribuye al análisis de la heterogeneidad del dosel vegetal, los cambios en el uso del suelo y otras condiciones del territorio (Chuvieco, 2019).
          p.mb-0 La relación entre los sistemas agroforestales y el análisis geoespacial permite convertir datos asociados con el territorio en información útil para apoyar la toma de decisiones técnicas.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 Tecnologías geoespaciales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 Las tecnologías geoespaciales (TGE) comprenden herramientas de hardware y software empleadas y recursos tecnológicos empleados para adquirir, almacenar, analizar y presentar información georreferenciada. En el ámbito agroforestal donde interactúan árboles, cultivos agrícolas y/o ganado en una misma unidad de manejo estas tecnologías permiten tomar decisiones basadas en la variabilidad espacial y temporal.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 270px").m-auto
      p.mb-5 Las principales tecnologías utilizadas para gestionar información georreferenciada se relacionan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Sistemas de Información Geográfica (SIG / GIS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas de Información Geográfica (SIG / GIS)
              p.mb-0 Los Sistemas de Información Geográfica (SIG) permiten organizar datos en capas temáticas, desarrollar análisis espaciales y generar representaciones cartográficas. Entre las plataformas empleadas para estas funciones se encuentran QGIS y ArcGIS.
        .py-3.py-md-4(titulo="Teledetección (sensoramiento remoto)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Teledetección (sensoramiento remoto)
              p.mb-0 La teledetección permite capturar información de la superficie terrestre a distancia mediante sensores instalados en satélites, aeronaves o drones. Entre los datos obtenidos pueden encontrarse imágenes multiespectrales e información procedente de tecnologías como LiDAR.
        .py-3.py-md-4(titulo="Sistemas Globales de Navegación por Satélite (GNSS / GPS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas Globales de Navegación por Satélite (GNSS / GPS)
              p.mb-0 Los Sistemas Globales de Navegación por Satélite (GNSS) permiten determinar coordenadas geográficas, como latitud, longitud y altitud, y facilitan el posicionamiento de elementos ubicados sobre el territorio.
        .py-3.py-md-4(titulo="Cartografía digital y visualización web (web mapping)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cartografía digital y visualización web (web mapping)
              p.mb-0 La cartografía digital comprende plataformas y servicios que permiten representar y consultar datos espaciales mediante entornos web o aplicaciones móviles, como mapas digitales y visores territoriales institucionales.
      p.mb-0 La integración de estas tecnologías permite gestionar diferentes tipos de información espacial y generar insumos que apoyan el conocimiento, la planificación y el análisis del territorio.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Aplicaciones de las tecnologías geoespaciales en el ámbito agroforestal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 450px").m-auto
        .col-xl
          .caja-1.color-2(data-aos="fade-left").mb-3
            p.mb-0 Las tecnologías geoespaciales pueden aplicarse en diferentes contextos en los que se requiere localizar, representar y analizar información asociada con el territorio. Su utilización facilita el seguimiento de cambios espaciales y aporta información para procesos de planificación, gestión y toma de decisiones.
          p.mb-0 Los principales campos de aplicación de estas tecnologías se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión ambiental
                  p.mb-0 Permite apoyar el monitoreo de la deforestación, la pérdida de biodiversidad, los cambios en el uso del suelo y otros procesos asociados con el seguimiento ambiental y el cambio climático. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ordenamiento territorial y urbanismo
                  p.mb-0 Contribuye a procesos de planificación de infraestructura, gestión catastral y diseño de redes de transporte público mediante el uso de información espacial relacionada con la organización del territorio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención y gestión de riesgos
                  p.mb-0 Facilita la identificación y representación de zonas vulnerables a fenómenos como inundaciones, incendios forestales o deslizamientos, como apoyo a los procesos de prevención y respuesta ante emergencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Agricultura de precisión
                  p.mb-0 Permite apoyar la gestión de insumos, el análisis del estado de los cultivos y el manejo eficiente del agua mediante información asociada con las condiciones espaciales de las áreas productivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estos campos evidencian la diversidad de usos de las tecnologías geoespaciales y establecen una base para comprender posteriormente los procesos de captura, procesamiento y análisis de información geoespacial.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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
