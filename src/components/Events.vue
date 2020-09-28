<template>
  <v-card>
    <v-card-title>
      <h3>Event Streams</h3>
    </v-card-title>

    <v-data-table :headers="headers" :items="allEvents.items" :items-per-page="15">
      <template #[`item.timestamp`]="{value}">
        <Timestamp :timestamp="value" />
      </template>
      <template #[`item.payload.Protocol`]="{value}">
        <Protocol :protocol="value" />
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { Timestamp, Protocol } from '@/components/renderer'
export default {
  name: "EventStreams",
  components: {
    Timestamp,
    Protocol
  },
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
        { text: 'Sourc IP', value: '' },
        { text: 'Message', value: 'payload.IntrusionRuleMessage' },
        { text: 'Protocol', value: 'payload.Protocol' },
        { text: 'Reporting Device ID', value: 'deviceId'},
        { text: 'Actions', value: '' }
      ]
    }
  }
}
</script>