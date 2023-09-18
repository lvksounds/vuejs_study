const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
      isShowin: true,
    };
  },
  methods: {
    addTask() {
      this.goals.push(this.goal);
      this.goal = "";
    },
    showList() {
      this.isShowin = !this.isShowin;
    },
  },
  computed: {
    changeBtnLabel() {
      if (this.isShowin) {
        return "Hide List";
      } else if (!this.isShowin) {
        return "Show List";
      }
    },
  },
});

app.mount("#assignment");
