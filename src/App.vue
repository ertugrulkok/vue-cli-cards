<template>
  <div class="wrapper">
    <div>
      <h1>KARTEIKARTEN APP</h1>
    </div>
    <current-card
      :title-p="activeQuestion && activeQuestion.title"
      :answer-p="activeQuestion && activeQuestion.answer"
    ></current-card>
    <!-- Old Version -->
    <!--  <question-base
      :cards-base="cards"
      @select-card="activateQuestion"
    ></question-base> -->

    <!-- new Version -->
    <question-base></question-base>
    <!--  <question-grid></question-grid> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Vue JS AUFGABE",
          question: "Was ist Vue JS",
          answer:
            "Vue JS ist ein Komponenten basiertes Framework was uns ermöglicht komplexe Webseiten zu bauen",
        },
        {
          id: 2,
          title: "CSS AUFGABE",
          question: "Wie wird CSS verwendet",
          answer:
            "CSS Datein werden mit HTML Dokumenten verknüpft und dadurch werden bestimmte Styles, die man selber erstellt übergeben und verwendet.",
        },
        {
          id: 3,
          title: "JavaScript AUFGABE",
          question: "Wie werden Objekte erstellt",
          answer:
            "Objekte werden mit geschweiften Klammern erstellt oder man erstellt einen Konstruktor und kann diesen dann öfter wiederverwenden.",
        },
      ],
      activeQuestion: null,
      user: [
        { name: "mehmet", gender: "male" },
        { name: "eman", gender: "female" },
      ],
    };
  },
  provide() {
    return {
      cardsProvide: this.cards,
      selectCard: this.activateQuestion,
      userProvide: this.user
    };
  },
  methods: {
    activateQuestion(cardId) {
      this.activeQuestion = this.cards.find((card) => card.id == cardId);
    },
  },

  // nur zum zeigen vo provide
  // mounted() {
  //   setTimeout(() => {
  //     this.cards.push({
  //       id: 10,
  //       title: "Test",
  //       question: "test frage",
  //       answer: "test antwort",
  //     });
  //   }, 5000);
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  border: 2px solid black;
  padding: 1rem;
  margin: 10px;
  list-style: none;
  width: fit-content;
}
ul {
  display: flex;
  justify-content: center;
}

button {
  padding: 5px 15px;
  font-size: 1rem;
  background-color: red;
  border: none;
  color: white;
  transition: 200ms all;
}

button:hover {
  transform: scale(1.1);
  background-color: green;
}
</style>
