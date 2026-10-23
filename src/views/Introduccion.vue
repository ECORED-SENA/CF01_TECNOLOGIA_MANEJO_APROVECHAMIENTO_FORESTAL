<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p La agroforestería integra especies leñosas perennes con cultivos agrícolas o ganadería dentro de un mismo espacio, lo que genera sistemas productivos con características espaciales, ambientales y funcionales que requieren información precisa para su planificación y seguimiento. En este contexto, las tecnologías geoespaciales permiten caracterizar el territorio, analizar la distribución de sus componentes y reconocer cambios relacionados con el uso del suelo, la cobertura vegetal y las condiciones del sistema agroforestal.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-5.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 El uso de sistemas de información geográfica, imágenes satelitales, sensores y vehículos aéreos no tripulados facilita la obtención y el análisis de datos asociados con diferentes variables del territorio. Estas herramientas permiten apoyar el monitoreo de la vegetación, la estimación de biomasa y captura de carbono, el análisis de condiciones del suelo y la identificación de cambios en el paisaje, contribuyendo a una gestión más informada de los sistemas agroforestales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 A partir de este enfoque, el componente aborda los fundamentos de las tecnologías geoespaciales, los procesos de captura y procesamiento de información y el uso de índices de vegetación para el monitoreo del dosel agroforestal. De esta manera, se establece una base conceptual y técnica para comprender la utilidad de la información georreferenciada en el análisis y la toma de decisiones relacionadas con el territorio agroforestal.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
