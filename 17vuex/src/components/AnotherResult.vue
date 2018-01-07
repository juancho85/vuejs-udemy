<template>
  <div>
    <p>Double is: {{ counter }}</p>
    <p>Raw is: {{ rawCounter }}</p>
    <p>Number of clicks: {{ clicks }}</p>
  </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
          // using the spread operator to extract key-value pairs from the mapGetters object
          ...mapGetters({
                       counter: types.DOUBLE_COUNTER,
                       clicks: types.CLICK_COUNTER
          }),
          rawCounter() {
            return this.$store.getters.doubleCounter;
          }
        }
    }
</script>
