<template>
  <section>
    <h2>My friends list</h2>
    <new-friend @add-friend="addNewFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :email-address="friend.email"
        :phone-number="friend.phone"
        :is-favorite="friend.isfavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "987387623",
          email: "fulano@cliaco.etc.etc",
          isfavorite: true,
        },
        {
          id: "julie",
          name: "julie lorenz",
          phone: "987387623",
          email: "fulano@cliaco.etc.etc",
          isfavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(id) {
      const actualFriend = this.friends.find((friend) => friend.id === id);
      actualFriend.isfavorite = !actualFriend.isfavorite;
    },
    addNewFriend(newname, newemail, newphone) {
      const newFriend = {
        id: new Date().toString(),
        name: newname,
        phone: newphone,
        email: newemail,
        isfavorite: false,
      };
      this.friends.push(newFriend);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
