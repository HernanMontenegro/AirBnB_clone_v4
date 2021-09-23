$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");
  let checkedAmenities = [];

  let changeDelegate = function(checkedList) {
    let dataName = $(li).text();
    if (this.checked) {
      checkedList.push(dataName);
    } else {
      let idx = checkedList.indexOf(dataName);
      if (idx !== -1) {
        checkedList.splice(idx, 1);
      }
    }
  
    if (checkedList.length > 0) {
      $('div.amenities h4').text(checkedList.join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  };

  for (let li of listAmenities) {
    $(li).children(":first").change(changeDelegate(checkedAmenities));
  }
});