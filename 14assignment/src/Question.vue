<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ q.question }}</div>
    <div class="panel-body">
      <div class="row">
        <div class="possible-answer" @click="isAnswerCorrect(q.possibleAnswers[0])">{{ q.possibleAnswers[0]}}</div>
        <div class="possible-answer" @click="isAnswerCorrect(q.possibleAnswers[1])">{{ q.possibleAnswers[1]}}</div>
      </div>
      <div class="spacer"></div>
      <div class="row">
        <div class="possible-answer" @click="isAnswerCorrect(q.possibleAnswers[2])">{{ q.possibleAnswers[2]}}</div>
        <div class="possible-answer" @click="isAnswerCorrect(q.possibleAnswers[3])">{{ q.possibleAnswers[3]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
          q: ''
        },
      methods: {
        isAnswerCorrect(response) {
          let isAnswerCorrect = response == this.q.rightAnswer;
          this.$emit('answerOutcome', isAnswerCorrect);
        }
      }
    }
</script>

<style>
  .possible-answer {
    background-color: #337ab4;
    color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    height: 40px;
    padding: 0 15px;
    float:left;
    margin-left: 25%;
    border-radius: 5px;
  }

  .possible-answer:hover {
    cursor: pointer;
  }

  .spacer {
    margin-top: 50px;
  }
</style>
