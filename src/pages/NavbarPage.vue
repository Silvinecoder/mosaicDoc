<template>
  <q-page class="navbar q-ml-lg">
    <h3>Navbar</h3>
    <p>
      This section will describe how I was able to implement and overwrite
      stylings for the final navbar.
    </p>
    <q-list class="navbar-link">
      <h3>Navbar Links</h3>
      <p>
        I first added all of the navbar menu links in the edit main menu
        section:
      </p>
      <img src="../assets/img/nav/menu-links.png" alt="menu links" />
    </q-list>
    <q-list class="navbar-style">
      <h3>Navbar Style</h3>
      <p>
        I modified the default styles of the main menu by going into the
        navigation site settings and choosing the Mega menu, and uppercase
        navigation
      </p>
      <img src="../assets/img/nav/menu-style.png" alt="menu style" />
      <p>
        I then changed the menu colour in the colour Management and modified the
        font styles:
      </p>
      <img src="../assets/img/nav/menu-color.png" alt="Menu Colour" />
      <img src="../assets/img/nav/menu-font.png" alt="Menu Fonts" />
    </q-list>
    <q-list class="navbar-override">
      <h3>Desktop Navbar Override</h3>
      <p>Lastly, I implemented code overrides for the desktop nav:</p>
      <div class="code-block">
        <code>
          /* Navigation */ #navigation .navbar { top: 0; }
          #block-oxdrupal-megamenu-oxdrupal-megamenu .oxdrupal-meganav
          .oxdrupal-mega-menu-sub-level-container { padding: 32px 38px; }
          #block-oxdrupal-megamenu-oxdrupal-megamenu li a { padding: 7px 16px
          !important; } .oxdrupal-meganav > li > a, .oxdrupal-meganav > li >
          span.menu-item-no-link { line-height: 18px; height: auto; }
          .oxdrupal-mega-menu-sub-level-container .nav-column
          .oxdrupal-mega-menu-level-2 { color: #00f3ff !important; }
          #block-oxdrupal-megamenu-oxdrupal-megamenu .oxdrupal-meganav {
          display: flex; justify-content: end; float: none; top: -10px; }</code
        >
      </div>
    </q-list>
  </q-page>
</template>

<style lang="scss">
@import '../scss/global.scss';
</style>
