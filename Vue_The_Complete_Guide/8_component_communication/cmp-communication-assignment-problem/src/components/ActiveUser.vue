<template>
  <h2>Name: {{ userName }}</h2>
  <h3>Age: {{ userAge }}</h3>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
