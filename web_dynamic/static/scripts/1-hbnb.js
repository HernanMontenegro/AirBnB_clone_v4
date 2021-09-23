window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    for (let li of listAmenities) {
        $(li).first().click(function() {
            let listAmenities = $("DIV.amenities DIV.popover ul li");
            let selectedAmenitiesText = "";
            let h4 = $('DIV.amenities h4');

            h4.empty();

            for (let li of listAmenities) {
                let amenCheckState = $(li).first();
                let amenName = $(li).first().next().text();
                if (amenCheckState.is(':checked')) {
                    selectedAmenitiestext += `, ${amenName}`;
                }
            }

            h4.text(selectedAmenitiestext);
        });
    }
};

function fillAmenities(elem)
{
    
}
