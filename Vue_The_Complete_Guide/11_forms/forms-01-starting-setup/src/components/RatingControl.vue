<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button
        :class="{ active: modelValue === 'poor' }"
        type="button"
        @click="activated('poor')"
      >
        Poor
      </button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button
        :class="{ active: modelValue === 'average' }"
        type="button"
        @click="activated('average')"
      >
        Average
      </button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button
        :class="{ active: modelValue === 'great' }"
        type="button"
        @click="activated('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  methods: {
    activated(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #cc04cc;
}

.active button {
  color: #cc04cc;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
