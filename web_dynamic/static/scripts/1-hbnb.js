window.onload(function() {
    let listAmenities = $("DIV.amenities.popover ul li");
    for (let li of listAmenities) {
        $(li).first().change(fillAmenities());
    }
});

function fillAmenities()
{
    let listAmenities = $("DIV.amenities.popover ul li");
    let selectedAmenitiesText = "";
    $('DIV.amenities h4').empty();
    for (let li of listAmenities) {
        let amenCheckState = $(li).first();
        let amenName = $(li).first().next().text();
        if (amenCheckState.is(':checked')) {
            console.log("soy yo: " + amenName);
            selectedAmenitiestext += `, ${amenName}`;
        }
    }

    $('DIV.amenities').first().next().text(selectedAmenitiestext);
}
