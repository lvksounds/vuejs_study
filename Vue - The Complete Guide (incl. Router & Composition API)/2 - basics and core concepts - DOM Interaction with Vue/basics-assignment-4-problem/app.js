const app = Vue.createApp({
  data() {
    return {
      inputedClass: "",
      inputedClass2: "",
      tooglePressed: false,
    };
  },
  methods: {},
  computed: {
    addInputedClass() {
      return this.inputedClass;
    },
    changeVisibility() {
      if (this.tooglePressed === true) {
        return "hidden";
      } else {
        return "visible";
      }
    },
  },
  methods: {
    turnOffVisibility() {
      this.tooglePressed = !this.tooglePressed;
    },
  },
});

app.mount("#assignment");
