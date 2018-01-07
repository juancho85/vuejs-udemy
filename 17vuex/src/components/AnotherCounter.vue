<template>
    <div>
        <button class="btn btn-primary" @click="inc">Increment</button>
        <button class="btn btn-primary" @click="dec">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations} from 'vuex'
    export default {
        methods: {
          ...mapMutations({
            inc: 'increment',
            dec: 'decrement'
          }),
          incrementRaw() {
            // this.$store.state.counter++;
            this.$store.commit('increment');
          },
          decrementRaw() {
            // this.$store.state.counter--;
            this.$store.commit('decrement');
          }
        }
    }
</script>
