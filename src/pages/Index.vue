<template>
  <Layout>
    <h1>Testing Gridsome with CraftQL and Apollo</h1>
    <hero v-if="$page.entries[0].hero[0].enabled" :hero="$page.entries[0].hero[0]" />
    <maincontent
      v-if="$page.entries[0].mainContent[0].enabled"
      :maincontent="$page.entries[0].mainContent[0]"
    />
    <ul v-if="$page.entries[0].contentbox[0]">
      <li v-for="contentbox in $page.entries[0].contentbox" :key="contentbox.id">
        <contentbox :contentbox="contentbox" />
      </li>
    </ul>
  </Layout>
</template>


<page-query>
query fetchHome {
  entries(section: home) {
    ... on medinTypes_Home {
      hero {
        __typename
        ... on medinTypes_HeroHeroslides {
          id
          bild {
            id
            url
          }
          lead
          enabled
        }
      }
      mainContent {
        __typename
        ... on medinTypes_MainContentText {
          id
          text {
            content
          }
          enabled
        }
        ... on medinTypes_MainContentBild {
          id
          bild {
            id
            url
          }
          bildunterschrift {
            content
          }
          altText
          enabled
        }
      }
      contentbox {
        __typename
        ... on medinTypes_ContentboxContentbox {
          id
          enabled
          bild {
            id
            url
          }
          altText
          titel
          kurztext {
            content
          }
          internerLink {
            slug
          }
          externerLink
        }
      }
    }
  }
}
</page-query>

<script>
import hero from "~/components/Hero.vue";
import maincontent from "~/components/MainContent.vue";
import contentbox from "~/components/ContentBox.vue";
export default {
  name: "home",
  metaInfo: {
    title: "Medin Frontend"
  },
  components: {
    hero,
    maincontent,
    contentbox
  }
};
</script>




