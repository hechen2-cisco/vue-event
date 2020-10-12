<template>
  <v-app>
    <v-app-bar app color="white" light>
      <v-img alt="Cisco Logo" src="@/assets/cisco-logo-1-300x151.png" class="shrink mr-4" width="75"/>
      <v-toolbar-title class="text-h5 text--secondary">Event</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-icon class="ms-8" title="Help">mdi-help</v-icon>
        <v-icon class="ms-8" title="Notification">mdi-bell</v-icon>
        <v-icon class="ms-8" title="User">mdi-account</v-icon>
      </span>
    </v-app-bar>

    <v-main>
      <Events/>
    </v-main>
  </v-app>
</template>

<script>
import Events from './components/Events';

export default {
  name: 'App',

  components: {
    Events,
  },

  data: () => ({
    //
  }),
};
</script>
