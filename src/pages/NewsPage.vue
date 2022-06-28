<template>
  <q-page class="news-components q-ml-lg">
    <h3>News Components</h3>
    <NewsGrid></NewsGrid>
  </q-page>
</template>

<script lang="ts">
import NewsGrid from 'components/News/GridComponent.vue';

export default {
  components: {
    NewsGrid,
  },
};
</script>
