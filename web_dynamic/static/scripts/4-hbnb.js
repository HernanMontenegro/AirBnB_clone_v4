$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");
  console.log($('button').text());
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

    Sas();
});

async function Sas()
{
  let placeData = await getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/');
  let userData = await getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/users/', 'GET');

  let ownerData = {};
  placeData.forEach(place => {
    let str = `<article><div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div>`;
    str += '<div class="information">';
    str += appendText("Guest", place.max_guest, "max_guest");
    str += appendText("Bedroom", place.number_rooms, "number_rooms");
    str += appendText("Bathroom", place.number_bathrooms, "number_bathrooms");
    str += "</div>";

    userData.forEach(usr => {
      if (usr.id == place.user_id)
      ownerData[place.user_id] = usr;
    });

    str += `<div class="user"><b>Owner:</b> ${ownerData[place.user_id].first_name} ${ownerData[place.user_id].last_name}</div>`;
    str += `<div class="description">${place.description}</div>`;
    $("section.places").append(str);
  });

  console.log(userData);
}

async function getResponse(url, method = 'POST') {
  let resp = [];
  if (method == "POST") {
    await $.ajax({
      type: method,
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({}),
      xhrFields: {
        withCredentials: false
      },  
      headers: {
      },
      success: function (data) {
        resp = data;
      }
    });
  }
  else if (method == "GET") {
    await $.ajax({
      type: method,
      url: url,
      success: function (data) {
        resp = data;
      }
    });
  }

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
