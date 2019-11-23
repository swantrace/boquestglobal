<template>
  <v-app-bar
    v-if="!$vuetify.breakpoint.mdAndUp"
    dark
    app
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-spacer />

    <v-toolbar-title class="headline">
      <template>
        <span class="font-weight-bold">
          BOQUEST
        </span>
        <span class="font-weight-light">
          GLOBAL
        </span>
      </template>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-only" />
  </v-app-bar>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'MobileHeader',
    computed: {

    },

    methods: {
      ...mapMutations([
        'toggleDrawer'
      ]),
    }
  }
</script>
