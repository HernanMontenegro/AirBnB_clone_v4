window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");

    for (let li of listAmenities) {
        $(li).first().click(function() {
            let amenCheckState = $(li).first();
            let amenName = $(li).text();
            let h4 = $('DIV.amenities h4');
            if (amenCheckState.is(':checked')) {
                amenCheckState.prop('checked', false);
                console.log("falso");
            } else {
                amenCheckState.prop('checked', true);
                console.log("true");
                h4.append(amenName);
            }
        });
    }
};
