<template>
  <q-page class="header q-ml-lg">
    <h3>Header</h3>
    <p>
      This section will describe how I was able to implement and overwrite
      stylings for the final header.
    </p>

    <q-list class="top-bar">
      <h3>Top Bar</h3>
      <p>
        For the top bar turquoise stripe, I was able to override the height
        with:
      </p>
      <div class="code-block">
        <code>#header #wrapper-topbar { height: 5px; }</code>
      </div>

      <p>
        I then changed some of the default stylings for the header by going into
        the Colour Management section and changing the Top bar colour:
      </p>
      <img src="../assets/img/Header/Header-Color.png" alt="Header color" />

      <p>
        Lastly, proceeding to the Header section in Site settings, I modified
        the header style to standard and changed the settings for the mobile
        header.
      </p>
      <img src="../assets/img/Header/Default-Header.png" alt="Default Header" />
    </q-list>

    <q-list class="logo-searchbar">
      <h3>Logo and Search Bar</h3>
      <p>
        For the logo section, I changed the default stylings in the header, and
        site logo section, hiding the default logo and uploading a new logo with
        an overlap position:
      </p>
      <img src="../assets/img/Header/default-logo.png" alt="Default Logo" />
      <img src="../assets/img/Header/new-logo.png" alt="New logo" />
      <p>I then modified default margin styles:</p>
      <div class="code-block">
        <code>
          /* -- logos -- */ #logos.logo-position-default .oxlogo,
          #logos.logo-position-default .sitelogo { margin-top: 0; margin-right:
          8px; } #wrapper-branding { padding-top: 0; } #wrapper-branding
          .container { min-height: 0; }</code
        >
      </div>
      <p>
        For the search bar, I first changed the default styling colour in the
        Colour Management and the modified the default bar style in the Search
        display:
      </p>
      <img src="../assets/img/Header/search-color.png" alt="Search Colour" />
      <img src="../assets/img/Header/search-style.png" alt="Search Style" />
    </q-list>
  </q-page>
</template>

<script lang="ts"></script>

<style lang="scss">
@import '../scss/global.scss';
</style>
