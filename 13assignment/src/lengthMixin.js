export const lengthMixin = {
  computed: {
    lengthAppended() {
      return this.text + ' (' + this.text.length + ')';
    }
  }
}

