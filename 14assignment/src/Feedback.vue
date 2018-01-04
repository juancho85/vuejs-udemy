<template>
  <div class="panel panel-default" :class="isCorrect ? 'panel-success' : 'panel-danger'">
    <div class="panel-heading" v-if="isCorrect" >That is Correct</div>
    <div class="panel-heading" v-if="!isCorrect">That is Wrong</div>
    <div class="panel-body">
      <button class="btn btn-primary" @click="nextQuestion">Next question</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "feedback",
        props: {
          isCorrect: false
        },
      methods: {
        nextQuestion() {
          this.$emit('nextQuestion');
        }
      }
    }
</script>

<style>

</style>
