$(document).ready(function () {
  const listAmenities = $('DIV.amenities DIV.popover ul li');
  const checkedAmenities = [];

  for (const li of listAmenities) {
    $(li).children(':first').change(function () {
      const dataName = $(li).text();

      if (this.checked) {
        checkedAmenities.push(dataName);
      } else {
        const idx = checkedAmenities.indexOf(dataName);
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
