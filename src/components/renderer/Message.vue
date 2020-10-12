<template>
  <div>
    <v-tooltip bottom color="primary">
      <template #activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">
          {{ msgShow }}
        </span>
      </template>
      {{ message }}
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ['message'],
  computed: {
    msgShow: function () {
      return this.message.length > 25 ? this.message.substr(0, 15) + '...' : this.message;
    }
  }
}
</script>