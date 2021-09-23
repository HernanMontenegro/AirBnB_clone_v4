window.onload(function() {
    let listAmenities = $("DIV.amenities.popover ul li");
    for (let li of listAmenities) {
        amenCheckState.prop('checked', true);
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
        
        if (amenCheckState.is(':checked')) {
            checkedOnes.push(amenCheckState);
            const txtName = $(li).first().next().text();
            $('DIV.amenities h4').text(txtName);
        }
    }
}
