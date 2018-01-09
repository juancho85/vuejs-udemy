<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-server v-for="server in servers" :id="server.id" :status="server.status"></app-server>
        </ul>
    </div>
</template>

<script>
  import Server from './Server.vue';
  import { EventBus } from '../../event-bus';
  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Normal'}
        ]
      }
    },
    components: {
      appServer: Server
    },
    created() {
      EventBus.$on('serverStatusUpdated', server => {
        this.servers.forEach(function(entry) {
          if(entry.id == server.id) {
            entry.status = server.status;
          }
        });
      });
    }
  }
</script>

<style>

</style>
