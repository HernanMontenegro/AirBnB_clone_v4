window.onload(function() {
    let listAmenities = $("DIV.amenities.popover ul li");
    for (let li of listAmenities) {
        $(li).first().change(fillAmenities());
    }
});

function fillAmenities()
{
    let checkedOnes = [];
    let listAmenities = $("DIV.amenities.popover ul li");
    $('DIV.amenities h4').empty();
    for (let li of listAmenities) {
        let amenCheckState = $(li).first();
        let amenName = $(li).first().next().text();
        if (amenCheckState.is(':checked')) {
            checkedOnes.push(amenCheckState);
            $('DIV.amenities h4').text(amenName);
        }
    }
}
