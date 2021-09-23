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
        $('div.amenities h4').text(checkedAmenities.join(', '));
      } else {
        $('div.amenities h4').html('&nbsp;');
      }
    });
  }
});
