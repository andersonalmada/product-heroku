<template>
  <input
    type="text"
    v-on:keyup.enter="add"
    placeholder="O que precisa ser feito?"
  />
</template>

<script>
export default {
  name: "InputTodo",
  inject: ["tasks"],
  methods: {
    add($event) {
      let task = {};
      task.value = $event.target.value;
      task.checked = false;
      console.log(this.tasks);
      this.tasks.push(task);
    },
  },
};
</script>

<style></style>
