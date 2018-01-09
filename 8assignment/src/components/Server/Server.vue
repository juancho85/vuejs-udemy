<template>
  <li class="list-group-item" @click="loadDetails">
    Server #{{ id }}
  </li>
</template>

<script>
    import { EventBus } from '../../event-bus';
    export default {
      props: {
        id: '',
        status: ''
      },
      methods: {
        loadDetails() {
          EventBus.$emit('loadServerDetail', {
            id: this.id,
            status: this.status
          });
        }
      }
    }

</script>
