import { createMemoryHistory, createRouter } from "vue-router";
import Countries from "../components/RestAPI.vue";
import Country from "../components/Country.vue";

const routes = [
  { path: "/", component: Countries },
  { path: "/countries/:id", component: Country, name: "Country", props: true },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
