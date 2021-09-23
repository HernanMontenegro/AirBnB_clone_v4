$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");
  let checkedAmenities = [];

  for (let li of listAmenities) {
    $(li).children(":first").change(function () {
      let dataName = $(li).text();

      if (this.checked) {
        checkedAmenities.push(dataName);
      } else {
        let idx = checkedAmenities.indexOf(dataName);
        if (idx !== -1) {
          checkedAmenities.splice(idx, 1);
        }
      }

      if (checkedAmenities.length > 0) {
        let result = checkedAmenities[0] + checkedAmenities.splice(0, 1).join(', ');
        $('div.amenities h4').text(result);
      } else {
        $('div.amenities h4').html('&nbsp;');
      }
    });
  }
});
