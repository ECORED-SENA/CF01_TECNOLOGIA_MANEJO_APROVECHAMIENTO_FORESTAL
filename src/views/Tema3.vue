<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Índices de vegetación y monitoreo del dosel agroforestal
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-5_p
            p.mb-0 Los índices de vegetación son herramientas empleadas para medir, analizar y monitorear el estado, la densidad y la estructura del dosel en sistemas agroforestales mediante teledetección. Al combinar diferentes bandas espectrales, como el visible y el infrarrojo cercano, permiten obtener información sobre la actividad fotosintética y apoyar el análisis de coberturas donde interactúan árboles, cultivos y suelo (EOS Data Analytics, s. f.).
      p.mb-0 El análisis cuantitativo de variables como la biomasa y el vigor de la vegetación puede realizarse mediante índices espectrales. Entre ellos, el Índice de Vegetación de Diferencia Normalizada (NDVI) es ampliamente utilizado para diferenciar coberturas vegetales densas y vigorosas de superficies con suelo expuesto o vegetación sometida a condiciones de estrés (Rouse et al., 1974).
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Aplicación de los índices de vegetación en el monitoreo del dosel
      .caja-4.color-2(data-aos="zoom-in").mb-5
        p.mb-0 La integración de índices de vegetación con datos obtenidos mediante imágenes satelitales amplía las posibilidades de las soluciones digitales aplicadas a la agricultura. Estas herramientas permiten incorporar diferentes fuentes de información, realizar análisis sobre áreas extensas y facilitar el seguimiento remoto de las condiciones de la vegetación.
      p.mb-5 Los principales aportes de los índices de vegetación y de las imágenes satelitales a las soluciones digitales se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Capacidad de análisis
                  p.mb-0 La incorporación de índices de vegetación permite ampliar las posibilidades de análisis de las aplicaciones agrícolas y generar información adicional sobre las condiciones de la cobertura vegetal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración de fuentes de información
                  p.mb-0 Las soluciones digitales pueden reunir diferentes fuentes de imágenes en un mismo entorno, lo que facilita el acceso y procesamiento de información para el análisis de la vegetación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cobertura territorial
                  p.mb-0 Las imágenes satelitales permiten analizar superficies más extensas que las obtenidas mediante algunos sistemas de captura aérea y facilitan el seguimiento periódico de las áreas productivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Optimización de recursos
                  p.mb-0 El uso de información satelital puede reducir la necesidad de realizar vuelos frecuentes con drones y disminuir los recursos destinados al procesamiento, interpretación e inspección completa del terreno.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguimiento focalizado
                  p.mb-0 El análisis remoto permite identificar zonas que requieren mayor atención, de manera que las verificaciones en campo pueden concentrarse en los sectores donde se detecten cambios o condiciones particulares.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 Las imágenes satelitales también permiten ampliar la disponibilidad de información para los sistemas de análisis agrícola y acceder a datos con mayor frecuencia, lo que contribuye a optimizar tiempo y recursos durante el seguimiento de la vegetación.
          p.mb-0 En los sistemas agroforestales, el monitoreo del dosel permite analizar diferentes variables relacionadas con la estructura y las condiciones de la vegetación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img7.png', alt='').m-auto
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Intercepción de luz y dinámica de sombra")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Intercepción de luz y dinámica de sombra
              p.mb-0 El análisis de la cobertura vegetal permite estudiar la cantidad de luz que reciben los cultivos ubicados bajo el estrato arbóreo. En sistemas agroforestales como café o cacao bajo sombra, esta información puede apoyar la programación de podas reguladoras.
        .py-3.py-md-4(titulo="Índice de área foliar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Índice de área foliar
              p.mb-0 El Índice de Área Foliar (LAI) representa la cantidad de superficie foliar presente por unidad de superficie del suelo y permite obtener información relacionada con la densidad del dosel forestal.
        .py-3.py-md-4(titulo="Estrés hídrico y nutricional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estrés hídrico y nutricional
              p.mb-0 El procesamiento de imágenes multiespectrales o térmicas permite identificar variaciones en la respuesta espectral de la vegetación relacionadas con condiciones de estrés hídrico o nutricional.
        .py-3.py-md-4(titulo="Monitoreo multitemporal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Monitoreo multitemporal
              p.mb-0 La comparación de imágenes adquiridas en diferentes momentos permite analizar cambios en las copas de los árboles entre periodos secos y lluviosos, así como realizar seguimiento a la respuesta de la vegetación frente a diferentes condiciones ambientales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t3/img27.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Índice de vegetación de diferencia normalizada (NDVI)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-4(data-aos="fade-right")
            p El Índice de Vegetación de Diferencia Normalizada (NDVI) utiliza el comportamiento espectral de la vegetación para diferenciar distintas condiciones de cobertura. Las hojas con actividad fotosintética absorben radiación en la banda roja y reflejan una proporción elevada de radiación en el infrarrojo cercano (Rouse et al., 1974).
            p Su cálculo se expresa mediante la siguiente fórmula:
            .caja-6.mb-3(data-aos="fade-right")   
              h5.mb-0.text-center NDVI = (NIR – ROJO) / (NIR + ROJO)
            p.mb-0 Los valores obtenidos se encuentran entre −1 y +1. Los valores positivos elevados se relacionan con coberturas vegetales más densas, mientras que los valores menores corresponden a coberturas vegetales reducidas u otras superficies.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img12.png', alt='').m-auto
      p.mb-5 La interpretación general de los valores obtenidos mediante el NDVI se presenta a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Interpretación general de los valores del NDVI
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Rango de valores
                      th.texto-left Interpretación general
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold −1,0 a 0,1
                      td.texto-left Agua, nieve o estructuras.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 0,2 a 0,3
                      td.texto-left Suelo descubierto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 0,4 a 0,5
                      td.texto-left Vegetación moderada o pastos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 0,6 a 0,9
                      td.texto-left Dosel denso o árboles con mayor vigor.
          p.mb-0 En los sistemas agroforestales, la interpretación del NDVI aporta información sobre las características de la cobertura vegetal y puede apoyar el análisis del dosel y de las condiciones de sombra sobre los cultivos asociados.
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Índices de vegetación complementarios al NDVI
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img13.png')})` }")
            .bloque-texto-g__texto.p-4
              p La vegetación desempeña un papel relevante en el mantenimiento de recursos como el suelo, la fauna y el paisaje. Mediante el análisis multitemporal de imágenes satelitales es posible realizar seguimiento a la evolución de las comunidades vegetales y los cultivos a través del tiempo.
              br
              br
              p Los índices de vegetación se calculan mediante operaciones entre diferentes bandas espectrales y permiten resaltar las características de la cobertura vegetal, al tiempo que reducen la influencia de componentes como el suelo o las condiciones de iluminación. Los resultados pueden aportar información relacionada con la densidad de la vegetación, el índice de área foliar y la actividad clorofílica. Debido a que cada índice presenta características y limitaciones particulares, pueden utilizarse de manera complementaria al NDVI para ampliar el análisis de la vegetación (Alonso, 2020).
      p.mb-5 Los principales índices que complementan el análisis del NDVI se presentan a continuación:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Vegetación Mejorado (EVI) 
                  p El Índice de Vegetación Mejorado (EVI) incorpora las bandas del infrarrojo cercano, rojo y azul para reducir la influencia de determinados efectos atmosféricos y facilitar el monitoreo de áreas con alta densidad de biomasa.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center EVI = G × (NIR – ROJO) / (NIR + C1 × ROJO – C2 × AZUL + L)
                  p.mb-0 Este índice resulta útil para analizar áreas con cantidades elevadas de clorofila, como coberturas vegetales densas (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Vegetación Ajustado al Suelo (SAVI)
                  p El Índice de Vegetación Ajustado al Suelo (SAVI) permite disminuir la influencia del suelo sobre los resultados del análisis espectral. Para ello, incorpora un factor de ajuste denominado L.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center SAVI = [(IRC – R) / (IRC + R + L)] × (1 + L)
                  p.mb-0 Este índice puede aplicarse en áreas con vegetación escasa, cultivos jóvenes o superficies donde existe una proporción importante de suelo expuesto (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Vegetación Resistente a la Atmósfera (ARVI)
                  p El Índice de Vegetación Resistente a la Atmósfera (ARVI) incorpora información de la banda azul para corregir los efectos de dispersión atmosférica que pueden influir sobre la reflectancia registrada en la banda roja.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center ARVI = [NIR – (2 × ROJO) + AZUL] / [NIR + (2 × ROJO) + AZUL
                  p.mb-0 Su utilización se orienta especialmente a condiciones con presencia de aerosoles atmosféricos, como polvo, humo, niebla o contaminación del aire (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Clorofila Verde (GCI) 
                  p El Índice de Clorofila Verde (GCI) permite estimar el contenido de clorofila de las hojas. Las variaciones de este pigmento proporcionan información relacionada con el estado fisiológico y el vigor de la vegetación.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center GCI = (NIR / GREEN) – 1
                  p.mb-0 Este índice puede emplearse para realizar seguimiento a efectos relacionados con la estacionalidad, el estrés ambiental y las condiciones de la vegetación (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Pigmentación Insensible a la Estructura (SIPI) 
                  p El Índice de Pigmentación Insensible a la Estructura (SIPI) permite analizar la relación entre carotenoides y clorofila en coberturas que presentan variaciones en la estructura del dosel.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center SIPI = (NIR – BLUE) / (NIR – ROJO)
                  p.mb-0 Este índice puede utilizarse para monitorear condiciones de la vegetación en áreas con alta variabilidad estructural del dosel o del índice de área foliar, así como para apoyar la identificación temprana de condiciones asociadas con estrés vegetal (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice de Calcinación Normalizado (NBR) 
                  p El Índice de Calcinación Normalizado (NBR) utiliza las bandas del infrarrojo cercano (NIR) y del infrarrojo de onda corta (SWIR) para identificar áreas afectadas por incendios y analizar cambios relacionados con la vegetación quemada.
                  p Su fórmula de cálculo es:
                  .caja-6.color-2.mb-3(data-aos="fade-right")   
                    h5.mb-0.text-center NBR = (NIR – SWIR) / (NIR + SWIR)
                  p.mb-0 En agricultura y silvicultura, puede utilizarse para identificar áreas afectadas por incendios, analizar la severidad de las zonas quemadas y realizar seguimiento a la recuperación de la vegetación (Alonso, 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diferencia del Índice de Calcinación Normalizado (dNBR)
                  p.mb-0 El dNBR permite comparar imágenes obtenidas antes y después de un incendio para analizar los cambios asociados con la severidad del área afectada. Para una valoración más precisa, los resultados pueden contrastarse con mediciones realizadas in situ. Asimismo, el cálculo de NBR y dNBR en imágenes adquiridas varios meses después permite realizar seguimiento a la recuperación de la vegetación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Herramientas para el cálculo de índices de vegetación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img21.png', alt='').m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 El cálculo de índices de vegetación puede realizarse mediante herramientas de procesamiento geoespacial que incorporan algoritmos específicos o permiten efectuar operaciones entre bandas espectrales. Estas alternativas facilitan el procesamiento de imágenes y la obtención de índices como NDVI, EVI, SAVI, ARVI y NBR (Alonso, 2020).
          p.mb-0 Las principales herramientas empleadas para el cálculo de índices de vegetación se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Geographic Resources Analysis Support System (GRASS GIS) ")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Geographic Resources Analysis Support System (GRASS GIS) 
              p GRASS GIS dispone del módulo i.vi, mediante el cual pueden calcularse diferentes índices de vegetación.
              p.mb-0 Los índices disponibles mediante este módulo incluyen, entre otros, ARVI, DVI, EVI, EVI2, GVI, GARI, GEMI, IPVI, MSAVI, MSAVI2, NDVI, NDWI, PVI, SAVI, SR, VARI y WDVI (Alonso, 2020).
        .py-3.py-md-4(titulo="System for Automated Geoscientific Analyses (SAGA GIS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 System for Automated Geoscientific Analyses (SAGA GIS)
              p.mb-0 SAGA GIS incorpora herramientas destinadas al procesamiento de información ráster y dispone del algoritmo #[b Vegetation Index] para el cálculo de índices relacionados con la cobertura vegetal (Alonso, 2020).
        .py-3.py-md-4(titulo="Orfeo <i>ToolBox</i> (OTB)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 1.
                span Algoritmo RadiometricIndices de Orfeo ToolBox integrado en QGIS 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t3/img24.png', alt='Captura de pantalla de la integración de Orfeo ToolBox (OTB) en QGIS. En el panel de herramientas se encuentra seleccionada la opción RadiometricIndices, utilizada para el cálculo de índices espectrales a partir de imágenes de teledetección.').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Orfeo #[i ToolBox] (OTB)
              p.mb-0 Orfeo #[i ToolBox] (OTB), mediante su integración con QGIS, permite realizar cálculos de índices espectrales a través del algoritmo Radiometric Indices, como parte del procesamiento de imágenes de teledetección (Alonso, 2020).
        .py-3.py-md-4(titulo="QGIS")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 2.
                span Calculadora de Bandas del Semi-Automatic Classification Plugin en QGIS
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t3/img25.png', alt='Captura de pantalla del Semi-Automatic Classification Plugin (SCP) en QGIS. Se presenta la Calculadora de Bandas con diferentes bandas espectrales cargadas y una expresión para el cálculo del índice EVI.').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 QGIS
              p QGIS permite calcular índices de vegetación mediante la #[b Calculadora ráster], en la que pueden introducirse manualmente las fórmulas correspondientes a las bandas espectrales.
              p.mb-0 También puede utilizarse el complemento #[b Semi-Automatic Classification Plugin (SCP)], cuya calculadora de bandas permite obtener índices como NDVI, EVI y NBR (Alonso, 2020).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 La selección de la herramienta depende del tipo de información disponible, el índice que se requiere calcular y las características del procesamiento geoespacial que se vaya a desarrollar.
          p.mb-0 Se invita a reproducir el siguiente video para profundizar en el cálculo de índices de vegetación mediante herramientas geoespaciales y reconocer la relación entre las bandas espectrales, el procesamiento y la generación de información sobre la cobertura vegetal:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img26.png', alt='').m-auto
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Del dato satelital al índice de vegetación: herramientas para su cálculo”

</template>

<script>
export default {
  name: 'Tema3',
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
