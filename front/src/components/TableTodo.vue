<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">#</th>
        <th scope="col">Atividade</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in todos" v-bind:key="index">
        <td><input type="checkbox" v-model="todo.checked" /></td>
        <th scope="row">{{ index + 1 }}</th>
        <td v-if="todo.checked">
          <span style="text-decoration:line-through; color: red">{{
            todo.value
          }}</span>
        </td>
        <td v-else>
          <span>{{ todo.value }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableTodo",
  props: ["todos"],
};
</script>

<style></style>
