const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    doSearch(this.state.input)
      .then((hits) => this.setState({ list: hits }));
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input, list } = this.state;
    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={input} />
          <button type="text">Search</button>
        </form>
        {list.map(item =>
          <Item key={item.objectID} item={item} />
        )}
      </div>
    );
  }
}

const Item = ({ item }) =>
  <div>{item.title}</div>

ReactDOM.render(
  <App />,
  document.getElementById('app')
);