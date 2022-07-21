import { createApp, reactive, toRefs } from "vue";

const BASE_URL = "https://hn.algolia.com/api/v1/";

const app = createApp({
  components: {
    Item: {
      props: {
        item: Object,
      },
      template: "<div>{{item.title}}</div>",
    },
  },
  setup() {
    const state = reactive({
      list: [],
      query: "",
    });
    
    async function doSearch(query) {
      const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
      const response = await fetch(url);
      const result_1 = await response.json();
      return result_1.hits;
    }
    function onSearch() {
      doSearch(state.query).then((hits) => (state.list = hits));
    };

    return {
      ...toRefs(state),
      onSearch,
    };
  },
});

app.mount("#app");
