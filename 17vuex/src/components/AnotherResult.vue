<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{ clicks }}</p>
  </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
          // using the spread operator to extract key-value pairs from the mapGetters object
          ...mapGetters({
                       counter: 'doubleCounter',
                       clicks: 'stringCounter'
                     })
        }
      // counter() {
      //   return this.$store.getters.doubleCounter;
      // }
    }
</script>
