const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.result += num;
    },
  },
  computed: {
    sumResults() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return "Thats the number!";
      }
    },
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
