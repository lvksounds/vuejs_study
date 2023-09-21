<template>
  <div>
    <label for="">User name: </label>
    <input type="text" v-model="name" />
  </div>
  <div>
    <label for="">User age: </label>
    <input type="text" v-model="age" />
  </div>
  <div>
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.name, this.age);
      this.name = "";
      this.age = "";
    },
  },
};
</script>
