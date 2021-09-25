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
    success: async function (data) {
      console.log('Success');
      console.log(data);
      // Loop section
      for (const elment of data)
      {
        console.log(element);
        let str = `<article><div class="title_box"><h2>${element.name}</h2><div class="price_by_night">$${element.price_by_night}</div></div>`;
        str += '<div class="information">';
          str += appendText("Guest", element.max_guest);
          str += appendText("Bedroom", element.number_rooms);
          str += appendText("Bathroom", element.number_bathrooms);
        str += "</div>";
        console.log("EEEE AMIGO SOY YO");
        const res = await doRequest(`http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/users/${element.user_id}`);
        //const arr = JSON.parse(res);
        console.log("EEEE AMIGO SOY YO denuevo");
        console.log(res);
        return;
      }
      // data.forEach(async (element) => {
      //   $("section.places").append();

        
        /*
        <div class="user">
        <b>Owner:</b> ${element.user.first_name} ${element.user.last_name}</div><div class="description"> ${element.description}</div>

      -------------------------------------
          <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	  </div>

        */
        
      // });
    },
    error: function () {
      console.log('We are sorry but our servers are having an issue right now');
    }
  })
});

function appendText(field, elementInfo)
{
  let orgin = `<div class="max_guest">${elementInfo} ${field}`;
    if (elementInfo != 1)
      orgin += "s";
    orgin +=  "</div>";
  
  return origin;
}

function doRequest (url) {
  return new Promise(function () {
    fetch(url).then(res => res.json())
  });
}
