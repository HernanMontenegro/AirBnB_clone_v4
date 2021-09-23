window.onload = function() {
    console.log("a");
    let listAmenities = $("DIV.amenities.popover ul li");
    console.log(`b ${listAmenities}`);
    for (let li of listAmenities) {
        console.log(`c ${li}`);
        $(li).first().change(fillAmenities());
    }
};

function fillAmenities()
{
    console.log("d");
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
