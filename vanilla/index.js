var BASE_URL = 'https://hn.algolia.com/api/v1/';

function getList(query) {
  var url = BASE_URL + 'search?query=' + query + '&hitsPerPage=200';
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      return result.hits;
    });
}

function addButtonEvent() {
  document.getElementById('searchButton')
    .addEventListener('click', onSearch);
};

function onSearch() {
  removeList();

  doSearch(getElementByIdValue('searchInput'))
    .then(appendList);
};

function getElementByIdValue(id) {
  return document.getElementById(id).value;
};

function doSearch(query) {
  return getList(query);
};

function removeList() {
  var listNode = document.getElementById('list');

  if (listNode) {
    listNode.parentNode.removeChild(listNode);
  }
}

function appendList(list) {
  var listNode = document.createElement('div');
  listNode.setAttribute('id', 'list');
  document.getElementById('app').appendChild(listNode);

  list.forEach(appendItem(listNode));
};

function appendItem(listNode) {
  return function (item) {
    var itemNode = document.createElement('div');
    itemNode.appendChild(document.createTextNode(item.title));
    listNode.appendChild(itemNode);
  };
};

addButtonEvent();