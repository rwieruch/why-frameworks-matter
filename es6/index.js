const BASE_URL = 'https://hn.algolia.com/api/v1/';

function getList(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

const addButtonEvent = () =>
  document.getElementById('searchButton')
    .addEventListener('click', onSearch);

const onSearch = () => {
  removeList();

  doSearch(getElementByIdValue('searchInput'))
    .then(appendList);
};

const getElementByIdValue = id =>
  document.getElementById(id).value;

const doSearch = query =>
  getList(query);

const removeList = () => {
  const listNode = document.getElementById('list');

  if (listNode) {
    listNode.parentNode.removeChild(listNode);
  }
}

const appendList = list => {
  const listNode = document.createElement('div');
  listNode.setAttribute('id', 'list');
  document.getElementById('app').appendChild(listNode);

  list.forEach(appendItem(listNode));
};

const appendItem = listNode => item => {
  const itemNode = document.createElement('div');
  itemNode.appendChild(document.createTextNode(item.title));
  listNode.appendChild(itemNode);
};

addButtonEvent();