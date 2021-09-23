window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    for (let li of listAmenities) {
        $(li).first().click(function() {
            let listAmenities = $("DIV.amenities DIV.popover ul li");
            let selectedAmenitiesText = "";
            let h4 = $('DIV.amenities h4');
            let firstTime = true;

            console.log(h4);
            console.log(h4.text());

            h4.empty();

            for (let li of listAmenities) {
                let amenCheckState = $(li).first();
                let amenName = $(li).first().next().text();
                if (amenCheckState.is(':checked')) {
                    if (firstTime) {
                        selectedAmenitiesText = amenName;
                        firstTime = false;
                        continue;
                    }
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
