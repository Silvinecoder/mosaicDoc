<template>
  <q-page class="site-settings q-ml-lg">
    <h2>Site Settings</h2>
    <p>
      To find the site settings, click on <b>User Management</b> In the site
      settings you can find a side Bar with various options, I've gathered the
      most import ones, which have been listed below:
    </p>

    <q-list>
      <h3>Site Theme</h3>
      <p>
        A few default stylings are hidden in the site theme; the most crucial
        are radius and alignment. Here's a list of what I was able to pick out:
      </p>
      <q-item class="site width">
        <q-item-section>
          <h4>Site width</h4>
          <p>
            You can change the width layout of the header and footer, having the
            option to add 32px of padding to make it narrower, or removing the
            padding to make it full width
          </p>
          <div class="site-width-img row justify-between">
            <div class="full-width-img">
              <img
                src="../assets/img/sitesettings/full-width.png"
                alt="full width"
              />
            </div>
            <div class="narrow-width">
              <img
                src="../assets/img/sitesettings/narrow-width.png"
                alt="narrow width"
              />
            </div>
          </div>
        </q-item-section>
      </q-item>

      <q-item class="margin and alignments">
        <q-item-section>
          <h4>Margin and alignments for titles and subtitles</h4>
          <p>
            Mosaic allows you to set margins and align the page titles and
            subtitles. The default sizes are 16px or 32px to comply with
            accessibility. It also allows the user to turn off the default
            settings. The default alignments of the page titles, subtitles and
            widget titles are either left or centre.
          </p>

          <img
            src="../assets/img/sitesettings/margin-align.png"
            alt="Margins and alignments"
          />
        </q-item-section>
      </q-item>

      <q-item class="icons">
        <q-item-section>
          <h4>Icons</h4>
          <p>The user can upload a new favicon or select the university logo</p>
        </q-item-section>
      </q-item>

      <q-item class="radius and alignment">
        <q-item-section>
          <h4>Button, Cards, Landscape and Portrait styles</h4>
          <p>
            This is where the user can find the radius and alignment options for
            these four items
          </p>
          <div class="radius-and-align-options row justify-between">
            <div class="hard--left">
              <p>Hard and left aligned:</p>
              <img
                src="../assets/img/sitesettings/hard-left.png"
                alt="hard left"
              />
            </div>
            <div class="soft--centred">
              <p>soft and centred aligned:</p>
              <img
                src="../assets/img/sitesettings/soft-centred.png"
                alt="soft centre"
              />
            </div>
            <div class="round">
              <p>round:</p>
              <img
                src="../assets/img/sitesettings/round-centre.png"
                alt="round centre"
              />
            </div>
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <h4>Labels option for Article, Event and people</h4>
          <p>In this section you can add or remove metadata labels</p>
          <img
            src="../assets/img/sitesettings/contentlabel.png"
            alt="content labels"
          />
        </q-item-section>
      </q-item>

      <q-item class="header-styling">
        <q-item-section>
          <h3>Header</h3>
          <p>
            Site settings are the central location where the user can change the
            style of the header, logo, header links and mobile header.
          </p>
          <p>
            The first option shown is the Standard or Minimal style header. The
            standard has an overlay site and Oxford university logo, with the
            option of adding social icons; there is no option to default hide it
            or change the height style.
          </p>
          <img
            src="../assets/img/sitesettings/header-style.png"
            alt="Header style"
          />
        </q-item-section>
      </q-item>

      <q-item class="site-logo">
        <q-item-section>
          <h4>Site logo and logo section</h4>
          <p>
            Here the user will find options to change the University Logo Crest,
            the options are minimal but also includes a display none feature.
            There is also an option to import a new logo.
          </p>
          <img
            src="../assets/img/sitesettings/site-logo.png"
            alt="Header style"
          />
        </q-item-section>
      </q-item>

      <q-item class="overriding-header">
        <q-item-section>
          <h4>Overriding Header with Custom CSS</h4>
          <p>
            For DSPI there is a section where I required to remove the overlay
            of the logos and change the height of the header, to do this you go
            to:
          </p>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts"></script>

<style lang="scss">
@import '../scss/typography.scss';

.site-settings {
  max-width: 1400px;
  .q-list,
  .q-item {
    margin-top: 60px;
  }
  .q-item {
    padding: 0;
    img {
      width: 600px;
      height: auto;
    }

    .radius-and-align-options {
      img {
        width: 300px;
      }
    }
  }
}
</style>
