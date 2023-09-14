const app = Vue.createApp({
  data() {
    return {
      myName: "Lucas",
      myAge: 25,
      pictureLink:
        "https://static.wikia.nocookie.net/naruto/images/c/ca/Kakashi_Hatake_%28Infobox_-_Naruto%29.PNG/revision/latest?cb=20221012051237&path-prefix=pt-br",
    };
  },
  methods: {
    randomNumber() {
      return Math.round(Math.random() * 30);
    },
  },
}).mount("#assignment");
