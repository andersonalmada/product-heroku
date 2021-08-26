<template>
  ABOUT
  {{ $route.params.name }}
  {{ $route.query.ok }}
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
