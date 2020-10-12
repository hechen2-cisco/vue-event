<template>
  <span>
    <v-icon :color="color" class="mr-n1">mdi-circle-medium</v-icon>
    {{ state }}
  </span>
</template>

<script>
export default {
  props: ['state'],
  computed: {
    color: function () {
      return {
        'yes': 'success',
        'no': 'silver'
      }[this.state]
    }
  }
}
</script>