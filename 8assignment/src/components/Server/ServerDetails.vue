<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ serverDetails }}</p>
        <button class="btn btn-default" @click="changeStatus">Back to normal</button>
    </div>

</template>

<script>
  import { EventBus } from '../../event-bus';
  export default {
    data() {
      return {
        currentServer: null
      }
    },
    computed: {
      serverDetails() {
        if(this.currentServer) {
          return 'server id is: ' + this.currentServer.id + ', The status is: ' + this.currentServer.status;
        } else {
          return 'Server Details are currently not updated';
        }
      }
    },
    created() {
      EventBus.$on('loadServerDetail', server => this.currentServer = server);
    },
    methods: {
      changeStatus() {
        this.currentServer.status = 'Normal';
        // No need to emit event, since we have a reference to the actual object
        // EventBus.$emit('serverStatusUpdated', this.currentServer);
      }
    }
  }
</script>
