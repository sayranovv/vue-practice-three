<template>
  <header class="navbar">
    <h3>{{ appTitle }}</h3>
    <ul class="navbar-menu">
      <li><router-link to="/tasks">Все задачи</router-link></li>
      <li><router-link to="/new">Создать</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  props: ["appTitle"],
};
</script>

<style></style>
