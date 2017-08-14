$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shops = ['grocery1', 'grocery2', 'grocery3', 'grocery4', 'grocery5'];
    var alphaShops = shops.map(function(shop) {
      return shop.sort(down);
    });
    $("#list").show();
    event.preventDefault();
  });
});
