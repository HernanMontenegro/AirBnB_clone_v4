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

  // cambiar URL http://0.0.0.0:5001/api/v1/status/
  fetch("http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/status/")
    .then(resp => {
      if(resp.ok) {
        $("div#api_status").addClass("available");
        return resp.json()
      }
      $("div#api_status").removeClass("available");
      return resp.text().then(text => {throw new Error(text)}) 
    });
    
    // $.post("http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/", {},
    // function(data, status){
    //   if (status.)
    //   alert("Data: " + data + "\nStatus: " + status);
    //   console.log(data);
    // });
  
  $.ajax({
    type: 'post',
    url: 'http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/',   
    contentType: 'application/json',
    data: JSON.stringify({}),
    xhrFields: {
      withCredentials: false
    },  
    headers: {

    },
    success: function (data) {
      console.log('Success');
      console.log(data);
      // Loop section
      data.forEach(element => {
        console.log(element);
        $("section.places").append(`<article><div class="title_box"><h2>${element.name}</h2><div class="price_by_night">$ ${element.price_by_night}</div></div><div class="information"><div class="max_guest">${element.max_guest} Guest ${element.max_guest}</div><div class="number_rooms">${element.number_rooms} Bedroom ${element.number_rooms}s </div><div class="number_bathrooms">${element.number_bathrooms} Bathroom ${element.number_bathrooms}s</div></div>`);
      });
    },
    error: function () {
      console.log('We are sorry but our servers are having an issue right now');
    }
  })
});
