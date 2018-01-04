<template>
  <div class="container">
    <div class="row text-center">
      <h1>The super quiz</h1>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-xs-offset-3 col-xs-6">
            <transition
              enter-active-class="animated flipInY"
              mode="out-in"
            >
            <app-question
              v-if="selectedComponent == 'app-question'"
              :q="selectedQuestion"
              @answerOutcome="updateAnswerCorrect"></app-question>

            <app-feedback
              v-if="selectedComponent == 'app-feedback'"
              :isCorrect="answerCorrect"
              @nextQuestion="newQuestion"></app-feedback>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue';
import Feedback from './Feedback.vue';
import AppFeedback from "./Feedback";

export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          question: '1 + 1',
          possibleAnswers: [1, 2, 3, 4],
          rightAnswer: 2
        },
        {
          question: '2 + 2',
          possibleAnswers: [1, 2, 3, 4],
          rightAnswer: 4
        },
        {
          question: '3 + 3',
          possibleAnswers: [1, 2, 3, 6],
          rightAnswer: 6
        }
      ],
      selectedComponent: 'app-question',
      answerCorrect: false,
      selectedQuestion : ''
    }
  },
  // computed: {
  //   selectedQuestion: function () {
  //     return this.data[Math.floor(Math.random() * this.data.length)]
  //   }
  // },
  components: {
    AppFeedback,
    'app-question' : Question,
    'app-feedback' : Feedback
  },
  created() {
    this.selectedQuestion = this.newQuestion();
  },
  methods: {
    updateAnswerCorrect(event){
      this.answerCorrect = event;
      this.selectedComponent = 'app-feedback'
    },
    newQuestion: function () {
      this.selectedComponent = 'app-question'
      return this.data[Math.floor(Math.random() * this.data.length)];
    }
  }
}
</script>

<style>


</style>
