<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label for="">Nome</label>
      <input type="text" v-model="newName" />
    </div>
    <div>
      <label for="">E-Mail</label>
      <input type="email" v-model="newPhone" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="newEmail" />
    </div>
    <div>
      <button>Add new friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "new-friend",
  emits: ["add-friend"],
  data() {
    return {
      newName: "",
      newPhone: "",
      newEmail: "",
    };
  },
  methods: {
    addNewFriend() {
      this.$emit("add-friend", this.newName, this.newEmail, this.newPhone);
      this.newName = "";
      this.newEmail = "";
      this.newPhone = "";
    },
  },
};
</script>
