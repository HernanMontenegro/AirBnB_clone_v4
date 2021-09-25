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

  placeData = getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/');
  userData = getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/users')

  let ownerData = {};
  placeData.forEach(place => {
    let str = `<article><div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div>`;
    str += '<div class="information">';
    str += appendText("Guest", palceData.max_guest, "max_guest");
    str += appendText("Bedroom", palceData.number_rooms, "number_rooms");
    str += appendText("Bathroom", palceData.number_bathrooms, "number_bathrooms");
    str += "</div>";

    userData.forEach(usr => {
      if (usr.id == place.user_id)
      ownerData[place.user_id] = usr;
    });

    str += `<div class="user"><b>Owner:</b> ${ownerData[place.user_id].first_name} ${ownerData[place.user_id].last_name}</div>`;
    str += `<div class="description">${place.description}</div>`;
    $("section.places").append(str);
  });
  console.log(ownerData);
});
 
function getResponse(url) {
  let resp = [];
  $.ajax({
    type: 'post',
    url: url,   
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
      resp = data;
    }
  });
  return (resp);
}


function appendText(field, elementInfo, divClassName)
{
  let res = `<div class="${divClassName}">${elementInfo} ${field}`;
    if (elementInfo != 1)
      res += "s";
    res +=  "</div>";
  
  return res;
}
