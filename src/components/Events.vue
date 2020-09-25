<template>
  <v-card>
    <v-card-title>
      <h3>Event Streams</h3>
    </v-card-title>

    <v-data-table :headers="headers" :items="allEvents.items">
    </v-data-table>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Event Streams",
  data() {
    return {
      desserts: [{
        timestamp: 1234,
        deviceId: "ewrwer" 
      }]
    }
  },
  computed: {
    ...mapGetters(['allEvents']),
    headers() {
      return [
        { text: 'Event Time (Local)', value: 'timestamp' },
        { text: 'Talos Disposition', value: '' },
        { text: 'Incident', value: 'promotionStatus' },
        { text: 'Destination IP', value: '' },
        { text: 'Message', value: 'payload.IntrusionRuleMessage' },
        { text: 'Protocol', value: 'payload.Protocol' },
        { text: 'Reporting Device ID', value: 'deviceId'},
        { text: 'Actions', value: '' }
      ]
    }
  }
}
</script>