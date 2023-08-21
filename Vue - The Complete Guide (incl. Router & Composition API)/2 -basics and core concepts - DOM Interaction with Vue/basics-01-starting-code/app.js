const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish de course and learn Vue",
      courseGoalB: "<h2>Master Vue and Build amzing apps</h2>",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
