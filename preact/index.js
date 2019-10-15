import {
  h,
  render,
  Component
} from 'https://unpkg.com/preact@10.0.0/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js';

const html = htm.bind(h);
const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    doSearch(this.state.input).then(hits => this.setState({ list: hits }));
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input, list } = this.state;
    return html`
      <div>
        <h1>Search Hacker News with Preact</h1>
        <form type="submit" onSubmit=${this.onSubmit}>
          <input type="text" onChange=${this.onChange} value=${input} />
          <button type="text">Search</button>
        </form>
        <br />
        ${list.map(
          item =>
            html`
              <div key=${item.objectID}>
                <a href=${item.url} target="_blank" rel="noopener noreferrer">
                  ${item.title}
                </a>
                <hr />
                <br />
              </div>
            `
        )}
      </div>
    `;
  }
}

render(
  html`
    <${App} />
  `,
  document.body
);
