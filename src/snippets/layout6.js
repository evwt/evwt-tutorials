export default `<template>
  <ev-layout :layout="layout">
    <template v-slot:toolbar>
      Toolbar
    </template>
    <template v-slot:categories>
      Categories
    </template>
    <template v-slot:main>
      Main
    </template>
  </ev-layout>
</template>

<script>
import { EvLayout } from 'evwt/components';

export default {
  components: {
    EvLayout
  },

  data() {
    return {
      layout: {
        direction: 'row',
        sizes: [
          '32px',
          '1fr'
        ],
        panes: [
          {
            name: 'toolbar',
            resizable: false
          },
          {
            direction: 'column',
            sizes: [
              '250px',
              '1fr'
            ],
            panes: [
              {
                name: 'categories'
              },
              {
                name: 'main'
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

* {
box-sizing: border-box;
  font-family: system-ui;
}

.ev-pane-toolbar {
  background: #dadada;
}

.ev-pane-categories {
  background: #e4e4e4;
}
</style>`;
