<template>
  <section>
    <h1>Contentbox</h1>
    <g-image
      v-if="contentbox.bild[0].url"
      :src="'https://medinbackend.daniellerch.ch' + contentbox.bild[0].url"
    />
    <h2>{{contentbox.titel}}</h2>
    <article v-if="contentbox.kurztext" v-html="contentbox.kurztext.content"></article>
    <p>
      Url:
      <a
        v-if="contentbox.externerLink"
        :href="contentbox.externerLink"
      >{{contentbox.externerLink}}</a>
      <a
        v-else-if="contentbox.internerLink"
        :href="contentbox.internerLink[0].slug"
      >{{contentbox.internerLink[0].slug}}</a>
    </p>
  </section>
</template>


<script>
export default {
  name: "contentbox",
  props: ["contentbox"]
};
</script>




