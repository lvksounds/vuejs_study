const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
      objArr: [
        { name: "Lucas", age: 25 },
        { name: "julia", age: 24 },
      ],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
      this.goal = "";
    },
    removeGoal(goal) {
      this.goals.pop(goal);
    },
  },
});

app.mount("#user-goals");
