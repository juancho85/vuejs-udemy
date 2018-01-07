<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <h2 v-custon:click="logMessage">Click</h2>
                <h2 v-custon:mouseover="logMessage">Mouse over</h2>
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'custon': {

          bind(el, binding, vnode) {
            const type = binding.arg;
            const fn = binding.value;
            console.log('binding argument', type);
            console.log('binding value', fn);
            el.addEventListener(type, fn);
          }
        }
      },
      methods: {
        logMessage() {
          console.log('something happened');
        }
      }
    }
</script>

<style>
</style>
