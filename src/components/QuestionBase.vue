<template>
  <section>
    <h2>Wähle eine Frage aus</h2>
    <!-- Old Version -->
    <!-- <question-grid
      :cards-grid="cardsBase"
      @select-card="$emit('select-card', $event)"
    ></question-grid> -->

    <!-- New Version -->
      <question-grid></question-grid>
  </section>
</template>

<script>
export default {
  props: ["cardsBase"],
  emits: ["select-card"],
};
</script>
