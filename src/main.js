import { createApp } from "vue";
import App from "./App.vue";

import CurrentCard from "./components/CurrentCard.vue";
import QuestionBase from "./components/QuestionBase.vue";
import QuestionCard from "./components/QuestionCard.vue";
import QuestionGrid from "./components/QuestionGrid.vue";

const app = createApp(App);
// globale Komponenten
app.component("question-card", QuestionCard);
app.component("question-base", QuestionBase);
app.component("question-grid", QuestionGrid);
app.component("current-card", CurrentCard);

app.mount("#app");
