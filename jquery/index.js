var BASE_URL = 'https://hn.algolia.com/api/v1/';

$('#searchButton').on('click', function() {
  $('#list').empty();
  var query = $('#searchInput').val();

  $.getJSON(BASE_URL + 'search?query=' + query + '&hitsPerPage=200', function(data) {
    var items = [];
    $.each(data.hits, function(key, val) {
      items.push("<li id='" + key + "'>" + val.title + "</li>");
    });

    $("<ul/>", {
      "class": "my-new-list",
      html: items.join("")
    }).appendTo("#list");
  });

});