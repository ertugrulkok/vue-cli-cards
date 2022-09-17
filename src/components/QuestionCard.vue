<template>
  <li>
    <h2>{{ titleP }}</h2>
    <i>Aufgabe</i>
    <p>{{ questionP }}</p>
    <button @click="selectCard(idP)">Show Answer</button>
  </li>
</template>

<script>
export default {
  inject: ['selectCard'],
  props: ["idP", "titleP", "questionP"],
 // emits: ["select-card"]
};
</script>
