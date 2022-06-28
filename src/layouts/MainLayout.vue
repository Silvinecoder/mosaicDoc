<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area
        style="height: calc(100% - 150px); border-right: 1px solid #ddd"
      >
        <!--Search Bar-->
        <q-input
          square
          dense
          standout
          v-model="textSearch"
          v-on:keyup.enter="onEnter"
          input-class="text-right"
          label="not ready yet"
        >
          <template v-slot:append>
            <q-icon v-if="textSearch === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="textSearch = ''"
            />
          </template>
        </q-input>

        <!--Links-->
        <q-list padding>
          <q-item clickable v-ripple to="/override">
            <q-item-section> Override</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/header">
            <q-item-section> Header</q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/navbar">
            <q-item-section> Navbar </q-item-section>
          </q-item>
          <q-item active clickable v-ripple to="/news">
            <q-item-section> News Components </q-item-section>
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
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const leftDrawerOpen = ref(false);
    return {
      wordArray: '',
      textSearch: '',
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    onEnter: function () {
      // On enter key
      console.log('enter Key has been pressed', this.textSearch);
    },

    searchFilter() {
      const search = this.textSearch;
      if (search === '') {
        // If search is empty
        console.log('No text!');
        return this.wordArray;
      }
    },
  },
});
</script>
