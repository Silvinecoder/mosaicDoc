<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area
        style="height: calc(100% - 150px); border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/sitesettings">
            <q-item-section> Site Settings </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/about">
            <q-item-section> Star </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
