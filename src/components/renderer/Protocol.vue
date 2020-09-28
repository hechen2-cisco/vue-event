<template>
  <v-btn :color="`${colorMap(protocol)}`" x-small class="mr-2">{{ protocol }}</v-btn>
</template>

<script>
export default {
  props: ['protocol'],
  methods: {
    colorMap(protocol) {
      const MAP = {
        'tcp': 'light-blue',
        'udp': 'light-green',
        'proto': 'amber'
      }
      return MAP[protocol] || 'grey'
    }
  }  
}
</script>

<style scoped>
.v-btn {
  cursor: auto;
}
</style>