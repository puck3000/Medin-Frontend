<template>
  <section>
    <h1>hero</h1>
    <g-image :src="hero.bild[0].url" />
    <article class="lead" v-html="hero.lead"></article>
  </section>
</template>


<script>
export default {
  name: "hero",
  props: ["hero"]
};
</script>




