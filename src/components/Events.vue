<template>
  <v-card>
    <v-card-title>
      <h3>Event Streams</h3>
    </v-card-title>

    <v-data-table :headers="headers" :items="allEvents.items" :items-per-page="15">
      <template #[`item.timestamp`]="{value}">
        <Timestamp :timestamp="value" showUTC />
      </template>
      <template #[`item.payload.Protocol`]="{value}">
        <ColorChip :label="value" :colorMap="protoColorMap" />
      </template>
      <template #[`item.thrtScore`]="{value}">
        <ColorChip :label="value || 'Unknown'" :colorMap="talosColorMap" :defaultColor="talosDefault" />
      </template>
      <template #[`item.deviceId`]="{value}">
        <UniqueID :id="value" type="Reporting Device ID" :size="17" />
      </template>
      <template #[`item.promotionStatus`]="{value}">
        <StateIcon :state="value === 'promoted' ? 'yes' : 'no'" />
      </template>
      <template #[`item.payload.InitiatorIP`]="{value}">
        <IPAddress :ip="value" />
      </template>
      <template #[`item.payload.ResponderIP`]="{value}">
        <IPAddress :ip="value" />
      </template>
      <template #[`item.payload.IntrusionRuleMessage`]="{value}">
        <Message :message="value" />
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { ColorChip, Timestamp, UniqueID } from 'renderers'
import { StateIcon, IPAddress, Message } from '@/components/renderer'
export default {
  name: "EventStreams",
  components: { ColorChip, Timestamp, UniqueID, StateIcon, IPAddress, Message },
  data() {
    return {
      protoColorMap: {
        'tcp': 'light-blue',
        'udp': 'light-green',
        'proto': 'amber'
      },
      talosColorMap: {
        'Trusted': 'success',
        'Neutral': 'warning',
        'Untrusted': 'error'
      },
      talosDefault: 'white'

    }
  },
  computed: {
    ...mapGetters(['allEvents']),
    headers() {
      return [
        { text: 'Event Time (Local)', value: 'timestamp', width: 215  },
        { text: 'Talos Disposition', value: 'thrtScore' },
        { text: 'Incident', value: 'promotionStatus' },
        { text: 'Destination IP', value: 'payload.ResponderIP' },
        { text: 'Source IP', value: 'payload.InitiatorIP' },
        { text: 'Message', value: 'payload.IntrusionRuleMessage' },
        { text: 'Protocol', value: 'payload.Protocol', align: 'center' },
        { text: 'Reporting Device ID', value: 'deviceId'},
        { text: 'Actions', value: 'actions' }
      ]
    }
  }
}
</script>
