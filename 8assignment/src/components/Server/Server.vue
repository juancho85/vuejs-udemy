<template>
  <li class="list-group-item" @click="loadDetails">
    Server #{{ server.id }}
  </li>
</template>

<script>
    import { EventBus } from '../../event-bus';
    export default {
      props: {
        server: {}
      },
      methods: {
        loadDetails() {
          EventBus.$emit('loadServerDetail', this.server);
        }
      }
    }

</script>
