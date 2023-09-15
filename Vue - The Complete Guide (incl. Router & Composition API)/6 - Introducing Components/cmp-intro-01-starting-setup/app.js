const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "lucas",
          name: "Lucas Oliveira",
          phone: "24 999412841",
          email: "lvksounds@gmail.com",
        },
        {
          id: "julia",
          name: "Julia Nicolau",
          phone: "24 999992685",
          email: "nicolaujubs@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `<li>
                <h2>{{ friend.name }}</h2>
                <button @click="toggleDetails">Show Details</button>
                <ul v-if="detailsAreVisible">
                  <li><strong>Phone:</strong> {{friend.phone}}</li>
                  <li><strong>Email:</strong> {{friend.email}}</li>
                </ul>
              </li>`,
  data() {
    return {
      friend: {
        id: "julia",
        name: "Julia Nicolau",
        phone: "24 999992685",
        email: "nicolaujubs@gmail.com",
      },
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
