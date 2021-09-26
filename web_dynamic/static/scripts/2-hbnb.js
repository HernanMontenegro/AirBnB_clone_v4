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

  // cambiar URL
  window.fetch('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/status/')
    .then(resp => {
      if (resp.ok) {
        $('div#api_status').addClass('available');
        return resp.json();
      }
      $('div#api_status').removeClass('available');
      return resp.text().then(text => { throw new Error(text); });
    });
});
