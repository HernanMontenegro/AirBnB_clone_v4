window.onload = function() {
    console.log("a");
    let listAmenities = $("DIV.amenities DIV.popover ul");
    console.log(listAmenities);
    console.log(listAmenities.text());
    for (let li of listAmenities) {
        console.log("CCCCCCC");
        console.log(li);
        log
        $(li).first().change(fillAmenities());
    }
};

function fillAmenities()
{
    console.log("d");
    let listAmenities = $("DIV.amenities DIV.popover ul");
    let selectedAmenitiesText = "";
    $('DIV.amenities').first().next().empty();

    for (let li of listAmenities) {
        let amenCheckState = $(li).first();
        let amenName = $(li).first().next().text();
        if (amenCheckState.is(':checked')) {
            selectedAmenitiestext += `, ${amenName}`;
        }
    }

    $('DIV.amenities').first().next().text(selectedAmenitiestext);
}
