const app = Vue.createApp({
  data() {
    return {
      firstText: "",
      secondText: "",
    };
  },
  methods: {
    showInputTwo(event) {
      this.secondText = event.target.value;
    },
    showInputOne(event) {
      this.firstText = event.target.value;
    },
    showAlert() {
      alert("Exercicio 2 - events");
    },
  },
});

app.mount("#assignment");
