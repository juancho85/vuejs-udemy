export const fundsWithCurrency = {
  computed: {
    funds() {
      return this.$store.getters.funds + ' €';
    }
  }
}
