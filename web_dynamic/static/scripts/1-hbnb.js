$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");
  let checkedOnes = [];

  for (let li of listAmenities) {
    $(li).first().click(function () {
      let checkedAmenities = [];
      let dataName = $(this).data('name');
      if (this.checked) {
        checkedAmenities.push(dataName);
      } else {
        let idx = checkedAmenities.indexOf(dataName);
        if (idx !== -1) {
          checkedAmenities.splice(idx, 1);
        }
      }

      if (checkedAmenitiesength > 0) {
        $('div.amenities h4').text(checkedAmenitiesength.join(', '));
      } else {
        $('div.amenities h4').text('&nbsp;');
      }
    });
  }
});
