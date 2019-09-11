const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

const App = () => {
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    doSearch(input)
      .then((hits) => setList(hits));
  }

  const onChange = (e)  => {
    setInput(e.target.value);
  }

    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={input} />
          <button type="text">Search</button>
        </form>
        {list.map(item =>
          <Item key={item.objectID} item={item} />
        )}
      </div>
    );
}

const Item = ({ item }) =>
  <div>{item.title}</div>

ReactDOM.render(
  <App />,
  document.getElementById('app')
);