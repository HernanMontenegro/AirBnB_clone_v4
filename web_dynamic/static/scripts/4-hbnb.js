$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");
  let checkedAmenities = [];

  $('button').click(Ewe);

  function Ewe() {
    Sas(checkedAmenities);
  }

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

  Sas(checkedAmenities);
});

async function Sas(checkedAmenities = null)
{
  let placeData = await getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/');
  let userData = await getResponse('http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/users/', 'GET');
  let amenities = null;

  console.log(placeData);

  let ownerData = {};
  placeData.forEach( async (place) => {

    if (checkedAmenities.length > 0) {
      amenities = await getResponse(`http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places/${place.id}/amenities`, 'GET');
      // Existe algun amenity?
      console.log("8===========D Requested: 8===========D");
      console.log(amenities);
      console.log("8============D Checked: 8===============D");
      console.log(checkedAmenities);
      if (!ArrayUnionExistence(amenities, checkedAmenities)) {
        console.log("no hay ameniti tas re pobre jaja ;c");
        return;
      }
    }

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

function ArrayUnionExistence(amenityPlaceArr, amenityRequestArr)
{
  for (let i = 0; i < amenityPlaceArr.length; i++) {
    const element = amenityPlaceArr[i];
    let correctName = element.name.splice(2).slice(0, -1);
    if (amenityRequestArr.indexOf(correctName) != -1) {
      return true;
    }
  }
  return false;
}
