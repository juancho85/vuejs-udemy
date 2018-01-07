<template>
    <div>
        <button class="btn btn-primary" @click="incAction({by:50, duration: 500})">Increment async</button>
        <button class="btn btn-primary" @click="decAction({by:50, duration: 500})">Decrement async</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
          ...mapMutations({
            inc: types.DOUBLE_COUNTER,
            dec: types.CLICK_COUNTER
          }),
          ...mapActions({
            incAction: 'asyncIncrement',
            decAction: 'asyncDecrement'
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
