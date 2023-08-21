Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const userInput = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = userInput.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   userInput.value = '';
//   listEl.appendChild(listItemEl);
// }

// buttonEl.addEventListener('click', addGoal);
