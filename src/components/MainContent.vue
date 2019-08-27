<template>
  <section>
    <h1>Main Content</h1>
    <article v-html="maincontent.text.content"></article>
  </section>
</template>


<script>
export default {
  name: "maincontent",
  props: ["maincontent"]
  
};
</script>




