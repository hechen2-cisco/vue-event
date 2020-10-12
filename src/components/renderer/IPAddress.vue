<template>
  <div>
    <v-tooltip bottom color="primary">
      <template #activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">
          {{ ipShow }}
        </span>
      </template>
      {{ ip }}
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ['ip'],
  computed: {
    ipShow: function () {
      return this.ip.length > 15 ? this.ip.substr(0, 15) + '...' : this.ip;
    }
  }
}
</script>