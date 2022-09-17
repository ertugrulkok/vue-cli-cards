<template>
  <!--  <li> -->
  <section class="currentCard">
    <h2>{{ titleP }}</h2>
    <p class="solution">Die Lösung lautet</p>
    <p>{{ answerP }}</p>
  </section>
  <!--  </li> -->
</template>

<script>
export default {
  props: ["titleP", "answerP"],
};
</script>

<style scoped>
.currentCard {
  border: 2px solid black;
  border-radius: 20px;
  padding: 1.5rem;
  max-width: 500px;
  margin: auto;
}

.solution {
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
