<template>
  <ul>
    <!-- old version -->
    <!--   <question-card
      v-for="card in cardsGrid"
      :key="card.id"
      :id-p="card.id"
      :title-p="card.title"
      :question-p="card.question"
      :answer-p="card.answer"
      @select-card="$emit('select-card', $event)"
    ></question-card> -->

    <!-- new version -->
    <question-card
      v-for="card in cardsProvide"
      :key="card.id"
      :id-p="card.id"
      :title-p="card.title"
      :question-p="card.question"
      :answer-p="card.answer"
    ></question-card>
  </ul>

  <div>
    <h1>Test</h1>
    <ul>
      <li v-for="user in userProvide" :key="user.name">
        {{user.name}} : {{user.gender}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cardsGrid"],
  inject: ["cardsProvide", "userProvide"],
  data() {
    return {};
  },
  // emit: ["select-card"],
};
</script>
