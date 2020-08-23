export default `<template>
  <ev-layout :layout="layout">
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
</style>`;
