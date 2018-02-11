const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

new Vue({
  el: '#app',
  template: `
    <div>
      <h1>Search Hacker News with Vue</h1>
      <form type="submit" v-on:submit.prevent="onSearch">
        <input type="text" v-model="query"/>
        <button type="text">Search</button>
      </form>
      <div v-for="item in list">
        {{item.title}}
      </div>
    </div>
  `,
  data: {
    list: [],
    query: '',
  },
  methods: {
    onSearch() {
      doSearch(this.query).then(hits => this.list = hits);
    },
  }
});