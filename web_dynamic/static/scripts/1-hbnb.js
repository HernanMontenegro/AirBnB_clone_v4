window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    for (let li of listAmenities) {
        $(li).first().click(function() {
            let listAmenities = $("DIV.amenities DIV.popover ul li");
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
        });
    }
};

function fillAmenities(elem)
{
    
}
