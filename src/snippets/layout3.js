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
      }
    };
  }
};
</script>

<style>
</style>`;
