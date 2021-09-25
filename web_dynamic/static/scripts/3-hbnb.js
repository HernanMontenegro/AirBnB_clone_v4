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

    let place = null;
    let user = null;

    AjaxCall();
    

    // $.post("http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/", {},
    // function(data, status){
    //   if (status.)
    //   alert("Data: " + data + "\nStatus: " + status);
    //   console.log(data);
    // });
  
  // $.ajax({
  //   type: 'post',
  //   url: 'http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/',   
  //   contentType: 'application/json',
  //   data: JSON.stringify({}),
  //   xhrFields: {
  //     withCredentials: false
  //   },  
  //   headers: {

  //   },
  //   success: function (data) {
  //     // data.forEach(async (element) => {
  //     //   $("section.places").append();

        
  //       /*
  //       <div class="user">
  //       <b>Owner:</b> ${element.user.first_name} ${element.user.last_name}</div><div class="description"> ${element.description}</div>

  //     -------------------------------------
  //         <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
  //           <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	//   </div>

  //       */
        
  //     // });
  //   },
  //   error: function () {
  //     console.log('We are sorry but our servers are having an issue right now');
  //   }
  // })

});

function appendText(field, elementInfo)
{
  let orgin = `<div class="max_guest">${elementInfo} ${field}`;
    if (elementInfo != 1)
      orgin += "s";
    orgin +=  "</div>";
  
  return origin;
}

async function AjaxCall()
{
  let place = null;
  let user = null;
  await doAjax("http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/places_search/")
      .then(data => place = data);
  await doAjax(`http://afa6415d533b.0a98cdc3.hbtn-cod.io:5001/api/v1/users/${place[0].user_id}`)
      .then(data => {console.log(data.json());user = data});

    console.log(place);
    //console.log(user);
}

async function doAjax(ajaxurl, data = {}) {
  let response;

  try {
    response = await $.ajax({
        url: ajaxurl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        xhrFields: {
          withCredentials: false
        },  
        headers: {
        }
        // sucess: function (data) {
        //   console.log("ewewewewewewewewewew");
        //   response = data
        // },
    });

    return response;
  } catch (error) {
      console.error(error);
  }
}
